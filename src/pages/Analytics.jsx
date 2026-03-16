import React, { useState } from 'react';
import { BarChart2, TrendingUp, Users, MousePointer, Filter } from 'lucide-react';
import StatCard from '../components/StatCard';
import { AreaChartComponent, BarChartComponent, DonutChart } from '../components/ChartComponent';
import TableComponent, { GrowthCell } from '../components/TableComponent';
import { weeklyMetrics, funnelData, channelData, retentionCohorts } from '../data/mockData';

const analyticsStats = [
  { label: 'Total Sessions', value: '32.2k', change: '8.4', icon: Users },
  { label: 'Conversions', value: '2,510', change: '3.2', icon: MousePointer },
  { label: 'Avg Revenue / Session', value: '$24.80', change: '5.1', icon: TrendingUp },
  { label: 'Bounce Rate', value: '38.4%', change: '-2.1', icon: BarChart2 },
];

const channelColumns = [
  { key: 'channel', label: 'Channel', render: v => <span className="text-[#e8f4f4] font-medium">{v}</span> },
  { key: 'users', label: 'Users', render: v => <span className="text-[#7a9e9e] font-mono">{v.toLocaleString()}</span> },
  { key: 'revenue', label: 'Revenue', render: v => <span className="text-[#e8f4f4] font-mono">${(v/1000).toFixed(0)}k</span> },
  { key: 'cac', label: 'CAC', render: v => <span className={`font-mono font-medium ${v < 10 ? 'text-[#00e5cc]' : v < 30 ? 'text-[#a8ff78]' : 'text-[#ffd93d]'}`}>${v}</span> },
];

const retentionColors = (val) => {
  if (!val) return 'bg-[#0d1414] text-[#1e2e2e]';
  if (val >= 65) return 'bg-[#00e5cc]/20 text-[#00e5cc]';
  if (val >= 45) return 'bg-[#00b8a3]/15 text-[#00b8a3]';
  return 'bg-[#1e2e2e] text-[#7a9e9e]';
};

export default function Analytics() {
  const [period, setPeriod] = useState('7D');

  return (
    <div className="p-6 space-y-6 page-enter">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-[#e8f4f4]">Analytics</h1>
          <p className="text-[13px] text-[#7a9e9e] mt-0.5">Behavioral insights and conversion intelligence.</p>
        </div>
        <div className="flex items-center gap-2">
          {['24H', '7D', '30D', '90D'].map(p => (
            <button key={p} onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                period === p
                  ? 'bg-[#00e5cc] text-[#0a0f0f]'
                  : 'btn-secondary text-[12px]'
              }`}>
              {p}
            </button>
          ))}
          <button className="btn-secondary text-[12px] flex items-center gap-1.5 px-3 py-1.5 rounded-lg">
            <Filter size={12} /> Filters
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsStats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Weekly Metrics + Funnel */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4] mb-1">Weekly Sessions & Revenue</h3>
          <p className="text-[11px] text-[#4a6868] mb-4">Day-by-day breakdown</p>
          <BarChartComponent
            data={weeklyMetrics}
            bars={[
              { key: 'sessions', label: 'Sessions', color: '#00e5cc' },
              { key: 'revenue', label: 'Revenue', color: '#1e4040' },
            ]}
            height={220}
          />
        </div>

        {/* Funnel */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4] mb-1">Conversion Funnel</h3>
          <p className="text-[11px] text-[#4a6868] mb-5">User journey stages</p>
          <div className="space-y-3">
            {funnelData.map((f, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#7a9e9e]">{f.stage}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#e8f4f4] font-mono">{f.count.toLocaleString()}</span>
                    <span className="text-[10px] text-[#4a6868] font-mono w-9 text-right">{f.pct}%</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channels Table + Retention */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl">
          <div className="px-5 py-4 border-b border-[#1e2e2e]">
            <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Channel Performance</h3>
            <p className="text-[11px] text-[#4a6868] mt-0.5">Users, revenue & acquisition cost</p>
          </div>
          <TableComponent columns={channelColumns} data={channelData} />
        </div>

        {/* Retention Matrix */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4] mb-1">Retention Cohorts</h3>
          <p className="text-[11px] text-[#4a6868] mb-4">Month-over-month user retention %</p>
          <div className="overflow-x-auto">
            <table className="text-[11px] w-full">
              <thead>
                <tr>
                  <th className="text-left text-[#4a6868] pb-2 pr-3 font-medium">Cohort</th>
                  {['M0', 'M1', 'M2', 'M3', 'M4', 'M5'].map(m => (
                    <th key={m} className="text-center text-[#4a6868] pb-2 px-1 font-medium">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {retentionCohorts.map((row, i) => (
                  <tr key={i}>
                    <td className="text-[#7a9e9e] pr-3 py-1 font-medium">{row.cohort}</td>
                    {[row.m0, row.m1, row.m2, row.m3, row.m4, row.m5].map((v, j) => (
                      <td key={j} className="px-1 py-1">
                        <div className={`rounded-md text-center py-1.5 px-2 font-mono ${retentionColors(v)}`}>
                          {v !== null ? v : '—'}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
