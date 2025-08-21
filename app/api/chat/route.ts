import { NextResponse } from "next/server";
import { openai } from "@/lib/openai"; // import from server-only module

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "No message provided" }, { status: 400 });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-3.5-turbo" if you want to test
      messages: [
        { role: "system", content: "You are a helpful chatbot that answers like a human." },
        { role: "user", content: message },
      ],
    });

    // Log raw completion to debug
    console.log("Raw completion:", completion);

    // Only use the standard chat completion field
    const reply = completion.choices?.[0]?.message?.content?.trim() || "(no reply)";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
