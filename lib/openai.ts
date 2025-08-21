import OpenAI from "openai";

// ✅ Debug: print last 5 characters of the key
console.log("DEBUG OPENAI_API_KEY:", process.env.OPENAI_API_KEY?.slice(-5));

// ✅ Ensure the API key exists
if (!process.env.OPENAI_API_KEY) {
  throw new Error(
    "Missing OPENAI_API_KEY in environment. Please add it to .env.local"
  );
}

// ✅ Create and export OpenAI client
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // Optional: set basePath if you have a custom endpoint
  // basePath: process.env.OPENAI_API_BASE_URL,
});


