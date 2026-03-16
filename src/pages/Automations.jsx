import React, { useState } from 'react';
import { Plus, Play, Pause, Trash2, Zap, Mail, Bell, GitBranch, Clock, CheckCircle } from 'lucide-react';

const automations = [
  {
    id: 1, name: 'Churn Risk Alert', trigger: 'LTV drops > 20% in 7 days',
    action: 'Notify Slack + Create Task', status: 'active', runs: 48, lastRun: '2h ago',
    icon: Bell, color: '#ff6b6b',
  },
  {
    id: 2, name: 'Enterprise Upsell', trigger: 'Usage > 80% of plan limit',
    action: 'Send upgrade email campaign', status: 'active', runs: 124, lastRun: '45m ago',
    icon: Mail, color: '#00e5cc',
  },
  {
    id: 3, name: 'Trial Nurture Sequence', trigger: 'Trial day 5, no conversion',
    action: '3-email drip over 7 days', status: 'active', runs: 890, lastRun: '12m ago',
    icon: Zap, color: '#a8ff78',
  },
  {
    id: 4, name: 'Dormant Re-engage', trigger: 'No login in 14 days',
    action: 'Re-engagement email + discount', status: 'paused', runs: 312, lastRun: '3d ago',
    icon: Clock, color: '#ffd93d',
  },
  {
    id: 5, name: 'Segment Auto-Tag', trigger: 'User matches Power User criteria',
    action: 'Add to Champions cohort', status: 'active', runs: 56, lastRun: '1h ago',
    icon: GitBranch, color: '#00b8a3',
  },
];

const recentActivity = [
  { time: '2 min ago', event: 'Enterprise Upsell triggered for Acme Corp', type: 'success' },
  { time: '14 min ago', event: 'Trial Nurture Sequence: 42 users entered flow', type: 'info' },
  { time: '1 hr ago', event: 'Churn Risk Alert: 3 accounts flagged', type: 'warning' },
  { time: '2 hr ago', event: 'Segment Auto-Tag: 8 users added to Champions', type: 'success' },
  { time: '4 hr ago', event: 'Dormant Re-engage paused by admin', type: 'neutral' },
];

const typeColors = {
  success: 'text-[#00e5cc] bg-[#00e5cc]/10',
  warning: 'text-[#ffd93d] bg-[#ffd93d]/10',
  info: 'text-[#7a9e9e] bg-[#7a9e9e]/10',
  neutral: 'text-[#4a6868] bg-[#1e2e2e]',
};

export default function Automations() {
  const [items, setItems] = useState(automations);

  const toggleStatus = (id) => {
    setItems(prev => prev.map(a =>
      a.id === id ? { ...a, status: a.status === 'active' ? 'paused' : 'active' } : a
    ));
  };

  return (
    <div className="p-6 space-y-6 page-enter">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-[#e8f4f4]">Automations</h1>
          <p className="text-[13px] text-[#7a9e9e] mt-0.5">Trigger-based workflows for user lifecycle management.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 text-[12px] px-4 py-2 rounded-lg">
          <Plus size={13} /> Create Automation
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Active Automations', value: '4', sub: 'of 5 total' },
          { label: 'Total Runs (30d)', value: '1,430', sub: '+18% vs last month' },
          { label: 'Emails Sent', value: '8.2k', sub: 'this month' },
          { label: 'Avg Conversion', value: '12.4%', sub: 'from automation' },
        ].map((c, i) => (
          <div key={i} className="stat-card">
            <div className="text-[10px] text-[#4a6868] uppercase tracking-widest mb-2">{c.label}</div>
            <div className="text-[22px] font-bold text-[#e8f4f4] font-mono">{c.value}</div>
            <div className="text-[11px] text-[#4a6868] mt-1">{c.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Automation List */}
        <div className="col-span-2 space-y-3">
          {items.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.id} className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-4 hover:border-[#00e5cc]/15 transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${a.color}15`, border: `1px solid ${a.color}25` }}>
                    <Icon size={16} style={{ color: a.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[13px] font-semibold text-[#e8f4f4]">{a.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          a.status === 'active' ? 'bg-[#00e5cc]/12 text-[#00e5cc] border border-[#00e5cc]/20' : 'bg-[#1e2e2e] text-[#4a6868]'
                        }`}>
                          {a.status.toUpperCase()}
                        </span>
                        <button onClick={() => toggleStatus(a.id)}
                          className="p-1.5 rounded-lg border border-[#1e2e2e] text-[#4a6868] hover:text-[#00e5cc] hover:border-[#00e5cc]/20 transition-all">
                          {a.status === 'active' ? <Pause size={12} /> : <Play size={12} />}
                        </button>
                        <button className="p-1.5 rounded-lg border border-[#1e2e2e] text-[#4a6868] hover:text-[#ff6b6b] hover:border-[#ff6b6b]/20 transition-all">
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-[#4a6868]">
                      <span>⚡ {a.trigger}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-[#4a6868] mt-0.5">
                      <span>→ {a.action}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-[#4a6868] mt-2">
                      <span className="flex items-center gap-1">
                        <CheckCircle size={10} className="text-[#00e5cc]" />
                        {a.runs} runs
                      </span>
                      <span>Last: {a.lastRun}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Activity Feed */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-[#e8f4f4] mb-4">Activity Feed</h3>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex gap-3 pb-3 border-b border-[#1e2e2e] last:border-0">
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium mt-0.5 flex-shrink-0 ${typeColors[a.type]}`}>
                  {a.type.toUpperCase()}
                </span>
                <div>
                  <p className="text-[12px] text-[#b0c8c8] leading-snug">{a.event}</p>
                  <span className="text-[10px] text-[#4a6868]">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
