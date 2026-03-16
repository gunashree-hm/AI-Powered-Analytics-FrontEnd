import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

const monthlyData = [
    { month: 'Jan', revenue: 4200, expenses: 2800, profit: 1400 },
    { month: 'Feb', revenue: 3800, expenses: 2600, profit: 1200 },
    { month: 'Mar', revenue: 5100, expenses: 3100, profit: 2000 },
    { month: 'Apr', revenue: 4700, expenses: 2900, profit: 1800 },
    { month: 'May', revenue: 5300, expenses: 3200, profit: 2100 },
    { month: 'Jun', revenue: 5800, expenses: 3400, profit: 2400 },
    { month: 'Jul', revenue: 4900, expenses: 3100, profit: 1800 },
    { month: 'Aug', revenue: 4600, expenses: 2800, profit: 1800 },
    { month: 'Sep', revenue: 5200, expenses: 3300, profit: 1900 },
    { month: 'Oct', revenue: 6100, expenses: 3500, profit: 2600 },
    { month: 'Nov', revenue: 6500, expenses: 3700, profit: 2800 },
    { month: 'Dec', revenue: 7000, expenses: 3900, profit: 3100 },
];

const categoryData = [
    { name: 'Electronics', value: 2400, color: '#6366f1' },
    { name: 'Software', value: 1800, color: '#8b5cf6' },
    { name: 'Services', value: 1100, color: '#38bdf8' },
    { name: 'Hardware', value: 900, color: '#34d399' },
    { name: 'Other', value: 600, color: '#fbbf24' },
];

const weeklyTraffic = [
    { day: 'Mon', visitors: 1200, conversions: 86 },
    { day: 'Tue', visitors: 1400, conversions: 102 },
    { day: 'Wed', visitors: 1350, conversions: 94 },
    { day: 'Thu', visitors: 1600, conversions: 118 },
    { day: 'Fri', visitors: 1800, conversions: 134 },
    { day: 'Sat', visitors: 900, conversions: 52 },
    { day: 'Sun', visitors: 750, conversions: 41 },
];

const customTooltipStyle = {
    background: 'rgba(17, 24, 39, 0.95)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '10px',
    padding: '12px 16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    fontSize: '13px',
    color: '#f1f5f9',
    fontFamily: 'Inter, sans-serif',
};

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div style={customTooltipStyle}>
                <p style={{ fontWeight: 600, marginBottom: '6px', color: '#a5b4fc' }}>{label}</p>
                {payload.map((p, i) => (
                    <p key={i} style={{ color: p.color, margin: '2px 0' }}>
                        {p.name}: <strong>${(p.value / 1000).toFixed(1)}K</strong>
                    </p>
                ))}
            </div>
        );
    }
    return null;
}

function Charts() {
    const [chartTab, setChartTab] = useState('revenue');

    return (
        <>
            {/* Revenue Chart */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon blue">
                            <i className="ri-line-chart-line"></i>
                        </div>
                        <div>
                            <h3>Revenue Analytics</h3>
                            <p>Monthly performance overview</p>
                        </div>
                    </div>
                    <div className="card-header-actions">
                        <div className="tab-nav">
                            <button
                                className={`tab-btn ${chartTab === 'revenue' ? 'active' : ''}`}
                                onClick={() => setChartTab('revenue')}
                            >
                                Revenue
                            </button>
                            <button
                                className={`tab-btn ${chartTab === 'profit' ? 'active' : ''}`}
                                onClick={() => setChartTab('profit')}
                            >
                                Profit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height="100%">
                            {chartTab === 'revenue' ? (
                                <AreaChart data={monthlyData}>
                                    <defs>
                                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                                            <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#f87171" stopOpacity={0.15} />
                                            <stop offset="100%" stopColor="#f87171" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" />
                                    <XAxis
                                        dataKey="month"
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(v) => `$${v / 1000}K`}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#6366f1"
                                        strokeWidth={2.5}
                                        fill="url(#revenueGradient)"
                                        name="Revenue"
                                        dot={{ fill: '#6366f1', strokeWidth: 0, r: 3 }}
                                        activeDot={{ r: 5, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="expenses"
                                        stroke="#f87171"
                                        strokeWidth={2}
                                        fill="url(#expenseGradient)"
                                        name="Expenses"
                                        dot={{ fill: '#f87171', strokeWidth: 0, r: 2 }}
                                        activeDot={{ r: 4, fill: '#f87171', stroke: '#fff', strokeWidth: 2 }}
                                    />
                                </AreaChart>
                            ) : (
                                <BarChart data={monthlyData}>
                                    <defs>
                                        <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#34d399" stopOpacity={0.9} />
                                            <stop offset="100%" stopColor="#34d399" stopOpacity={0.4} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" />
                                    <XAxis
                                        dataKey="month"
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(v) => `$${v / 1000}K`}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar
                                        dataKey="profit"
                                        fill="url(#profitGrad)"
                                        name="Profit"
                                        radius={[6, 6, 0, 0]}
                                        maxBarSize={36}
                                    />
                                </BarChart>
                            )}
                        </ResponsiveContainer>
                    </div>

                    <div className="chart-legend">
                        {chartTab === 'revenue' ? (
                            <>
                                <div className="chart-legend-item">
                                    <span className="chart-legend-dot" style={{ background: '#6366f1' }}></span>
                                    Revenue
                                </div>
                                <div className="chart-legend-item">
                                    <span className="chart-legend-dot" style={{ background: '#f87171' }}></span>
                                    Expenses
                                </div>
                            </>
                        ) : (
                            <div className="chart-legend-item">
                                <span className="chart-legend-dot" style={{ background: '#34d399' }}></span>
                                Net Profit
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Category Breakdown */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon green">
                            <i className="ri-pie-chart-2-line"></i>
                        </div>
                        <div>
                            <h3>Category Breakdown</h3>
                            <p>Revenue distribution by category</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart-wrapper" style={{ height: '240px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={95}
                                    paddingAngle={4}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value) => [`$${(value / 1000).toFixed(1)}K`, 'Revenue']}
                                    contentStyle={customTooltipStyle}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="chart-legend" style={{ flexWrap: 'wrap' }}>
                        {categoryData.map((item) => (
                            <div key={item.name} className="chart-legend-item">
                                <span className="chart-legend-dot" style={{ background: item.color }}></span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Traffic Chart */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon orange">
                            <i className="ri-bar-chart-grouped-line"></i>
                        </div>
                        <div>
                            <h3>Weekly Traffic</h3>
                            <p>Visitors and conversion tracking</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart-wrapper" style={{ height: '240px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={weeklyTraffic}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" />
                                <XAxis
                                    dataKey="day"
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip contentStyle={customTooltipStyle} />
                                <Line
                                    type="monotone"
                                    dataKey="visitors"
                                    stroke="#8b5cf6"
                                    strokeWidth={2.5}
                                    name="Visitors"
                                    dot={{ fill: '#8b5cf6', strokeWidth: 0, r: 3 }}
                                    activeDot={{ r: 5, fill: '#8b5cf6', stroke: '#fff', strokeWidth: 2 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="conversions"
                                    stroke="#fbbf24"
                                    strokeWidth={2.5}
                                    name="Conversions"
                                    dot={{ fill: '#fbbf24', strokeWidth: 0, r: 3 }}
                                    activeDot={{ r: 5, fill: '#fbbf24', stroke: '#fff', strokeWidth: 2 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="chart-legend">
                        <div className="chart-legend-item">
                            <span className="chart-legend-dot" style={{ background: '#8b5cf6' }}></span>
                            Visitors
                        </div>
                        <div className="chart-legend-item">
                            <span className="chart-legend-dot" style={{ background: '#fbbf24' }}></span>
                            Conversions
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Charts;
