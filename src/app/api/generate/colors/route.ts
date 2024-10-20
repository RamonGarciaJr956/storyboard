import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const extractHexCodes = (inputString: string) => {
    const hexRegex = /#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;

    const matches = inputString.match(hexRegex);

    return matches ? matches.map(code => code.startsWith('#') ? code : `#${code}`) : [];
};

export async function POST(req: Request) {
    const { prompt } = await req.json() as { prompt: string };

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([`Generate a color palette for the following business: ${prompt}. Consider the industry, target audience, and overall brand personality. Choose colors that evoke the appropriate emotions and align with the business's values. Provide a harmonious and balanced set of colors that work well together and can be used across various marketing materials and brand assets. Return a string containing exactly four hex color codes, separated by commas. Do not include any additional explanation or ask for more information. Example response format: #XXXXXX,#XXXXXX,#XXXXXX,#XXXXXX`]);

    const hexCodes = extractHexCodes(result.response.text().trim());
    return NextResponse.json({ "colors": hexCodes });
}