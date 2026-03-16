import React from 'react';

const datasets = [
    {
        id: 1,
        name: 'Sales Transactions 2024',
        records: '1.2M records',
        icon: 'ri-shopping-cart-2-line',
        lastUpdated: '2 hours ago',
        status: 'connected',
        source: 'PostgreSQL',
    },
    {
        id: 2,
        name: 'Customer Profiles',
        records: '45K records',
        icon: 'ri-user-3-line',
        lastUpdated: '30 min ago',
        status: 'connected',
        source: 'MongoDB',
    },
    {
        id: 3,
        name: 'Product Catalog',
        records: '2,847 items',
        icon: 'ri-box-3-line',
        lastUpdated: '1 day ago',
        status: 'connected',
        source: 'REST API',
    },
    {
        id: 4,
        name: 'Marketing Campaigns',
        records: '156 campaigns',
        icon: 'ri-megaphone-line',
        lastUpdated: '6 hours ago',
        status: 'syncing',
        source: 'Google Ads API',
    },
    {
        id: 5,
        name: 'Web Analytics',
        records: '5.8M events',
        icon: 'ri-bar-chart-box-line',
        lastUpdated: 'Real-time',
        status: 'connected',
        source: 'Google Analytics',
    },
];

function Datasets() {
    return (
        <div className="card animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon blue">
                        <i className="ri-database-2-line"></i>
                    </div>
                    <div>
                        <h3>Connected Datasets</h3>
                        <p>Data sources powering your analytics</p>
                    </div>
                </div>
                <div className="card-header-actions">
                    <button className="btn btn-primary btn-sm" id="connect-datasource-btn">
                        <i className="ri-add-line"></i> Connect Source
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="automation-list">
                    {datasets.map((ds, index) => (
                        <div
                            key={ds.id}
                            className="automation-item animate-fade-in-up"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <div className="automation-item-left">
                                <div
                                    className="automation-item-icon"
                                    style={{
                                        background: 'rgba(56, 189, 248, 0.12)',
                                        color: '#38bdf8',
                                    }}
                                >
                                    <i className={ds.icon}></i>
                                </div>
                                <div className="automation-item-info">
                                    <h4>{ds.name}</h4>
                                    <p>
                                        {ds.records} &middot; {ds.source}
                                    </p>
                                </div>
                            </div>
                            <div className="automation-item-right" style={{ gap: 'var(--space-6)' }}>
                                <span
                                    style={{
                                        fontSize: 'var(--text-xs)',
                                        color: 'var(--color-text-muted)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '3px',
                                    }}
                                >
                                    <i className="ri-refresh-line"></i> {ds.lastUpdated}
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
                                            ds.status === 'connected'
                                                ? 'var(--color-success-bg)'
                                                : 'var(--color-info-bg)',
                                        color:
                                            ds.status === 'connected'
                                                ? 'var(--color-success)'
                                                : 'var(--color-info)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '3px',
                                    }}
                                >
                                    {ds.status === 'syncing' && (
                                        <i className="ri-loader-4-line" style={{ animation: 'spin 1s linear infinite' }}></i>
                                    )}
                                    {ds.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Datasets;
