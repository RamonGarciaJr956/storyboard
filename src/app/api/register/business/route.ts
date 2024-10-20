import { getServerSession } from "next-auth";
import { authOptions } from "src/server/auth";
import { db } from "~/server/db";
import { buinesses, tracker, users, accounts } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    const { businessPlan, financePlan, legalPlan, prodPlan } = await req.json() as { businessPlan: string, financePlan: string, legalPlan: string, prodPlan: string };

    if (!session?.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        return await db.transaction(async (tx) => {
            // Insert business data
            const businessResp = await tx.insert(buinesses).values({
                userId: session.user.id,
                buinessesIdeas: businessPlan,
                finance: financePlan,
                familiarWithLegal: legalPlan,
                productsToSell: prodPlan,
            }).returning();

            try {
                const bruh = await tx.select({ providerAccountId: accounts.providerAccountId })
                    .from(users)
                    .innerJoin(accounts, eq(users.id, accounts.userId))
                    .where(eq(users.id, session.user.id))
                    .limit(1)
                    .then((result) => result[0]?.providerAccountId);

                if (bruh === undefined) {
                    console.error("No provider account found for user:", session.user.id);
                    return; // or throw an error
                }

                console.log("Provider Account ID found:", bruh);

                const existingTracker = await tx.select().from(tracker).where(eq(tracker.providerId, bruh));
                console.log("Existing tracker records:", existingTracker);

                const updateResult = await tx
                    .update(tracker)
                    .set({ firstLogin: false })
                    .where(eq(tracker.providerId, bruh));

                console.log("Update result details:", updateResult);

                if (updateResult.count === 0) {
                    console.error("Update failed: No matching tracker found for providerId:", bruh);
                } else {
                    console.log("Update successful:", updateResult);
                }
            } catch (error) {
                console.error("Error during transaction:", error);
            }

            return new Response(JSON.stringify(businessResp), { status: 201 });
        });
    } catch (error) {
        console.error("Error in POST operation:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}