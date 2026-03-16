import React from 'react';

const reports = [
    {
        id: 1,
        name: 'Q4 2024 Revenue Analysis',
        type: 'Revenue Report',
        icon: 'ri-file-chart-line',
        date: 'Dec 31, 2024',
        status: 'completed',
        size: '2.4 MB',
    },
    {
        id: 2,
        name: 'Customer Churn Analysis',
        type: 'Customer Report',
        icon: 'ri-user-unfollow-line',
        date: 'Jan 15, 2025',
        status: 'completed',
        size: '1.8 MB',
    },
    {
        id: 3,
        name: 'Supply Chain Performance',
        type: 'Operations Report',
        icon: 'ri-truck-line',
        date: 'Feb 1, 2025',
        status: 'completed',
        size: '3.1 MB',
    },
    {
        id: 4,
        name: 'Marketing ROI Dashboard',
        type: 'Marketing Report',
        icon: 'ri-megaphone-line',
        date: 'Feb 10, 2025',
        status: 'generating',
        size: '--',
    },
];

function Reports() {
    return (
        <div className="card animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon purple">
                        <i className="ri-file-chart-line"></i>
                    </div>
                    <div>
                        <h3>Reports</h3>
                        <p>AI-generated reports and analysis documents</p>
                    </div>
                </div>
                <div className="card-header-actions">
                    <button className="btn btn-primary btn-sm" id="generate-report-btn">
                        <i className="ri-sparkling-2-line"></i> Generate Report
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="automation-list">
                    {reports.map((report, index) => (
                        <div
                            key={report.id}
                            className="automation-item animate-fade-in-up"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <div className="automation-item-left">
                                <div
                                    className="automation-item-icon"
                                    style={{
                                        background: 'rgba(99, 102, 241, 0.12)',
                                        color: '#6366f1',
                                    }}
                                >
                                    <i className={report.icon}></i>
                                </div>
                                <div className="automation-item-info">
                                    <h4>{report.name}</h4>
                                    <p>{report.type}</p>
                                </div>
                            </div>
                            <div className="automation-item-right" style={{ gap: 'var(--space-6)' }}>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                                    {report.date}
                                </span>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                                    {report.size}
                                </span>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        textTransform: 'uppercase',
                                        fontWeight: 600,
                                        letterSpacing: '0.04em',
                                        padding: '2px 8px',
                                        borderRadius: 'var(--radius-full)',
                                        background:
                                            report.status === 'completed'
                                                ? 'var(--color-success-bg)'
                                                : 'var(--color-warning-bg)',
                                        color:
                                            report.status === 'completed'
                                                ? 'var(--color-success)'
                                                : 'var(--color-warning)',
                                    }}
                                >
                                    {report.status}
                                </span>
                                {report.status === 'completed' && (
                                    <button className="btn btn-ghost btn-sm">
                                        <i className="ri-download-line"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reports;
