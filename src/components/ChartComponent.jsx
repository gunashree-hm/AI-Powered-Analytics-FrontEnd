import React from 'react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, FunnelChart, Funnel, LabelList
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#162020] border border-[#00e5cc]/20 rounded-xl p-3 shadow-xl">
      {label && <div className="text-[11px] text-[#7a9e9e] mb-1.5">{label}</div>}
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 text-[12px]">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-[#7a9e9e]">{p.name}:</span>
          <span className="text-[#e8f4f4] font-medium font-mono">
            {typeof p.value === 'number' && p.value > 10000
              ? `$${(p.value / 1000000).toFixed(1)}M`
              : p.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export function AreaChartComponent({ data, lines = [], height = 240 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
        <defs>
          {lines.map((l, i) => (
            <linearGradient key={l.key} id={`grad-${l.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={l.color} stopOpacity={0.25} />
              <stop offset="95%" stopColor={l.color} stopOpacity={0.02} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(30,46,46,0.5)" />
        <XAxis dataKey="month" tick={{ fill: '#4a6868', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#4a6868', fontSize: 11 }} axisLine={false} tickLine={false}
          tickFormatter={v => v > 1000 ? `$${(v/1000000).toFixed(1)}M` : v} />
        <Tooltip content={<CustomTooltip />} />
        {lines.map(l => (
          <Area key={l.key} type="monotone" dataKey={l.key} name={l.label}
            stroke={l.color} strokeWidth={2} fill={`url(#grad-${l.key})`} dot={false}
            activeDot={{ r: 4, fill: l.color, stroke: '#0a0f0f', strokeWidth: 2 }}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function BarChartComponent({ data, bars = [], height = 240, xKey = 'day' }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(30,46,46,0.5)" vertical={false} />
        <XAxis dataKey={xKey} tick={{ fill: '#4a6868', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#4a6868', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        {bars.map(b => (
          <Bar key={b.key} dataKey={b.key} name={b.label} fill={b.color}
            radius={[3, 3, 0, 0]} maxBarSize={40} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export function LineChartComponent({ data, lines = [], height = 220, xKey = 'time' }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(30,46,46,0.5)" />
        <XAxis dataKey={xKey} tick={{ fill: '#4a6868', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#4a6868', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        {lines.map(l => (
          <Line key={l.key} type="monotone" dataKey={l.key} name={l.label}
            stroke={l.color} strokeWidth={2} dot={false}
            activeDot={{ r: 4, fill: l.color, stroke: '#0a0f0f', strokeWidth: 2 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({ data, size = 160, innerText, innerLabel }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <PieChart width={size} height={size}>
        <Pie data={data} cx="50%" cy="50%" innerRadius={size * 0.32} outerRadius={size * 0.46}
          dataKey="value" startAngle={90} endAngle={-270} strokeWidth={0}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.color} />
          ))}
        </Pie>
        <Tooltip content={({ active, payload }) => {
          if (!active || !payload?.length) return null;
          return (
            <div className="bg-[#162020] border border-[#00e5cc]/20 rounded-lg p-2 text-[12px]">
              <span className="text-[#e8f4f4]">{payload[0].name}: </span>
              <span className="text-[#00e5cc] font-mono">{payload[0].value}%</span>
            </div>
          );
        }} />
      </PieChart>
      {innerText && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[18px] font-bold text-[#e8f4f4] font-mono">{innerText}</span>
          {innerLabel && <span className="text-[9px] text-[#4a6868] uppercase tracking-widest">{innerLabel}</span>}
        </div>
      )}
    </div>
  );
}
