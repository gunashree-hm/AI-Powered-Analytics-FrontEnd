import React, { useState } from 'react';
import { MoreHorizontal, ExternalLink, CreditCard, Users, BarChart2, DollarSign } from 'lucide-react';
import StatCard from '../components/StatCard';
import { AreaChartComponent, DonutChart } from '../components/ChartComponent';
import TableComponent, { StatusBadge, GrowthCell } from '../components/TableComponent';
import { revenueData, regionalData, segmentTableData } from '../data/mockData';

const stats = [
  { label: 'Total Revenue', value: '$4.2M', change: '12.4', prefix: '', icon: DollarSign },
  { label: 'Active Users', value: '12.5k', change: '-2.1', icon: Users },
  { label: 'Conversion', value: '3.2%', change: '0.8', icon: BarChart2 },
  { label: 'Avg Deal Value', value: '$18.4k', change: '5.4', icon: CreditCard },
];

const columns = [
  {
    key: 'name', label: 'Segment Name',
    render: (v, row) => (
      <div className="flex items-center gap-2.5">
        <span className="text-base">{row.icon}</span>
        <span className="text-[#e8f4f4] font-medium">{v}</span>
      </div>
    )
  },
  {
    key: 'status', label: 'Status',
    render: v => <StatusBadge status={v} />
  },
  {
    key: 'growth', label: 'Growth',
    render: v => <GrowthCell value={v} />
  },
  {
    key: 'churn', label: 'Churn Rate',
    render: v => <span className="text-[#7a9e9e] font-mono">{v}%</span>
  },
  {
    key: 'value', label: 'Total Value',
    render: v => <span className="text-[#e8f4f4] font-mono font-medium">${v.toLocaleString()}</span>
  },
  {
    key: 'id', label: 'Action',
    render: () => (
      <button className="p-1.5 rounded-lg hover:bg-[#162020] text-[#4a6868] hover:text-[#7a9e9e] transition-colors">
        <MoreHorizontal size={14} />
      </button>
    )
  },
];

export default function Dashboard() {
  const [tableView, setTableView] = useState('daily');

  return (
    <div className="p-6 space-y-6 page-enter">
      {/* Page Header */}
      <div>
        <h1 className="text-[22px] font-bold text-[#e8f4f4]">Revenue Workspace</h1>
        <p className="text-[13px] text-[#7a9e9e] mt-0.5">Real-time enterprise metrics across all segments.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Revenue Trend */}
        <div className="col-span-2 bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Revenue Trend</h3>
              <p className="text-[11px] text-[#4a6868] mt-0.5">Current vs projected</p>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[#7a9e9e]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00e5cc]" />Current
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1e2e2e]" />Projected
              </span>
            </div>
          </div>
          <AreaChartComponent
            data={revenueData}
            lines={[
              { key: 'current', label: 'Current', color: '#00e5cc' },
              { key: 'projected', label: 'Projected', color: '#1e4040' },
            ]}
            height={220}
          />
        </div>

        {/* Regional Distribution */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4] mb-1">Regional Distribution</h3>
          <p className="text-[11px] text-[#4a6868] mb-4">Global Markets</p>

          <div className="flex justify-center mb-5">
            <DonutChart data={regionalData} size={160} innerText="Global" innerLabel="Markets" />
          </div>

          <div className="space-y-2.5">
            {regionalData.map((r, i) => (
              <div key={i} className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: r.color }} />
                  <span className="text-[#7a9e9e]">{r.name}</span>
                </div>
                <span className="text-[#e8f4f4] font-mono font-medium">{r.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segment Performance Table */}
      <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2e2e]">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Segment Performance</h3>
          <div className="flex items-center gap-1">
            {['daily', 'weekly'].map(v => (
              <button key={v}
                onClick={() => setTableView(v)}
                className={`px-3 py-1 rounded-lg text-[11px] font-medium uppercase tracking-wide transition-all ${
                  tableView === v
                    ? 'bg-[#00e5cc] text-[#0a0f0f]'
                    : 'text-[#7a9e9e] hover:text-[#e8f4f4]'
                }`}>
                {v}
              </button>
            ))}
          </div>
        </div>
        <TableComponent columns={columns} data={segmentTableData} />
      </div>
    </div>
  );
}
