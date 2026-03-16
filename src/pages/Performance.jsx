import React, { useState } from 'react';
import { Zap, Server, AlertTriangle, CheckCircle, Activity, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import { LineChartComponent, AreaChartComponent, BarChartComponent } from '../components/ChartComponent';
import { performanceTimeline, apiMetrics, errorRateData } from '../data/mockData';

const perfStats = [
  { label: 'Avg Latency', value: '84ms', change: '-12.4', icon: Clock },
  { label: 'Uptime', value: '99.98%', change: '0.02', icon: CheckCircle },
  { label: 'API Calls / Day', value: '344k', change: '8.2', icon: Activity },
  { label: 'Error Rate', value: '0.02%', change: '-0.01', icon: AlertTriangle },
];

const systemHealth = [
  { service: 'API Gateway', status: 'operational', latency: '12ms', uptime: '99.99%' },
  { service: 'Analytics Engine', status: 'operational', latency: '48ms', uptime: '99.97%' },
  { service: 'ML Pipeline', status: 'degraded', latency: '380ms', uptime: '98.40%' },
  { service: 'Data Warehouse', status: 'operational', latency: '24ms', uptime: '100%' },
  { service: 'CDN', status: 'operational', latency: '8ms', uptime: '100%' },
];

const statusDot = {
  operational: 'bg-[#00e5cc]',
  degraded: 'bg-[#ffd93d]',
  outage: 'bg-[#ff6b6b]',
};

export default function Performance() {
  const [activeMetric, setActiveMetric] = useState('all');

  return (
    <div className="p-6 space-y-6 page-enter">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-[#e8f4f4]">Performance</h1>
          <p className="text-[13px] text-[#7a9e9e] mt-0.5">System health, API metrics, and infrastructure telemetry.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#00e5cc]/8 border border-[#00e5cc]/15 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00e5cc] animate-pulse" />
          <span className="text-[11px] text-[#00e5cc] font-medium">All Systems Operational</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {perfStats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Resource Usage Timeline */}
      <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Resource Utilization (24h)</h3>
            <p className="text-[11px] text-[#4a6868] mt-0.5">CPU, Memory, and Latency over time</p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#7a9e9e]">
            {[
              { key: 'cpu', color: '#00e5cc', label: 'CPU %' },
              { key: 'memory', color: '#a8ff78', label: 'Memory %' },
              { key: 'latency', color: '#ffd93d', label: 'Latency ms' },
            ].map(m => (
              <span key={m.key} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                {m.label}
              </span>
            ))}
          </div>
        </div>
        <LineChartComponent
          data={performanceTimeline}
          lines={[
            { key: 'cpu', label: 'CPU %', color: '#00e5cc' },
            { key: 'memory', label: 'Memory %', color: '#a8ff78' },
            { key: 'latency', label: 'Latency ms', color: '#ffd93d' },
          ]}
          height={220}
          xKey="time"
        />
      </div>

      {/* API Metrics + System Health */}
      <div className="grid grid-cols-2 gap-4">
        {/* API Endpoints */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl">
          <div className="px-5 py-4 border-b border-[#1e2e2e]">
            <h3 className="text-[14px] font-semibold text-[#e8f4f4]">API Endpoint Metrics</h3>
            <p className="text-[11px] text-[#4a6868] mt-0.5">Latency percentiles & error rates</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e2e2e]">
                  {['Endpoint', 'Calls', 'P50', 'P95', 'Errors'].map(h => (
                    <th key={h} className="text-left text-[10px] text-[#4a6868] uppercase tracking-widest py-3 px-4 font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {apiMetrics.map((m, i) => (
                  <tr key={i} className="table-row">
                    <td className="py-3 px-4">
                      <span className="text-[11px] text-[#7a9e9e] font-mono truncate block max-w-[180px]">{m.endpoint}</span>
                    </td>
                    <td className="py-3 px-4 text-[12px] text-[#e8f4f4] font-mono">{(m.calls/1000).toFixed(0)}k</td>
                    <td className="py-3 px-4 text-[12px] text-[#00e5cc] font-mono">{m.p50}ms</td>
                    <td className="py-3 px-4 text-[12px] text-[#ffd93d] font-mono">{m.p95}ms</td>
                    <td className="py-3 px-4 text-[12px] font-mono">
                      <span className={m.errors > 0.05 ? 'text-[#ff6b6b]' : 'text-[#00e5cc]'}>{m.errors}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-[#111a1a] border border-[#1e2e2e] rounded-xl p-5 space-y-4">
          <div>
            <h3 className="text-[14px] font-semibold text-[#e8f4f4]">Service Health</h3>
            <p className="text-[11px] text-[#4a6868] mt-0.5">Real-time service status</p>
          </div>

          {systemHealth.map((s, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-[#1e2e2e] last:border-0">
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${statusDot[s.status]} ${s.status === 'operational' ? 'animate-pulse' : ''}`} />
                <div>
                  <div className="text-[13px] text-[#e8f4f4] font-medium">{s.service}</div>
                  <div className="text-[10px] text-[#4a6868] capitalize">{s.status}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-right">
                <div>
                  <div className="text-[11px] text-[#4a6868]">Latency</div>
                  <div className="text-[12px] text-[#e8f4f4] font-mono">{s.latency}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#4a6868]">Uptime</div>
                  <div className={`text-[12px] font-mono font-medium ${
                    parseFloat(s.uptime) >= 99.9 ? 'text-[#00e5cc]' : 'text-[#ffd93d]'
                  }`}>{s.uptime}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Error Rate Mini Chart */}
          <div className="mt-2 pt-3 border-t border-[#1e2e2e]">
            <div className="text-[11px] text-[#4a6868] mb-2">Error Rate Trend</div>
            <AreaChartComponent
              data={errorRateData}
              lines={[{ key: 'rate', label: 'Error %', color: '#ff6b6b' }]}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
