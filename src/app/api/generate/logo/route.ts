import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { prompt } = await req.json() as { prompt: string };

    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CLOUDFLARE_API_KEY}`
        },
        body: JSON.stringify({
            prompt: `Clean, sharp, vectorized mon, Company logo, icon, trending, modern and minimalist logo design for a company named "${prompt}. Dont use any text in the logo.`,
        })
    });

    const data = await response.json() as { result: { image: string } };
    const base64Image = data.result.image;

    const imageBuffer = Buffer.from(base64Image, 'base64');

    const headers = new Headers();
    headers.set("Content-Type", "image/jpeg");
    headers.set("Content-Length", imageBuffer.length.toString());

    return new NextResponse(imageBuffer, { 
        status: 200, 
        statusText: "OK", 
        headers 
    });
}