import React, { useState } from 'react';

const agents = [
    {
        id: 1,
        name: 'Inventory Sentinel',
        type: 'Supply Chain Expert',
        icon: 'ri-box-3-line',
        status: 'active',
        description:
            'Monitoring 2,847 SKUs across 3 warehouses. Currently tracking 6 items approaching stockout threshold.',
        actions: [
            {
                label: 'Reorder SKU-X3921',
                detail: 'Stock at 12 units, projected stockout in 4 days. Recommend 500 units.',
            },
            {
                label: 'Redistribute SKU-B1205',
                detail: 'Warehouse B has 340 excess units while Warehouse A is running low.',
            },
        ],
        lastAction: '2 min ago',
        insights: 23,
    },
    {
        id: 2,
        name: 'Revenue Optimizer',
        type: 'Pricing Strategist',
        icon: 'ri-money-dollar-circle-line',
        status: 'active',
        description:
            'Analyzing pricing elasticity across product lines. Identified 12 products with suboptimal pricing.',
        actions: [
            {
                label: 'Increase price on Electronics Bundle',
                detail: 'Elasticity analysis shows 8% price increase would yield +$47K/month with <2% volume loss.',
            },
            {
                label: 'Launch flash sale on Accessories',
                detail: 'Overstock of 1,200 units. 15% discount projected to clear inventory in 5 days.',
            },
        ],
        lastAction: '8 min ago',
        insights: 15,
    },
    {
        id: 3,
        name: 'Customer Intelligence',
        type: 'Behavioral Analyst',
        icon: 'ri-user-search-line',
        status: 'active',
        description:
            'Tracking behavior patterns across 45K active customers. Churn risk model updated with latest data.',
        actions: [
            {
                label: 'Engage 127 at-risk customers',
                detail: 'High-value customers showing decreased engagement. Recommend personalized retention offers.',
            },
            {
                label: 'Segment opportunity: Power Users',
                detail: '340 users averaging 5+ sessions/week. Upsell premium tier — projected 42% conversion.',
            },
        ],
        lastAction: '22 min ago',
        insights: 31,
    },
    {
        id: 4,
        name: 'Marketing Analyst',
        type: 'Campaign Optimizer',
        icon: 'ri-megaphone-line',
        status: 'idle',
        description:
            'Evaluating campaign ROI across all channels. Last full analysis completed 1 hour ago.',
        actions: [
            {
                label: 'Shift budget from Display to Search',
                detail: 'Display CPA rose 34% while Search CPA dropped 12%. Rebalance could save $8.2K/month.',
            },
        ],
        lastAction: '1 hour ago',
        insights: 9,
    },
];

function DataAgents() {
    const [expandedAgent, setExpandedAgent] = useState(null);

    const toggleExpand = (id) => {
        setExpandedAgent(expandedAgent === id ? null : id);
    };

    return (
        <div className="card animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon green">
                        <i className="ri-robot-2-line"></i>
                    </div>
                    <div>
                        <h3>Data Agents</h3>
                        <p>AI agents acting as subject matter experts</p>
                    </div>
                </div>
                <div className="card-header-actions">
                    <span
                        style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--color-success)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        <span
                            style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: 'var(--color-success)',
                                display: 'inline-block',
                            }}
                        ></span>
                        {agents.filter((a) => a.status === 'active').length} Active
                    </span>
                </div>
            </div>
            <div className="card-body">
                <div className="agent-cards">
                    {agents.map((agent) => (
                        <div key={agent.id} className="agent-card" style={{ flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', width: '100%' }}>
                                <div
                                    className="agent-avatar"
                                    style={{
                                        background:
                                            agent.status === 'active'
                                                ? 'var(--gradient-brand)'
                                                : 'rgba(100, 116, 139, 0.2)',
                                    }}
                                >
                                    <i className={agent.icon}></i>
                                </div>
                                <div className="agent-card-content" style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4>{agent.name}</h4>
                                        <span
                                            style={{
                                                fontSize: '10px',
                                                padding: '2px 8px',
                                                borderRadius: 'var(--radius-full)',
                                                background:
                                                    agent.status === 'active'
                                                        ? 'var(--color-success-bg)'
                                                        : 'rgba(100, 116, 139, 0.1)',
                                                color:
                                                    agent.status === 'active'
                                                        ? 'var(--color-success)'
                                                        : 'var(--color-text-muted)',
                                                textTransform: 'uppercase',
                                                fontWeight: 600,
                                                letterSpacing: '0.04em',
                                            }}
                                        >
                                            {agent.status}
                                        </span>
                                    </div>
                                    <div className="agent-type">{agent.type}</div>
                                    <p>{agent.description}</p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: 'var(--space-3)',
                                            marginTop: 'var(--space-2)',
                                            alignItems: 'center',
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
                                            <i className="ri-time-line"></i> {agent.lastAction}
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
                                            <i className="ri-lightbulb-line"></i> {agent.insights} insights
                                        </span>
                                    </div>
                                    <button
                                        className="agent-action-btn"
                                        onClick={() => toggleExpand(agent.id)}
                                    >
                                        <i className={expandedAgent === agent.id ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
                                        {expandedAgent === agent.id ? 'Hide' : 'View'} Recommendations ({agent.actions.length})
                                    </button>
                                </div>
                            </div>

                            {/* Expanded Recommendations */}
                            {expandedAgent === agent.id && (
                                <div
                                    className="animate-fade-in-down"
                                    style={{
                                        marginTop: 'var(--space-3)',
                                        paddingTop: 'var(--space-3)',
                                        borderTop: '1px solid var(--color-border)',
                                        width: '100%',
                                    }}
                                >
                                    {agent.actions.map((action, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                gap: 'var(--space-3)',
                                                alignItems: 'flex-start',
                                                padding: 'var(--space-3)',
                                                background: 'var(--color-bg-glass)',
                                                borderRadius: 'var(--radius-sm)',
                                                marginBottom: 'var(--space-2)',
                                                border: '1px solid var(--color-border)',
                                            }}
                                        >
                                            <i
                                                className="ri-arrow-right-circle-line"
                                                style={{ color: 'var(--color-text-accent)', marginTop: '2px', flexShrink: 0 }}
                                            ></i>
                                            <div>
                                                <p
                                                    style={{
                                                        fontSize: 'var(--text-sm)',
                                                        fontWeight: 600,
                                                        marginBottom: '2px',
                                                        color: 'var(--color-text-primary)',
                                                    }}
                                                >
                                                    {action.label}
                                                </p>
                                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                                                    {action.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DataAgents;
