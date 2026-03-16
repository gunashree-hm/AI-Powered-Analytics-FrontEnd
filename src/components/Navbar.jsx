import React, { useState } from 'react';
import { Bell, Search, Calendar, Download, ChevronDown } from 'lucide-react';

const tabs = ['Overview', 'Performance', 'Segmentation'];

export default function Navbar({ activeTab, onTabChange, title, subtitle }) {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-0 border-b border-[#1e2e2e] bg-[#0d1414] h-[52px] flex-shrink-0">
      {/* Tabs */}
      <div className="flex items-center gap-6 h-full">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => onTabChange?.(tab)}
            className={`text-[13px] font-medium h-full border-b-2 transition-all px-1 ${
              activeTab === tab
                ? 'text-[#00e5cc] border-[#00e5cc]'
                : 'text-[#7a9e9e] border-transparent hover:text-[#e8f4f4]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Live Stream Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111a1a] border border-[#1e2e2e] text-[11px] text-[#00e5cc] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5cc] animate-pulse" />
          LIVE STREAM
        </div>

        {/* Quarter Selector */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111a1a] border border-[#1e2e2e] text-[12px] text-[#7a9e9e] hover:border-[#00e5cc]/30 hover:text-[#e8f4f4] transition-all">
          <Calendar size={12} />
          Q4 2023
          <ChevronDown size={11} />
        </button>

        {/* Export */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111a1a] border border-[#1e2e2e] text-[12px] text-[#7a9e9e] hover:border-[#00e5cc]/30 hover:text-[#e8f4f4] transition-all">
          <Download size={12} />
          Export
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotif(!showNotif)}
            className="relative w-8 h-8 flex items-center justify-center rounded-lg border border-[#1e2e2e] bg-[#111a1a] text-[#7a9e9e] hover:text-[#00e5cc] hover:border-[#00e5cc]/30 transition-all"
          >
            <Bell size={14} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#00e5cc]" />
          </button>
          {showNotif && (
            <div className="absolute right-0 top-10 w-72 bg-[#111a1a] border border-[#1e2e2e] rounded-xl shadow-xl z-50 p-3">
              <div className="text-[11px] text-[#4a6868] uppercase tracking-wider mb-2 px-1">Notifications</div>
              {[
                { text: 'APAC segment crossed $5M LTV threshold', time: '2m ago' },
                { text: 'Churn spike detected in Dormant Trials', time: '14m ago' },
                { text: 'New AI suggestion available', time: '1h ago' },
              ].map((n, i) => (
                <div key={i} className="flex gap-3 p-2 rounded-lg hover:bg-[#162020] cursor-pointer transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5cc] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-[12px] text-[#e8f4f4] leading-snug">{n.text}</div>
                    <div className="text-[10px] text-[#4a6868] mt-0.5">{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-[#1e2e2e]">
          <div className="text-right">
            <div className="text-[12px] font-medium text-[#e8f4f4]">Alexander Thorne</div>
            <div className="text-[10px] text-[#4a6868]">Chief Analyst</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00e5cc]/30 to-[#008a7a]/30 border border-[#00e5cc]/20 flex items-center justify-center text-[11px] text-[#00e5cc] font-semibold">
            AT
          </div>
        </div>
      </div>
    </header>
  );
}
