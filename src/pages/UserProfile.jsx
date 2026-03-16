import React from 'react';
import { BarChartComponent } from '../components/ChartComponent';
import { userActivity, recentReports } from '../data/mockData';
import { Download, FileText, Calendar, Activity, Star, Award } from 'lucide-react';

const badges = [
  { icon: '🏆', label: 'Power Analyst', desc: '100+ reports generated' },
  { icon: '⚡', label: 'Early Adopter', desc: 'Beta user since day 1' },
  { icon: '🔮', label: 'AI Pioneer', desc: '500+ AI queries' },
];

export default function UserProfile() {
  return (
    <div className="p-6 space-y-6 page-enter">
      <h1 className="text-[22px] font-bold text-[#e8f4f4]">User Profile</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-6 space-y-5">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00e5cc]/30 to-[#008a7a]/30 border border-[#00e5cc]/20 flex items-center justify-center text-[28px] text-[#00e5cc] font-bold mb-3">
              AT
            </div>
            <div className="text-[16px] font-bold text-[#e8f4f4]">Alexander Thorne</div>
            <div className="text-[12px] text-[#7a9e9e]">Chief Analyst</div>
            <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#4a6868]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5cc]" />
              Enterprise Plan · Active
            </div>
          </div>

          <div className="border-t border-[#1e2e2e] pt-4 space-y-2.5">
            {[
              { label: 'Organization', value: 'Gesix Inc.' },
              { label: 'Member Since', value: 'March 2022' },
              { label: 'Data Sources', value: '8 connected' },
              { label: 'Reports Created', value: '142' },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between text-[12px]">
                <span className="text-[#4a6868]">{r.label}</span>
                <span className="text-[#e8f4f4] font-medium">{r.value}</span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="border-t border-[#1e2e2e] pt-4">
            <div className="text-[10px] text-[#4a6868] uppercase tracking-widest mb-3">Achievements</div>
            <div className="space-y-2">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0d1414] border border-[#1e2e2e]">
                  <span className="text-lg">{b.icon}</span>
                  <div>
                    <div className="text-[12px] text-[#e8f4f4] font-medium">{b.label}</div>
                    <div className="text-[10px] text-[#4a6868]">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-2 space-y-5">
          {/* Activity Chart */}
          <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={14} className="text-[#00e5cc]" />
              <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Query Activity This Week</h3>
            </div>
            <BarChartComponent
              data={userActivity}
              bars={[{ key: 'queries', label: 'Queries', color: '#00e5cc' }]}
              height={160}
              xKey="day"
            />
          </div>

          {/* Recent Reports */}
          <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2e2e]">
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-[#00e5cc]" />
                <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Recent Reports</h3>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e2e2e]">
                  {['Report Name', 'Type', 'Date', 'Size', ''].map(h => (
                    <th key={h} className="text-left text-[10px] text-[#4a6868] uppercase tracking-widest py-3 px-4 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentReports.map((r, i) => (
                  <tr key={i} className="table-row">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <FileText size={13} className="text-[#4a6868]" />
                        <span className="text-[13px] text-[#e8f4f4]">{r.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[11px] px-2 py-0.5 rounded-full badge-stable">{r.type}</span>
                    </td>
                    <td className="py-3 px-4 text-[12px] text-[#7a9e9e] font-mono">{r.date}</td>
                    <td className="py-3 px-4 text-[12px] text-[#4a6868] font-mono">{r.size}</td>
                    <td className="py-3 px-4">
                      <button className="p-1.5 rounded-lg hover:bg-[#162020] text-[#4a6868] hover:text-[#00e5cc] transition-all">
                        <Download size={13} />
                      </button>
                    </td>
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
