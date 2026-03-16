import React from 'react';

const stats = [
    {
        id: 'queries',
        icon: 'ri-question-answer-line',
        iconBg: 'rgba(99, 102, 241, 0.12)',
        iconColor: '#6366f1',
        value: '1,284',
        label: 'AI Queries Today',
        trend: '+12.5%',
        trendDir: 'up',
    },
    {
        id: 'insights-count',
        icon: 'ri-lightbulb-flash-line',
        iconBg: 'rgba(56, 189, 248, 0.12)',
        iconColor: '#38bdf8',
        value: '47',
        label: 'Insights Generated',
        trend: '+8.3%',
        trendDir: 'up',
    },
    {
        id: 'anomalies',
        icon: 'ri-error-warning-line',
        iconBg: 'rgba(251, 191, 36, 0.12)',
        iconColor: '#fbbf24',
        value: '6',
        label: 'Anomalies Detected',
        trend: '-2.1%',
        trendDir: 'down',
    },
    {
        id: 'agents-active',
        icon: 'ri-robot-2-line',
        iconBg: 'rgba(52, 211, 153, 0.12)',
        iconColor: '#34d399',
        value: '4',
        label: 'Active Agents',
        trend: 'Stable',
        trendDir: 'up',
    },
];

function StatCards() {
    return (
        <div className="stats-row">
            {stats.map((stat, index) => (
                <div
                    key={stat.id}
                    className="stat-card animate-fade-in-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                >
                    <div className="stat-card-top">
                        <div
                            className="stat-card-icon"
                            style={{ background: stat.iconBg, color: stat.iconColor }}
                        >
                            <i className={stat.icon}></i>
                        </div>
                        <span className={`stat-card-trend ${stat.trendDir}`}>
                            {stat.trendDir === 'up' ? (
                                <i className="ri-arrow-up-s-line"></i>
                            ) : (
                                <i className="ri-arrow-down-s-line"></i>
                            )}
                            {stat.trend}
                        </span>
                    </div>
                    <h4>{stat.value}</h4>
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
}

export default StatCards;
