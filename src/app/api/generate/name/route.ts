import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { prompt } = await req.json() as { prompt: string };

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([`Generate a company name for the following business: ${prompt}. Consider the industry, target audience, and overall brand personality. Choose a name that evokes the appropriate emotions and aligns with the business's values. The name should be memorable, unique, and suitable for use across various marketing materials and brand assets. Return a single string containing the company name. Do not include any additional explanation or ask for more information.`]);

    return NextResponse.json({ "name": result.response.text().trim() });
}