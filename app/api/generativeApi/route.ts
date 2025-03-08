import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (req: NextRequest) => {
    const genAiApi = process.env.GEMINI_API!
    const genAI = new GoogleGenerativeAI(genAiApi)
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
    try {
        const body = await req.json()
        const { destination, group, budget, duration } = body
        const prompt = `Build me a travel plan to ${destination} for ${group} people in ${budget} budget for ${duration} days . The output should be in json and also give normal tips about each activity and the currency should be of that country`
        console.time("GenerateContent");
        const result = await model.generateContent(prompt);
        console.timeEnd("GenerateContent");
        let responseText = result.response.text()
        responseText = responseText
            .trim()
            .replace(/^```json\s*\n/, '')
            .replace(/\n\s*```$/, '');
        let travelPlan
        try {
            travelPlan = JSON.parse(responseText)
        } catch (parseError) {
            return NextResponse.json(
                { message: parseError, rawResponse: responseText },
                { status: 200 }
            )
        }
        return NextResponse.json(
            { message: "Successful Generated", data: travelPlan },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            { message: err },
            { status: 500 }
        )
    }
}