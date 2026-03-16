import React, { useState } from 'react';
import { User, Bell, Shield, Database, Key, CreditCard, Save } from 'lucide-react';

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'data', label: 'Data & Privacy', icon: Database },
  { id: 'api', label: 'API Keys', icon: Key },
  { id: 'billing', label: 'Billing', icon: CreditCard },
];

const apiKeys = [
  { name: 'Production API Key', key: 'gx_prod_••••••••••••4f2a', created: 'Jan 15, 2024', last: '2h ago' },
  { name: 'Development API Key', key: 'gx_dev_••••••••••••8c3b', created: 'Dec 4, 2023', last: '5d ago' },
];

export default function Settings() {
  const [active, setActive] = useState('profile');
  const [notifications, setNotifications] = useState({
    churnAlerts: true, weeklyReport: true, aiSuggestions: false,
    systemAlerts: true, productUpdates: false,
  });

  return (
    <div className="p-6 page-enter">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-[#e8f4f4]">Settings</h1>
        <p className="text-[13px] text-[#7a9e9e] mt-0.5">Manage your account, preferences, and integrations.</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Nav */}
        <div className="w-48 flex-shrink-0">
          <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-2 space-y-1">
            {sections.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setActive(id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all text-left ${
                  active === id
                    ? 'bg-[#00e5cc]/10 text-[#00e5cc]'
                    : 'text-[#7a9e9e] hover:bg-[#162020] hover:text-[#e8f4f4]'
                }`}>
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {active === 'profile' && (
            <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-6 space-y-5">
              <h2 className="text-[15px] font-semibold text-[#e8f4f4]">Profile Settings</h2>
              <div className="flex items-center gap-4 pb-5 border-b border-[#1e2e2e]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00e5cc]/30 to-[#008a7a]/30 border border-[#00e5cc]/20 flex items-center justify-center text-[22px] text-[#00e5cc] font-bold">
                  AT
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#e8f4f4]">Alexander Thorne</div>
                  <div className="text-[12px] text-[#4a6868]">Chief Analyst · Enterprise Plan</div>
                  <button className="text-[11px] text-[#00e5cc] mt-1 hover:text-[#00b8a3] transition-colors">Change avatar</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'First Name', value: 'Alexander' },
                  { label: 'Last Name', value: 'Thorne' },
                  { label: 'Email', value: 'alexander@gesix.io' },
                  { label: 'Role', value: 'Chief Analyst' },
                  { label: 'Organization', value: 'Gesix Inc.' },
                  { label: 'Timezone', value: 'UTC-5 (EST)' },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="text-[11px] text-[#4a6868] uppercase tracking-wider block mb-1.5">{f.label}</label>
                    <input defaultValue={f.value} className="w-full text-[13px]" />
                  </div>
                ))}
              </div>
              <button className="btn-primary flex items-center gap-2 text-[13px] px-4 py-2 rounded-lg mt-2">
                <Save size={13} /> Save Changes
              </button>
            </div>
          )}

          {active === 'notifications' && (
            <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-6 space-y-5">
              <h2 className="text-[15px] font-semibold text-[#e8f4f4]">Notification Preferences</h2>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, val]) => {
                  const labels = {
                    churnAlerts: { title: 'Churn Risk Alerts', desc: 'Get notified when segments show churn spikes' },
                    weeklyReport: { title: 'Weekly Summary Report', desc: 'Automated report every Monday at 9am' },
                    aiSuggestions: { title: 'AI Suggestions', desc: 'Proactive AI-generated insights and recommendations' },
                    systemAlerts: { title: 'System Alerts', desc: 'Critical infrastructure and performance notifications' },
                    productUpdates: { title: 'Product Updates', desc: 'New features and changelog announcements' },
                  };
                  return (
                    <div key={key} className="flex items-center justify-between py-3 border-b border-[#1e2e2e] last:border-0">
                      <div>
                        <div className="text-[13px] text-[#e8f4f4] font-medium">{labels[key].title}</div>
                        <div className="text-[11px] text-[#4a6868] mt-0.5">{labels[key].desc}</div>
                      </div>
                      <button
                        onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key] }))}
                        className={`w-11 h-6 rounded-full transition-all relative ${val ? 'bg-[#00e5cc]' : 'bg-[#1e2e2e]'}`}>
                        <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${val ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {active === 'api' && (
            <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-[15px] font-semibold text-[#e8f4f4]">API Keys</h2>
                <button className="btn-primary text-[12px] flex items-center gap-1.5 px-3 py-1.5 rounded-lg">
                  <Key size={12} /> Generate New Key
                </button>
              </div>
              <div className="space-y-3">
                {apiKeys.map((k, i) => (
                  <div key={i} className="border border-[#1e2e2e] rounded-xl p-4 hover:border-[#00e5cc]/15 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-medium text-[#e8f4f4]">{k.name}</span>
                      <button className="text-[11px] text-[#ff6b6b] hover:text-[#ff4444] transition-colors">Revoke</button>
                    </div>
                    <div className="font-mono text-[12px] text-[#7a9e9e] bg-[#0d1414] border border-[#1e2e2e] rounded-lg px-3 py-2 mb-2">
                      {k.key}
                    </div>
                    <div className="flex gap-4 text-[11px] text-[#4a6868]">
                      <span>Created: {k.created}</span>
                      <span>Last used: {k.last}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(active === 'security' || active === 'data' || active === 'billing') && (
            <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-6">
              <h2 className="text-[15px] font-semibold text-[#e8f4f4] mb-2 capitalize">{active} Settings</h2>
              <p className="text-[13px] text-[#4a6868]">This section is under development. Check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
