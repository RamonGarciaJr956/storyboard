import { NextResponse } from 'next/server';
import { db } from "~/server/db";
import { users, tracker } from "~/server/db/schema";
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    name: z.string().min(1),
});

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json();

        if (!body || typeof body !== 'object') {
            return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
        }

        const validatedBody = SignUpSchema.parse(body);
        const { email, password, name } = validatedBody;

        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email),
        });

        if (existingUser) {
            return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.transaction(async (trx) => {
            const insertedUser = await trx.insert(users).values({
                email,
                name,
                password: hashedPassword,
                emailVerified: null,
            }).returning({
                id: users.id,
                email: users.email,
                name: users.name,
            });
        
            await trx.insert(tracker).values({
                providerId: email,  // Using email as the ID for credential-based signups
                firstLogin: true,
            });
        
            return insertedUser[0];
        });

        return NextResponse.json({
            message: 'User created successfully',
            user: newUser
        }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: 'Invalid input', errors: error.errors }, { status: 400 });
        }
        console.error('Error creating user:', error);
        return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
    }
}