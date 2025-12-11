'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User as UserIcon, Sparkles, Zap, Brain, Code, Settings } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I've processed your request. Here's what I found...",
        "That's an interesting question! Let me check the data...",
        "I can help with that. Analyzing the information now...",
        "Great question! Here's what I discovered...",
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
        aria-label="Open AI Assistant"
      >
        <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 w-96 bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 flex flex-col" style={{ height: '600px' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/80 to-cyan-800/80 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Bot className="w-6 h-6 text-blue-300" />
          </div>
          <div>
            <h3 className="font-semibold text-white">AI Assistant</h3>
            <p className="text-xs text-blue-200">Nexus Cortex AI</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.sender === 'ai'
                  ? 'bg-gray-800/80 text-white rounded-tl-none'
                  : 'bg-blue-600/90 text-white rounded-tr-none'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.sender === 'ai' ? (
                  <Bot className="w-5 h-5 mt-0.5 text-blue-300 flex-shrink-0" />
                ) : (
                  <UserIcon className="w-5 h-5 mt-0.5 text-blue-100 flex-shrink-0" />
                )}
                <div>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-1 p-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-800">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="w-full bg-gray-800/80 border border-gray-700 rounded-full py-3 pl-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded hover:bg-gray-800/50">
              <Code className="w-4 h-4" />
            </button>
            <button className="p-1 rounded hover:bg-gray-800/50">
              <Brain className="w-4 h-4" />
            </button>
          </div>
          <span>Nexus AI v1.0</span>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
