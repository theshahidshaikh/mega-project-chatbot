import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import { Message } from './types';

function App() {
  // Start empty to show the "Hero/Search" view first
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-0 sm:p-4 font-sans">
      {/* 
        Container configured for "Mobile Widget" look.
        On Desktop: Fixed width (380px) and Height (700px) to simulate a phone rectangle.
        On Mobile: Full width/height (100dvh).
      */}
      <div className="w-full h-[100dvh] sm:w-[380px] sm:h-[min(700px,95vh)] bg-white sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col border border-slate-200 relative ring-8 ring-slate-900/5">
        {/* Notch/Status Bar Simulation - purely aesthetic for the phone look */}
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-50 rounded-b-2xl z-50"></div>
        
        <ChatInterface 
          messages={messages} 
          setMessages={setMessages} 
        />
      </div>
    </div>
  );
}

export default App;