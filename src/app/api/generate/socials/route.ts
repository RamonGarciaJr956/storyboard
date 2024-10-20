import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

interface SocialTip {
  title: string;
  message: string;
}

function parseJsonArray(jsonString: string): SocialTip[] | null {
    try {
      const parsedData = JSON.parse(jsonString) as unknown;
  
      if (Array.isArray(parsedData)) {
        const validData = parsedData.every((item: unknown): item is SocialTip => 
          typeof item === 'object' &&
          item !== null &&
          'title' in item &&
          'message' in item &&
          typeof (item as { title: unknown }).title === 'string' &&
          typeof (item as { message: unknown }).message === 'string'
        );
  
        if (validData) {
          return parsedData;
        } else {
          throw new Error('Invalid data structure in array');
        }
      } else {
        throw new Error('Parsed data is not an array');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error instanceof Error ? error.message : String(error));
      return null;
    }
  }

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json() as { prompt: string };

    if(!prompt) {
      NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? '');

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([`Generate social media tips and guides for the following business: ${prompt}. Consider the industry, target audience, and overall brand personality. Provide practical advice on creating an effective social media presence, including platform selection, content strategy, engagement tactics, and best practices. Focus on actionable tips that align with the business's values and goals. Return a concise list of 5-7 key points, each containing a specific tip or guide for social media success. Format the response as an array of JSON objects, with each tip having a 'title' and a 'message'. Do not include any additional explanation or ask for more information. Example response format: [ {"title": "Tip title 1", "message": "Detailed message for tip 1" }, { "title": "Tip title 2", "message": "Detailed message for tip 2" },{"title": "Tip title 3","message": "Detailed message for tip 3"} ]`]);
    const parsedPoints = parseJsonArray(result.response.text().trim());

    if (parsedPoints === null) {
      throw new Error('Failed to parse JSON response');
    }

    return NextResponse.json({ points: parsedPoints });
  } catch (error) {
    console.error('Error in POST request:', error instanceof Error ? error.message : String(error));
    return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 });
  }
}