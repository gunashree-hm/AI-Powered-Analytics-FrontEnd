import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return value;
}

export default function StatCard({ label, value, change, prefix = '', suffix = '', icon: Icon, raw }) {
  const isPositive = parseFloat(change) >= 0;

  return (
    <div className="stat-card animate-[fadeIn_0.4s_ease-out]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] text-[#7a9e9e] uppercase tracking-widest font-medium">{label}</span>
        {Icon && (
          <div className="w-7 h-7 rounded-lg bg-[#00e5cc]/8 border border-[#00e5cc]/12 flex items-center justify-center">
            <Icon size={14} className="text-[#00e5cc]" />
          </div>
        )}
      </div>

      {/* Value */}
      <div className="text-[24px] font-bold text-[#e8f4f4] font-mono mb-1 leading-none">
        {prefix}<span>{raw || value}</span>{suffix}
      </div>

      {/* Change */}
      <div className={`flex items-center gap-1 text-[12px] font-medium mt-2 ${isPositive ? 'text-[#00e5cc]' : 'text-[#ff6b6b]'}`}>
        {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        <span>{isPositive ? '+' : ''}{change}%</span>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar mt-3">
        <div
          className="progress-fill"
          style={{ width: `${Math.min(Math.abs(parseFloat(change)) * 6, 100)}%` }}
        />
      </div>
    </div>
  );
}
