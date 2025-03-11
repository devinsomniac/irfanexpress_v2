export const maxDuration = 60;
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { travelPlan } from "@/lib/db/schema";

export const POST = async (req: NextRequest) => {
    const genAiApi = process.env.GEMINI_API!
    const genAI = new GoogleGenerativeAI(genAiApi)
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
    const session = await auth()
    try {
        const body = await req.json()
        const { destination, group, budget, duration } = body
        const prompt = `Build me a travel plan to ${destination} for ${group} people in ${budget} budget for ${duration} days. The output must be in JSON format with the following exact structure:
        {
          "tripName": "string",
          "destination": "string",
          "duration": "string",
          "travelers": "string",
          "budget": "string",
          "currency": "string",
          "food": { "style": "string", "estimated_cost_per_day": "string", "recommendations": ["string"], "tips": ["string"] },
          "important_notes": ["string"],
          "itinerary": [
            { "day": number, "theme": "string", "activities": [{ "name": "string", "time": "string", "cost": "string", "tips": ["string"], "description": "string" }] }
          ],
          "accommodation": { "type": "string", "cost": "string", "recommendations": ["string"], "tips": ["string"] },
          "transportation": { "type": "string", "cost": "string", "tips": ["string"] }
        }
        Ensure all fields are present, even if empty (e.g., use empty arrays or strings). Include normal tips for each activity and use the local currency of the destination country.` 
        const result = await model.generateContent(prompt);
        let responseText = result.response.text()
        responseText = responseText
            .trim()
            .replace(/^```json\s*\n/, '')
            .replace(/\n\s*```$/, '');
        let travelPlanDetails
        try {
            travelPlanDetails = JSON.parse(responseText)
        } catch (parseError) {
            return NextResponse.json(
                { message: parseError, rawResponse: responseText },
                { status: 200 }
            )
        }

        if (session?.user?.id) {
            const savedPlan = await db.insert(travelPlan).values({
                userId: session?.user?.id,
                destination,
                groupSize : group,
                budget,
                duration,
                planDetails: travelPlanDetails,

            }).returning({planId : travelPlan.planId})

            return NextResponse.json(
                {
                    message: "The Plan has been saved in your Profile",
                    data: {
                        planId : savedPlan[0].planId
                    }
                }
            )
        }

        return NextResponse.json(
            {
                message: "Successfully Plan Generated - (not saved - login required)",
                data: {
                    destination,
                    groupSize: group,
                    budget,
                    duration,
                    planDetails: travelPlanDetails,
                }
            },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            { message: err },
            { status: 500 }
        )
    }
}