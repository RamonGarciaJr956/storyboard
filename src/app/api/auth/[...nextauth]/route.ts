import NextAuth, { type NextAuthOptions } from "next-auth";
import { decode, encode } from "next-auth/jwt";
import { v4 as uuidV4 } from "uuid";
import { eq } from 'drizzle-orm';
import { authOptions } from "~/server/auth";
import { tracker } from "~/server/db/schema";
import { db } from "~/server/db";

type CombineRequest = Request & NextApiRequest;
type CombineResponse = Response & NextApiResponse;

const handler = async (req: CombineRequest, res: CombineResponse) => {
    const callbacks: NextAuthOptions["callbacks"] = {
        ...authOptions.callbacks,
        async signIn({ user, account }) {
            if (account?.provider !== 'credentials' && account?.providerAccountId) {
                try {
                    const existingTracker = await db.select()
                        .from(tracker)
                        .where(eq(tracker.providerId, account.providerAccountId))
                        .limit(1);
        
                    if (existingTracker.length === 0) {
                        await db.insert(tracker).values({
                            providerId: account.providerAccountId,
                            firstLogin: true,
                        });

                        console.log(`Tracker created for provider account ID: ${account.providerAccountId}`);
                    } else {
                        console.log(`Tracker already exists for provider account ID: ${account.providerAccountId}`);
                    }
                } catch (error) {
                    console.error("Error managing tracker:", error instanceof Error ? error.message : String(error));
                }
            }
            
            if (req.url?.includes("callback") && req.url.includes("credentials") && req.method === "POST") {
                const sessionToken = generateSessionToken();
                const sessionExpiry = fromDate(
                    //expires in 1 day
                    authOptions.session?.maxAge ?? 1 * 24 * 60 * 60,
                );

                const createdSession = await (authOptions.adapter!).createSession?.({
                    sessionToken: sessionToken,
                    userId: user.id,
                    expires: sessionExpiry,
                });

                if (!createdSession) return false;

                const cks = cookies();
                cks.set({
                    name: "next-auth.session-token",
                    value: sessionToken,
                    expires: sessionExpiry,
                });
            }

            return true;
        },
    };

    const jwt: NextAuthOptions["jwt"] = {
        ...authOptions.jwt,
        // expires in 1 day
        maxAge: 60 * 60 * 24 * 1,
        encode: async ({ token, secret, maxAge }) => {
            if (req.url?.includes("callback") && req.url.includes("credentials") && req.method === "POST") {
                const cks = cookies();

                const cookie = cks?.get("next-auth.session-token");

                if (cookie) return cookie.value;
                else return "";
            }

            return encode({
                token,
                secret,
                maxAge,
            });
        },
        decode: async ({ token, secret }) => {
            if (req.url?.includes("callback") && req.url.includes("credentials") && req.method === "POST") {
                return null;
            }

            return decode({ token, secret });
        },
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await NextAuth(req, res, {
        ...authOptions,
        callbacks,
        jwt,
    });
};

export { handler as GET, handler as POST };

const generate = {
    uuid: (): string => {
        return uuidV4();
    },
};

import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { type NextApiRequest, type NextApiResponse } from "next";

const generateSessionToken = () => {
    return randomUUID?.() ?? generate.uuid();
};

const fromDate = (time: number, date = Date.now()) => {
    return new Date(date + time * 1000);
};