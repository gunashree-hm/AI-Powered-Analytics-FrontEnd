import React, { useState } from 'react';
import { Plus, Download, MoreHorizontal, Sparkles, ExternalLink, SlidersHorizontal } from 'lucide-react';
import { DonutChart } from '../components/ChartComponent';
import { StatusBadge, GrowthCell } from '../components/TableComponent';
import {
  segmentDistribution, segmentMetrics, behavioralStats
} from '../data/mockData';

const quickStats = [
  { label: 'Conversion Rate', value: '+12.4%', positive: true, pct: 72 },
  { label: 'Retention', value: '+4.1%', positive: true, pct: 55 },
  { label: 'LTV Velocity', value: '-0.8%', positive: false, pct: 30 },
];

export default function Segmentation() {
  const [activeView, setActiveView] = useState('sunburst');
  const [cohortLogic, setCohortLogic] = useState('Power Users');
  const [region, setRegion] = useState('North America');
  const [behaviorFilter, setBehaviorFilter] = useState('Last Seen > 7 Days');

  return (
    <div className="p-6 space-y-6 page-enter">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-[#e8f4f4]">User Segmentation</h1>
          <p className="text-[13px] text-[#7a9e9e] mt-0.5">Refine and target your user base with advanced behavioral logic.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary text-[12px] flex items-center gap-1.5 px-3 py-2 rounded-lg">
            <Download size={13} /> Export Data
          </button>
          <button className="btn-secondary text-[12px] flex items-center gap-1.5 px-3 py-2 rounded-lg">
            Compare Segments
          </button>
          <button className="btn-primary text-[12px] flex items-center gap-1.5 px-3 py-2 rounded-lg">
            <Plus size={13} /> Create New Segment
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-4">
        <div>
          <div className="text-[9px] text-[#4a6868] uppercase tracking-wider mb-1">Cohort Logic</div>
          <select value={cohortLogic} onChange={e => setCohortLogic(e.target.value)}
            className="text-[12px] pr-6 py-1.5 min-w-[140px]">
            <option>Power Users</option>
            <option>Casual Users</option>
            <option>At Risk</option>
            <option>Champions</option>
          </select>
        </div>
        <div className="w-px h-8 bg-[#1e2e2e]" />
        <div>
          <div className="text-[9px] text-[#4a6868] uppercase tracking-wider mb-1">Region</div>
          <select value={region} onChange={e => setRegion(e.target.value)}
            className="text-[12px] pr-6 py-1.5 min-w-[130px]">
            <option>North America</option>
            <option>Europe</option>
            <option>APAC</option>
            <option>Global</option>
          </select>
        </div>
        <div className="w-px h-8 bg-[#1e2e2e]" />
        <div>
          <div className="text-[9px] text-[#4a6868] uppercase tracking-wider mb-1">Behavioral Filter</div>
          <select value={behaviorFilter} onChange={e => setBehaviorFilter(e.target.value)}
            className="text-[12px] pr-6 py-1.5 min-w-[160px]">
            <option>Last Seen &gt; 7 Days</option>
            <option>Active Today</option>
            <option>High Usage</option>
            <option>Trial Expired</option>
          </select>
        </div>
        <button className="ml-auto p-2 rounded-lg border border-[#1e2e2e] text-[#7a9e9e] hover:text-[#00e5cc] hover:border-[#00e5cc]/30 transition-all">
          <SlidersHorizontal size={14} />
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* Segment Distribution */}
        <div className="col-span-2 bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#00e5cc]/15 flex items-center justify-center">
                <span className="text-[8px]">◉</span>
              </div>
              <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Segment Distribution</h3>
            </div>
            <div className="flex bg-[#0d1414] border border-[#1e2e2e] rounded-lg p-0.5 gap-0.5">
              {['Sunburst', 'Treemap'].map(v => (
                <button key={v}
                  onClick={() => setActiveView(v.toLowerCase())}
                  className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                    activeView === v.toLowerCase()
                      ? 'bg-[#00e5cc] text-[#0a0f0f]'
                      : 'text-[#7a9e9e] hover:text-[#e8f4f4]'
                  }`}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <DonutChart data={segmentDistribution} size={200}
              innerText="42.8k" innerLabel="Total Users" />
            <div className="flex-1 space-y-3">
              {segmentDistribution.map((s, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                      <span className="text-[#7a9e9e]">{s.name}</span>
                    </div>
                    <span className="text-[#e8f4f4] font-mono font-medium">{s.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${s.value}%`, background: s.color }} />
                  </div>
                  <div className="text-[10px] text-[#4a6868]">
                    {Math.round(42800 * s.value / 100).toLocaleString()} users
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5 space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#00e5cc]/15 flex items-center justify-center">
              <span className="text-[8px]">▲</span>
            </div>
            <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Quick Stats</h3>
          </div>

          {quickStats.map((s, i) => (
            <div key={i}>
              <div className="flex items-center justify-between text-[12px] mb-1.5">
                <span className="text-[10px] text-[#4a6868] uppercase tracking-wider">{s.label}</span>
                <span className={`font-mono font-semibold ${s.positive ? 'text-[#00e5cc]' : 'text-[#ff6b6b]'}`}>{s.value}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${s.pct}%`, background: s.positive ? '#00e5cc' : '#ff6b6b' }} />
              </div>
            </div>
          ))}

          {/* AI Suggestion */}
          <div className="bg-[#00e5cc]/5 border border-[#00e5cc]/15 rounded-xl p-3 mt-2">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Sparkles size={11} className="text-[#00e5cc]" />
              <span className="text-[10px] text-[#00e5cc] font-semibold uppercase tracking-wide">AI Suggestion</span>
            </div>
            <p className="text-[11px] text-[#7a9e9e] leading-relaxed">
              Create a re-engagement campaign for 'Lapsed Enterprise' cohort.
              Predicted LTV recovery: <span className="text-[#00e5cc] font-semibold">$24k</span>.
            </p>
          </div>

          {/* Behavioral Stats */}
          <div className="space-y-2 pt-1 border-t border-[#1e2e2e]">
            {behavioralStats.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-[12px]">
                <span className="text-[#4a6868]">{s.label}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e8f4f4] font-mono">{s.value}</span>
                  <span className={`text-[10px] font-mono ${s.change > 0 ? 'text-[#00e5cc]' : 'text-[#ff6b6b]'}`}>
                    {s.change > 0 ? '+' : ''}{s.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segment Metrics Table */}
      <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2e2e]">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Segment Performance Metrics</h3>
          <div className="flex gap-2">
            <button className="p-1.5 rounded-lg border border-[#1e2e2e] text-[#4a6868] hover:text-[#7a9e9e] hover:border-[#00e5cc]/20 transition-all">
              <Download size={13} />
            </button>
            <button className="p-1.5 rounded-lg border border-[#1e2e2e] text-[#4a6868] hover:text-[#7a9e9e] hover:border-[#00e5cc]/20 transition-all">
              <MoreHorizontal size={13} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1e2e2e]">
                {['Segment Name', 'Active Users', 'Churn Risk', 'Avg LTV', 'Growth', 'Actions'].map(h => (
                  <th key={h} className="text-left text-[10px] text-[#4a6868] uppercase tracking-widest py-3 px-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {segmentMetrics.map((s) => (
                <tr key={s.id} className="table-row">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{s.icon}</span>
                      <div>
                        <div className="text-[13px] text-[#e8f4f4] font-medium">{s.name}</div>
                        <div className="text-[11px] text-[#4a6868]">{s.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-[13px] text-[#7a9e9e] font-mono">{s.activeUsers.toLocaleString()}</td>
                  <td className="py-3.5 px-4"><StatusBadge status={s.churnRisk} /></td>
                  <td className="py-3.5 px-4 text-[13px] text-[#e8f4f4] font-mono">${s.avgLtv.toLocaleString()}</td>
                  <td className="py-3.5 px-4"><GrowthCell value={s.growth} /></td>
                  <td className="py-3.5 px-4">
                    <button className="p-1.5 rounded-lg hover:bg-[#162020] text-[#4a6868] hover:text-[#00e5cc] transition-all">
                      <ExternalLink size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
