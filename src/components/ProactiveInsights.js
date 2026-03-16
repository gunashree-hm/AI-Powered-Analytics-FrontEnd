import React, { useState, useEffect } from 'react';

const insightsData = [
    {
        id: 1,
        type: 'trend-up',
        icon: 'ri-arrow-up-circle-line',
        title: 'Revenue Growth Acceleration',
        description:
            'Revenue has grown 23% over the last 3 months, outpacing the 15% industry average. Enterprise segment is the primary driver with 42% contribution.',
        severity: 'high',
        time: '2 min ago',
        category: 'Revenue',
    },
    {
        id: 2,
        type: 'anomaly',
        icon: 'ri-error-warning-line',
        title: 'Unusual Spike in Return Rates',
        description:
            'Return rates for SKU-2847 (Wireless Headphones) jumped from 3.2% to 11.7% in the last week. Recommend investigating product quality or listing accuracy.',
        severity: 'high',
        time: '15 min ago',
        category: 'Operations',
    },
    {
        id: 3,
        type: 'trend-down',
        icon: 'ri-arrow-down-circle-line',
        title: 'Customer Acquisition Cost Rising',
        description:
            'CAC has increased by 18% month-over-month, now at $47.20 per customer. Social media ad performance has dropped — consider reallocating budget to organic channels.',
        severity: 'medium',
        time: '1 hour ago',
        category: 'Marketing',
    },
    {
        id: 4,
        type: 'info',
        icon: 'ri-information-line',
        title: 'Seasonal Pattern Detected',
        description:
            'Historical data shows a consistent 12-15% sales increase starting mid-October. Recommend pre-stocking top 20 SKUs and scheduling promotional campaigns.',
        severity: 'medium',
        time: '2 hours ago',
        category: 'Forecasting',
    },
    {
        id: 5,
        type: 'trend-up',
        icon: 'ri-arrow-up-circle-line',
        title: 'New Market Segment Opportunity',
        description:
            'Data shows 34% increase in traffic from the 25-34 age group. This underserved segment has high conversion potential with targeted product recommendations.',
        severity: 'low',
        time: '3 hours ago',
        category: 'Strategy',
    },
    {
        id: 6,
        type: 'anomaly',
        icon: 'ri-error-warning-line',
        title: 'Inventory Low on SKU-X3921',
        description:
            'Current stock level at 12 units, projected to stockout in 4 days based on current demand velocity. Recommend immediate reorder of 500+ units.',
        severity: 'high',
        time: '4 hours ago',
        category: 'Inventory',
    },
];

function ProactiveInsights() {
    const [filter, setFilter] = useState('all');
    const [visibleInsights, setVisibleInsights] = useState([]);

    useEffect(() => {
        // Staggered animation
        const filtered =
            filter === 'all'
                ? insightsData
                : insightsData.filter((i) => i.severity === filter);

        setVisibleInsights([]);
        filtered.forEach((insight, index) => {
            setTimeout(() => {
                setVisibleInsights((prev) => [...prev, insight]);
            }, index * 100);
        });
    }, [filter]);

    return (
        <div className="card animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon blue">
                        <i className="ri-lightbulb-flash-line"></i>
                    </div>
                    <div>
                        <h3>Proactive Insights</h3>
                        <p>AI-detected trends, anomalies, and opportunities</p>
                    </div>
                </div>
                <div className="card-header-actions">
                    <div className="tab-nav">
                        {['all', 'high', 'medium', 'low'].map((f) => (
                            <button
                                key={f}
                                className={`tab-btn ${filter === f ? 'active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f.charAt(0).toUpperCase() + f.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="insights-list">
                    {visibleInsights.map((insight) => (
                        <div key={insight.id} className="insight-item animate-fade-in-up">
                            <div className={`insight-icon ${insight.type}`}>
                                <i className={insight.icon}></i>
                            </div>
                            <div className="insight-content">
                                <h4>{insight.title}</h4>
                                <p>{insight.description}</p>
                                <div className="insight-meta">
                                    <span className={`insight-tag ${insight.severity}`}>{insight.severity}</span>
                                    <span className="insight-time">
                                        <i className="ri-time-line" style={{ marginRight: '3px' }}></i>
                                        {insight.time}
                                    </span>
                                    <span className="insight-time">
                                        <i className="ri-price-tag-3-line" style={{ marginRight: '3px' }}></i>
                                        {insight.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {visibleInsights.length === 0 && (
                        <div className="welcome-state">
                            <i className="ri-lightbulb-line"></i>
                            <h4>No insights in this category</h4>
                            <p>Try a different filter to see more insights.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProactiveInsights;
