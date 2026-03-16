import React, { useState } from 'react';
import { Plus, Download, Users, TrendingUp, Target, Calendar } from 'lucide-react';
import StatCard from '../components/StatCard';
import { BarChartComponent, AreaChartComponent, DonutChart } from '../components/ChartComponent';

const cohortStats = [
  { label: 'Total Cohorts', value: '24', change: '4.2', icon: Users },
  { label: 'Avg Cohort Size', value: '1,820', change: '12.1', icon: Target },
  { label: 'Avg LTV', value: '$3,240', change: '8.7', icon: TrendingUp },
  { label: 'Active This Month', value: '18', change: '2.1', icon: Calendar },
];

const cohortList = [
  { id: 1, name: 'Enterprise Jan 2024', size: 342, ltv: 8200, health: 92, age: '45d', color: '#00e5cc' },
  { id: 2, name: 'SMB Q4 2023', size: 1840, ltv: 1200, health: 68, age: '92d', color: '#a8ff78' },
  { id: 3, name: 'Trial → Paid Dec', size: 580, ltv: 2800, health: 85, age: '78d', color: '#00b8a3' },
  { id: 4, name: 'APAC Enterprise', size: 210, ltv: 12400, health: 94, age: '120d', color: '#00e5cc' },
  { id: 5, name: 'Startup Accelerator', size: 890, ltv: 680, health: 42, age: '30d', color: '#ffd93d' },
  { id: 6, name: 'Partner Referrals', size: 420, ltv: 3600, health: 78, age: '60d', color: '#a8ff78' },
];

const ltvData = [
  { month: 'M1', enterprise: 1200, smb: 320, startup: 80 },
  { month: 'M2', enterprise: 2800, smb: 620, startup: 180 },
  { month: 'M3', enterprise: 4200, smb: 880, startup: 280 },
  { month: 'M4', enterprise: 5900, smb: 1050, startup: 340 },
  { month: 'M5', enterprise: 7400, smb: 1180, startup: 380 },
  { month: 'M6', enterprise: 8800, smb: 1250, startup: 400 },
];

const cohortTypeData = [
  { name: 'Enterprise', value: 38, color: '#00e5cc' },
  { name: 'SMB', value: 32, color: '#00b8a3' },
  { name: 'Startup', value: 18, color: '#008a7a' },
  { name: 'Trial', value: 12, color: '#1e4040' },
];

export default function Cohorts() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 space-y-6 page-enter">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-[#e8f4f4]">Cohorts</h1>
          <p className="text-[13px] text-[#7a9e9e] mt-0.5">Group and analyze users by shared behavioral attributes.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 text-[12px] px-4 py-2 rounded-lg">
          <Plus size={13} /> New Cohort
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cohortStats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* LTV by Cohort Type */}
        <div className="col-span-2 bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4] mb-1">LTV Progression by Cohort Type</h3>
          <p className="text-[11px] text-[#4a6868] mb-4">Cumulative lifetime value over 6 months</p>
          <AreaChartComponent
            data={ltvData}
            lines={[
              { key: 'enterprise', label: 'Enterprise', color: '#00e5cc' },
              { key: 'smb', label: 'SMB', color: '#a8ff78' },
              { key: 'startup', label: 'Startup', color: '#ffd93d' },
            ]}
            height={220}
          />
        </div>

        {/* Cohort Breakdown */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4] mb-1">Cohort Breakdown</h3>
          <p className="text-[11px] text-[#4a6868] mb-4">By customer type</p>
          <div className="flex justify-center mb-4">
            <DonutChart data={cohortTypeData} size={150} innerText="24" innerLabel="Cohorts" />
          </div>
          <div className="space-y-2">
            {cohortTypeData.map((d, i) => (
              <div key={i} className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span className="text-[#7a9e9e]">{d.name}</span>
                </div>
                <span className="text-[#e8f4f4] font-mono">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cohort List */}
      <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2e2e]">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4]">All Cohorts</h3>
          <button className="btn-secondary text-[12px] flex items-center gap-1.5 px-3 py-1.5 rounded-lg">
            <Download size={12} /> Export
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1e2e2e]">
              {['Cohort Name', 'Size', 'Avg LTV', 'Health Score', 'Age', 'Actions'].map(h => (
                <th key={h} className="text-left text-[10px] text-[#4a6868] uppercase tracking-widest py-3 px-4 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cohortList.map((c) => (
              <tr key={c.id} className="table-row cursor-pointer" onClick={() => setSelected(c.id === selected ? null : c.id)}>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                    <span className="text-[13px] text-[#e8f4f4] font-medium">{c.name}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[13px] text-[#7a9e9e] font-mono">{c.size.toLocaleString()}</td>
                <td className="py-3.5 px-4 text-[13px] text-[#e8f4f4] font-mono">${c.ltv.toLocaleString()}</td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <div className="progress-bar flex-1 max-w-[80px]">
                      <div className="progress-fill" style={{
                        width: `${c.health}%`,
                        background: c.health > 80 ? '#00e5cc' : c.health > 60 ? '#a8ff78' : '#ffd93d'
                      }} />
                    </div>
                    <span className="text-[12px] font-mono text-[#7a9e9e]">{c.health}%</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[12px] text-[#4a6868] font-mono">{c.age}</td>
                <td className="py-3.5 px-4">
                  <button className="text-[11px] text-[#00e5cc] hover:text-[#00b8a3] transition-colors border border-[#00e5cc]/20 px-2 py-1 rounded-lg hover:border-[#00e5cc]/40">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
