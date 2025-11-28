import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Plus, Mic, GripHorizontal, PawPrint, ArrowRight, Download } from 'lucide-react';
import { Message, LoadingState } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import { sendMessageToGemini } from '../services/geminiService';

interface ChatInterfaceProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, setMessages }) => {
  const [inputText, setInputText] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Determine if we are in "Hero Mode" (No user interaction yet) or "Chat Mode"
  const hasStarted = messages.length > 0;

  const scrollToBottom = () => {
    // Small timeout ensures DOM is fully painted before scrolling, preventing "jumps"
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loadingState]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      // If in hero mode, limit height differently or keep single line
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [inputText]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || loadingState === LoadingState.PROCESSING) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText.trim(),
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    
    // Reset height manually to prevent jump
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    setLoadingState(LoadingState.PROCESSING);

    try {
      const responseText = await sendMessageToGemini(messages, userMsg.text);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, botMsg]);
      setLoadingState(LoadingState.IDLE);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "⚠️ I encountered an error accessing my knowledge base. Please try again.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMsg]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleDownloadChat = () => {
    if (messages.length === 0) return;

    const transcript = messages.map(m => {
      const role = m.role === 'user' ? 'User' : 'Petaura';
      const time = new Date(m.timestamp).toLocaleString();
      return `[${time}] ${role}:\n${m.text}\n`;
    }).join('\n-----------------------------------\n\n');

    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Petaura_Chat_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Custom styles for the paw animation
  const animationStyles = `
    @keyframes paw-bounce {
      0%, 100% { transform: translateY(0); opacity: 0.4; }
      50% { transform: translateY(-4px); opacity: 1; }
    }
    .paw-anim-1 { animation: paw-bounce 1s infinite; animation-delay: 0s; }
    .paw-anim-2 { animation: paw-bounce 1s infinite; animation-delay: 0.2s; }
    .paw-anim-3 { animation: paw-bounce 1s infinite; animation-delay: 0.4s; }
  `;

  // ==========================================
  // RENDER: HERO VIEW (Initial State)
  // ==========================================
  if (!hasStarted) {
    return (
      <div className="flex-1 flex flex-col h-full bg-white relative items-center justify-center p-6 pb-24">
        <div className="flex flex-col items-center w-full max-w-xs animate-in fade-in duration-700 slide-in-from-bottom-4">
          
          {/* Logo & Branding */}
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-gradient-to-tr from-green-600 to-emerald-400 rounded-3xl flex items-center justify-center shadow-xl shadow-green-100 transform rotate-3 transition-transform hover:rotate-0">
              <PawPrint size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight mt-2">Petaura</h1>
            <p className="text-slate-500 text-center text-sm max-w-[240px] leading-relaxed">
              Your expert AI assistant for Cattle, Buffalo, Dog, and Cat breeds.
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-slate-200 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-all flex items-center p-1.5 gap-2 focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-300">
              
              {/* Text Input */}
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about a breed..."
                className="flex-1 h-10 bg-transparent border-none outline-none focus:outline-none ring-0 focus:ring-0 text-slate-800 placeholder-slate-400 text-base pl-4"
                autoFocus
              />

              {/* Send/Action Button */}
              <button 
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex-shrink-0"
              >
                {loadingState === LoadingState.PROCESSING ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <ArrowRight size={20} /> 
                )}
              </button>
            </div>
          </div>

          {/* Optional Quick Chips */}
          <div className="mt-8 flex gap-2 flex-wrap justify-center">
            {['Gir Cattle', 'Murrah', 'Siamese Cat', 'Mudhol Hound'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setInputText(`Tell me about ${suggestion}`);
                }}
                className="text-xs px-3 py-1.5 bg-slate-50 text-slate-500 rounded-lg border border-slate-100 hover:border-green-200 hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>

        </div>

        {/* Footer Hint */}
        <div className="absolute bottom-8 text-center">
             <p className="text-[10px] text-slate-300 font-medium tracking-wide uppercase">
               Powered by Petaura Intelligence
             </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER: CHAT VIEW (Active State)
  // ==========================================
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white relative">
      <style>{animationStyles}</style>

      {/* Header */}
      <div className="h-14 border-b border-slate-100 flex items-center justify-between px-4 bg-white/90 backdrop-blur-sm z-10 sticky top-0 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center shadow-sm">
            <PawPrint size={16} className="text-white" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-slate-800 leading-tight">
              Petaura
            </h2>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[10px] text-slate-500 font-medium">Online</p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <button 
          onClick={handleDownloadChat}
          className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-green-600 hover:bg-green-50 transition-colors"
          title="Download Chat History"
        >
          <Download size={18} />
        </button>
      </div>

      {/* Messages Area - Added min-h-0 for proper flex scrolling */}
      <div className="flex-1 overflow-y-auto min-h-0 p-4 space-y-4 bg-slate-50/50 scroll-smooth">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[85%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar */}
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-white ${
                msg.role === 'user' ? 'bg-slate-200' : 'bg-green-100'
              }`}>
                {msg.role === 'user' ? <User size={14} className="text-slate-600" /> : <PawPrint size={14} className="text-green-700" />}
              </div>

              {/* Bubble */}
              <div className={`px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-slate-800 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
              }`}>
                {msg.role === 'user' ? (
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                ) : (
                  <MarkdownRenderer content={msg.text} />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {loadingState === LoadingState.PROCESSING && (
          <div className="flex w-full justify-start">
            <div className="flex max-w-[80%] gap-2">
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-white">
                <PawPrint size={14} className="text-green-700" />
              </div>
              
              {/* Thinking Bubble with Animation */}
              <div className="bg-white border border-slate-100 px-4 py-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                <PawPrint size={14} className="text-green-500 paw-anim-1 fill-green-500" />
                <PawPrint size={14} className="text-green-500 paw-anim-2 fill-green-500" />
                <PawPrint size={14} className="text-green-500 paw-anim-3 fill-green-500" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (Chat Mode) */}
      <div className="p-3 bg-white border-t border-slate-100 z-10 shrink-0">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-[24px] p-1.5 focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-300 transition-all shadow-sm">
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Petaura..."
            className="flex-1 bg-transparent border-none outline-none focus:outline-none ring-0 focus:ring-0 text-slate-800 placeholder-slate-400 resize-none max-h-[100px] py-2.5 px-4 text-sm"
            rows={1}
            autoFocus
          />
          <button 
            onClick={handleSendMessage}
            disabled={!inputText.trim() || loadingState === LoadingState.PROCESSING}
            className="p-2.5 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95 shadow-sm flex-shrink-0"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;