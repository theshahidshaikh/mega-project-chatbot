import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import { Message } from './types';
import { INITIAL_MESSAGE } from './constants';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'model',
      text: INITIAL_MESSAGE,
      timestamp: Date.now()
    }
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <ChatInterface 
        messages={messages} 
        setMessages={setMessages} 
        onMobileMenuClick={() => setIsSidebarOpen(true)}
      />
    </div>
  );
}

export default App;
