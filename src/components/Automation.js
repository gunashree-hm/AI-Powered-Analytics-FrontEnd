import React, { useState } from 'react';

const automationItems = [
    {
        id: 1,
        name: 'Daily Sales Summary',
        description: 'Generate and email a comprehensive sales report to the leadership team',
        icon: 'ri-mail-send-line',
        iconBg: 'rgba(99, 102, 241, 0.12)',
        iconColor: '#6366f1',
        schedule: 'Every day at 8:00 AM',
        enabled: true,
        lastRun: 'Today, 8:00 AM',
        recipients: 'leadership@company.com',
    },
    {
        id: 2,
        name: 'Weekly Performance Report',
        description: 'Compile weekly KPIs with AI-generated insights and trend analysis',
        icon: 'ri-file-chart-line',
        iconBg: 'rgba(56, 189, 248, 0.12)',
        iconColor: '#38bdf8',
        schedule: 'Every Monday at 9:00 AM',
        enabled: true,
        lastRun: 'Monday, 9:00 AM',
        recipients: 'analytics-team@company.com',
    },
    {
        id: 3,
        name: 'Anomaly Alert',
        description: 'Instant notification when AI detects unusual patterns or anomalies in data',
        icon: 'ri-alarm-warning-line',
        iconBg: 'rgba(251, 191, 36, 0.12)',
        iconColor: '#fbbf24',
        schedule: 'Real-time monitoring',
        enabled: true,
        lastRun: '2 hours ago',
        recipients: 'ops-team@company.com',
    },
    {
        id: 4,
        name: 'Monthly Executive Dashboard',
        description: 'Full executive dashboard with YoY comparisons and forecasting',
        icon: 'ri-presentation-line',
        iconBg: 'rgba(52, 211, 153, 0.12)',
        iconColor: '#34d399',
        schedule: '1st of every month at 7:00 AM',
        enabled: false,
        lastRun: 'Feb 1, 7:00 AM',
        recipients: 'c-suite@company.com',
    },
    {
        id: 5,
        name: 'Inventory Reorder Alerts',
        description: 'Automated alerts when stock levels fall below reorder thresholds',
        icon: 'ri-inbox-unarchive-line',
        iconBg: 'rgba(248, 113, 113, 0.12)',
        iconColor: '#f87171',
        schedule: 'Every 6 hours',
        enabled: true,
        lastRun: '3 hours ago',
        recipients: 'supply-chain@company.com',
    },
];

function Automation() {
    const [toggles, setToggles] = useState(
        automationItems.reduce((acc, item) => ({ ...acc, [item.id]: item.enabled }), {})
    );

    const handleToggle = (id) => {
        setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="card animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon orange">
                        <i className="ri-timer-flash-line"></i>
                    </div>
                    <div>
                        <h3>Automation</h3>
                        <p>Scheduled reports, alerts, and automated workflows</p>
                    </div>
                </div>
                <div className="card-header-actions">
                    <button className="btn btn-primary btn-sm" id="add-automation-btn">
                        <i className="ri-add-line"></i> New Automation
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="automation-list">
                    {automationItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="automation-item animate-fade-in-up"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <div className="automation-item-left">
                                <div
                                    className="automation-item-icon"
                                    style={{ background: item.iconBg, color: item.iconColor }}
                                >
                                    <i className={item.icon}></i>
                                </div>
                                <div className="automation-item-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: 'var(--space-4)',
                                            marginTop: 'var(--space-1)',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 'var(--text-xs)',
                                                color: 'var(--color-text-muted)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '3px',
                                            }}
                                        >
                                            <i className="ri-time-line"></i> Last: {item.lastRun}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: 'var(--text-xs)',
                                                color: 'var(--color-text-muted)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '3px',
                                            }}
                                        >
                                            <i className="ri-mail-line"></i> {item.recipients}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="automation-item-right">
                                <div className="automation-schedule">
                                    <i className="ri-calendar-schedule-line"></i>
                                    {item.schedule}
                                </div>
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        checked={toggles[item.id]}
                                        onChange={() => handleToggle(item.id)}
                                        id={`automation-toggle-${item.id}`}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Automation;
