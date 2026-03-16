import React from 'react';

const viewTitles = {
    dashboard: { title: 'Dashboard', breadcrumb: 'Overview' },
    chat: { title: 'Conversational Analytics', breadcrumb: 'AI Chat' },
    insights: { title: 'Proactive Insights', breadcrumb: 'Auto Insights' },
    agents: { title: 'Data Agents', breadcrumb: 'AI Agents' },
    automation: { title: 'Automation', breadcrumb: 'Schedules' },
    reports: { title: 'Reports', breadcrumb: 'Analytics' },
    datasets: { title: 'Datasets', breadcrumb: 'Data Sources' },
};

function TopBar({ activeView, onMenuToggle }) {
    const current = viewTitles[activeView] || viewTitles.dashboard;

    return (
        <header className="topbar">
            <div className="topbar-left">
                <button className="mobile-menu-btn" onClick={onMenuToggle}>
                    <i className="ri-menu-line"></i>
                </button>
                <div>
                    <h2>{current.title}</h2>
                    <div className="topbar-breadcrumb">
                        <span>NexusAI</span>
                        <span className="separator">/</span>
                        <span className="current">{current.breadcrumb}</span>
                    </div>
                </div>
            </div>

            <div className="topbar-right">
                <div className="topbar-search" id="global-search">
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder="Search analytics..." />
                </div>

                <button className="topbar-icon-btn" id="notifications-btn" title="Notifications">
                    <i className="ri-notification-3-line"></i>
                    <span className="notification-dot"></span>
                </button>

                <button className="topbar-icon-btn" id="settings-btn" title="Settings">
                    <i className="ri-settings-4-line"></i>
                </button>

                <div className="topbar-avatar" id="user-avatar" title="User Profile">
                    JD
                </div>
            </div>
        </header>
    );
}

export default TopBar;
