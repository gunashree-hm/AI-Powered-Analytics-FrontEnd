import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, BarChart2, Users, Zap, Settings,
  Database, GitBranch, Upload, ChevronRight
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
  { icon: BarChart2, label: 'Analytics', to: '/analytics' },
  { icon: Users, label: 'Segmentation', to: '/segmentation' },
  { icon: Zap, label: 'Performance', to: '/performance' },
  { icon: Database, label: 'Cohorts', to: '/cohorts' },
  { icon: GitBranch, label: 'Automations', to: '/automations' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', to: '/settings' },
];

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();

  return (
    <aside
      className={`flex flex-col h-screen bg-[#0d1414] border-r border-[#1e2e2e] transition-all duration-300 flex-shrink-0 ${
        collapsed ? 'w-[60px]' : 'w-[220px]'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#1e2e2e]">
        <div className="w-8 h-8 rounded-lg bg-[#00e5cc]/10 border border-[#00e5cc]/20 flex items-center justify-center flex-shrink-0">
          <BarChart2 size={16} className="text-[#00e5cc]" />
        </div>
        {!collapsed && (
          <div className="animate-[fadeIn_0.2s_ease-out]">
            <div className="text-[13px] font-semibold text-[#e8f4f4] tracking-wide font-mono">Gesix</div>
            <div className="text-[10px] text-[#4a6868] tracking-widest uppercase">Enterprise AI</div>
          </div>
        )}
      </div>

      {/* Upload Button */}
      {!collapsed && (
        <div className="px-3 py-4">
          <button className="btn-primary w-full flex items-center justify-center gap-2 text-xs">
            <Upload size={13} />
            Upload Dataset
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-2 py-2 space-y-1 overflow-y-auto">
        {navItems.map(({ icon: Icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                isActive
                  ? 'active bg-[#00e5cc]/8 text-[#00e5cc]'
                  : 'text-[#7a9e9e] hover:bg-[#162020] hover:text-[#e8f4f4]'
              }`
            }
          >
            <Icon size={16} className="flex-shrink-0" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-[#1e2e2e] px-2 py-2">
        {bottomItems.map(({ icon: Icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition-all ${
                isActive ? 'active bg-[#00e5cc]/8 text-[#00e5cc]' : 'text-[#7a9e9e] hover:bg-[#162020] hover:text-[#e8f4f4]'
              }`
            }
          >
            <Icon size={16} />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}

        {/* User */}
        <div className="flex items-center gap-3 px-3 py-3 mt-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00e5cc]/40 to-[#008a7a]/40 border border-[#00e5cc]/20 flex-shrink-0 flex items-center justify-center text-[10px] text-[#00e5cc] font-semibold">
            AL
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-[12px] font-medium text-[#e8f4f4] truncate">Alex Rivera</div>
              <div className="text-[10px] text-[#4a6868]">Enterprise Plan</div>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={onToggle}
        className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0d1414] border border-[#1e2e2e] rounded-full flex items-center justify-center text-[#4a6868] hover:text-[#00e5cc] hover:border-[#00e5cc]/30 transition-all z-10"
      >
        <ChevronRight size={12} className={`transition-transform ${collapsed ? '' : 'rotate-180'}`} />
      </button>
    </aside>
  );
}
