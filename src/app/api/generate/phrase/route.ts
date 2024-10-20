import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { prompt } = await req.json() as { prompt: string };

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([`Generate a company phrase for the following business: ${prompt}. Consider the industry, target audience, and overall brand personality. Create a short, catchy phrase that encapsulates the company's mission, values, or unique selling proposition. The phrase should be memorable, impactful, and suitable for use in marketing materials and brand messaging. Return a single string containing the company phrase. Do not include any additional explanation or ask for more information.`]);

    return NextResponse.json({ "phrase": result.response.text().trim() });
}