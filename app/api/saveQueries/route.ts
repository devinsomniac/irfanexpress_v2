// app/api/saveQueries/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { queries } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, phone, email, query } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { message: "Name and phone number are required" },
        { status: 400 }
      );
    }

    // Insert the form data into the database
    const newQuery = await db
      .insert(queries)
      .values({
        name,
        phone,
        email: email || null,
        queriess: query || null, // Changed from 'query' to 'queriess'
      })// Optionally return the ID

    return NextResponse.json(
      {
        message: "Query submitted successfully",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error saving query:", err);
    return NextResponse.json(
      { message: "Internal server error", error: String(err) }, // Include error for debugging
      { status: 500 }
    );
  }
}