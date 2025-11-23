import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from "../types";
import { generateSystemInstruction } from "../constants";

let chatSession: Chat | null = null;

export const sendMessageToGemini = async (
  currentMessages: Message[],
  newMessage: string
): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set REACT_APP_GEMINI_API_KEY or use process.env.API_KEY");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  // Initialize chat session if it doesn't exist
  if (!chatSession) {
    // Generate the prompt dynamically from the database state
    const systemInstruction = generateSystemInstruction();
    
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2, // Low temperature for high precision based on DB
      },
    });
  }

  try {
    const result = await chatSession.sendMessage({ message: newMessage });
    return result.text || "I could not retrieve the requested data from the knowledge base.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Module connection failed. Please retry.");
  }
};