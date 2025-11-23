import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Database } from 'lucide-react';
import { Message, LoadingState } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import { sendMessageToGemini } from '../services/geminiService';

interface ChatInterfaceProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  onMobileMenuClick: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, setMessages, onMobileMenuClick }) => {
  const [inputText, setInputText] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loadingState]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
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
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="h-16 border-b border-slate-100 flex items-center justify-between px-4 md:px-6 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={onMobileMenuClick} className="md:hidden p-2 -ml-2 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              Bharat BreedBot
              <span className="text-[10px] font-normal bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200">BETA</span>
            </h2>
            <p className="text-xs text-slate-500 hidden sm:block">Indian Cattle & Buffalo Expert AI</p>
          </div>
        </div>
        <div className="text-xs text-slate-400 font-medium">
          <span className="text-green-600 flex items-center gap-1">
            <Database size={14} />
            Knowledge Base Active
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50/50">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[90%] md:max-w-[80%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm ${
                msg.role === 'user' ? 'bg-indigo-600' : 'bg-green-700'
              }`}>
                {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
              </div>

              {/* Bubble */}
              <div className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
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
            <div className="flex max-w-[80%] gap-3">
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                <Loader2 size={18} className="animate-spin text-green-600" />
                <span className="text-slate-500 text-sm">Analyzing breed documents...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100 z-10">
        <div className="max-w-4xl mx-auto relative flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all shadow-sm">
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about morphology, milk yield, or compare breeds..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400 resize-none max-h-[150px] py-2 px-2 text-sm md:text-base"
            rows={1}
          />
          <button 
            onClick={handleSendMessage}
            disabled={!inputText.trim() || loadingState === LoadingState.PROCESSING}
            className="p-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mb-0.5"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="text-center mt-2">
           <p className="text-[10px] text-slate-400">
             BreedBot can make mistakes. Always verify with official veterinary sources.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
