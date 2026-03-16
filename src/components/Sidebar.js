import React from 'react';

function Sidebar({ activeView, onViewChange, isOpen, onClose }) {
    const mainNavItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-3-line' },
        { id: 'chat', label: 'Conversational AI', icon: 'ri-chat-ai-line', badge: 'NEW' },
        { id: 'insights', label: 'Proactive Insights', icon: 'ri-lightbulb-flash-line' },
        { id: 'agents', label: 'Data Agents', icon: 'ri-robot-2-line' },
    ];

    const toolsNavItems = [
        { id: 'automation', label: 'Automation', icon: 'ri-timer-flash-line' },
        { id: 'reports', label: 'Reports', icon: 'ri-file-chart-line' },
        { id: 'datasets', label: 'Datasets', icon: 'ri-database-2-line' },
    ];

    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* Brand */}
                <div className="sidebar-brand">
                    <div className="sidebar-brand-icon">
                        <i className="ri-bar-chart-box-line"></i>
                    </div>
                    <div>
                        <h1>NexusAI</h1>
                        <span>Analytics Platform</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="sidebar-nav">
                    <div className="sidebar-section-title">Main</div>
                    {mainNavItems.map((item) => (
                        <div
                            key={item.id}
                            className={`sidebar-nav-item ${activeView === item.id ? 'active' : ''}`}
                            onClick={() => {
                                onViewChange(item.id);
                                onClose();
                            }}
                        >
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                            {item.badge && <span className="nav-badge">{item.badge}</span>}
                        </div>
                    ))}

                    <div className="sidebar-section-title">Tools</div>
                    {toolsNavItems.map((item) => (
                        <div
                            key={item.id}
                            className={`sidebar-nav-item ${activeView === item.id ? 'active' : ''}`}
                            onClick={() => {
                                onViewChange(item.id);
                                onClose();
                            }}
                        >
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </nav>

                {/* Footer Status */}
                <div className="sidebar-footer">
                    <div className="sidebar-status">
                        <span className="status-dot"></span>
                        <span>AI Engine Online</span>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
