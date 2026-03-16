import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AIChatPanel from './AIChatPanel';

const tabToRoute = {
  'Overview': '/',
  'Performance': '/performance',
  'Segmentation': '/segmentation',
};

const routeToTab = {
  '/': 'Overview',
  '/performance': 'Performance',
  '/segmentation': 'Segmentation',
};

export default function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = routeToTab[location.pathname] || 'Overview';

  const handleTabChange = (tab) => {
    const route = tabToRoute[tab];
    if (route) navigate(route);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0f0f]">
      {/* Sidebar */}
      <div className="relative">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(c => !c)} />
      </div>

      {/* AI Chat Panel */}
      <AIChatPanel />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
        <main className="flex-1 overflow-y-auto bg-[#0a0f0f]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
