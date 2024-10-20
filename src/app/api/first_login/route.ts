import { getServerSession } from "next-auth";
import { authOptions } from "src/server/auth";
import { db } from "~/server/db";
import { tracker, users, accounts } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const userTracker = await db
            .select({ firstLogin: tracker.firstLogin })
            .from(users)
            .innerJoin(accounts, eq(users.id, accounts.userId))
            .innerJoin(tracker, eq(accounts.providerAccountId, tracker.providerId))
            .where(
                eq(users.id, session.user.id),
            )
            .limit(1);

        if (userTracker.length === 0) {
            return new Response("Tracker not found", { status: 404 });
        }

        if (!userTracker[0]) {
            return NextResponse.json({ error: "Unable to find entry" }, { status: 404 });
        }

        return new Response(JSON.stringify({ firstLogin: userTracker[0].firstLogin }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching tracker:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}