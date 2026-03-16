import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot } from 'lucide-react';
import { sampleChatMessages, aiSuggestions } from '../data/mockData';

export default function AIChatPanel() {
  const [messages, setMessages] = useState(sampleChatMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: "Analyzing your data... I've identified key patterns in the selected time range. The metric shows a statistically significant trend with 94.2% confidence. Would you like me to generate a detailed breakdown report?"
      }]);
    }, 1800);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d1414] border-r border-[#1e2e2e] w-[280px] flex-shrink-0">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2e2e]">
        <div className="w-6 h-6 rounded-lg bg-[#00e5cc]/10 flex items-center justify-center">
          <Sparkles size={12} className="text-[#00e5cc]" />
        </div>
        <span className="text-[12px] font-semibold text-[#e8f4f4]">AI Assistant</span>
        <span className="ml-auto text-[9px] text-[#00e5cc] bg-[#00e5cc]/10 px-2 py-0.5 rounded-full border border-[#00e5cc]/15">LIVE</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`animate-[fadeIn_0.3s_ease-out] ${msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-5 h-5 rounded-full bg-[#00e5cc]/15 border border-[#00e5cc]/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <Bot size={10} className="text-[#00e5cc]" />
              </div>
            )}
            <div className={`max-w-[85%] rounded-xl px-3 py-2 text-[12px] leading-relaxed ${
              msg.role === 'user'
                ? 'bg-[#00e5cc]/12 border border-[#00e5cc]/15 text-[#00e5cc]'
                : 'bg-[#111a1a] border border-[#1e2e2e] text-[#b0c8c8]'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#00e5cc]/15 border border-[#00e5cc]/20 flex items-center justify-center flex-shrink-0">
              <Bot size={10} className="text-[#00e5cc]" />
            </div>
            <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl px-3 py-2 flex items-center gap-1">
              {[0, 1, 2].map(i => (
                <span key={i} className="w-1 h-1 rounded-full bg-[#00e5cc]/60 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      <div className="px-3 pb-2">
        <div className="text-[10px] text-[#4a6868] mb-1.5 uppercase tracking-wider">Suggestions</div>
        <div className="flex flex-wrap gap-1.5">
          {aiSuggestions.slice(0, 3).map((s, i) => (
            <button key={i} onClick={() => sendMessage(s)}
              className="text-[10px] text-[#7a9e9e] bg-[#111a1a] border border-[#1e2e2e] rounded-lg px-2 py-1 hover:border-[#00e5cc]/30 hover:text-[#00e5cc] transition-all">
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-3 pb-3">
        <div className="flex items-center gap-2 bg-[#111a1a] border border-[#1e2e2e] rounded-xl px-3 py-2 focus-within:border-[#00e5cc]/30 transition-colors">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            placeholder="Ask anything about your data..."
            className="flex-1 bg-transparent border-none text-[12px] text-[#e8f4f4] placeholder-[#4a6868] outline-none p-0"
          />
          <button onClick={() => sendMessage(input)}
            className="w-6 h-6 rounded-lg bg-[#00e5cc] flex items-center justify-center hover:bg-[#00c9b1] transition-colors flex-shrink-0">
            <Send size={11} className="text-[#0a0f0f]" />
          </button>
        </div>
      </div>
    </div>
  );
}
