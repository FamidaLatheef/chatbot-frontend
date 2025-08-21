"use client";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async () => {
    if (!input) return;

    // Show user’s message
    setMessages((prev) => [...prev, `You: ${input}`]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, `Bot: ${data.reply}`]);
      } else {
        setMessages((prev) => [...prev, "Bot: (no reply)"]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, "Bot: (error talking to server)"]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-2xl font-bold mb-4">💬 My Chatbot</h1>

      <div className="w-full max-w-md flex-1 space-y-2 border p-4 rounded bg-white shadow">
        {messages.map((msg, idx) => (
          <div key={idx} className="text-sm">
            {msg}
          </div>
        ))}
      </div>

      <div className="mt-4 flex w-full max-w-md">
        <input
          className="flex-1 border rounded-l px-2 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

