import React from 'react';
import { MoreHorizontal, ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';

export function StatusBadge({ status }) {
  const map = {
    stable: { label: 'STABLE', cls: 'badge-stable' },
    growing: { label: 'GROWING', cls: 'badge-growing' },
    risk: { label: 'AT RISK', cls: 'badge-risk' },
    high: { label: 'HIGH', cls: 'badge-risk' },
    low: { label: 'LOW', cls: 'badge-stable' },
    medium: { label: 'MED', cls: 'badge-warning' },
    warning: { label: 'WARNING', cls: 'badge-warning' },
  };
  const s = map[status] || { label: status, cls: 'badge-stable' };
  return (
    <span className={`${s.cls} text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
      {s.label}
    </span>
  );
}

export function GrowthCell({ value }) {
  const isPos = value >= 0;
  return (
    <span className={`flex items-center gap-1 text-[12px] font-mono font-medium ${isPos ? 'text-[#00e5cc]' : 'text-[#ff6b6b]'}`}>
      {isPos ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
      {isPos ? '+' : ''}{value}%
    </span>
  );
}

export default function TableComponent({ columns, data, onAction }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#1e2e2e]">
            {columns.map(col => (
              <th key={col.key} className="text-left text-[10px] text-[#4a6868] uppercase tracking-widest py-3 px-4 font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.id || i} className="table-row">
              {columns.map(col => (
                <td key={col.key} className="py-3.5 px-4 text-[13px]">
                  {col.render ? col.render(row[col.key], row) : (
                    <span className="text-[#e8f4f4]">{row[col.key]}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
