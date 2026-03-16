import React, { useState } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatCards from './components/StatCards';
import ConversationalChat from './components/ConversationalChat';
import Charts from './components/Charts';
import ProactiveInsights from './components/ProactiveInsights';
import DataAgents from './components/DataAgents';
import Automation from './components/Automation';
import Reports from './components/Reports';
import Datasets from './components/Datasets';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <>
            <StatCards />
            <div className="dashboard-grid">
              <ConversationalChat />
              <Charts />
              <ProactiveInsights />
            </div>
          </>
        );
      case 'chat':
        return (
          <div className="dashboard-grid">
            <ConversationalChat />
          </div>
        );
      case 'insights':
        return <ProactiveInsights />;
      case 'agents':
        return <DataAgents />;
      case 'automation':
        return <Automation />;
      case 'reports':
        return <Reports />;
      case 'datasets':
        return <Datasets />;
      default:
        return (
          <>
            <StatCards />
            <div className="dashboard-grid">
              <ConversationalChat />
              <Charts />
              <ProactiveInsights />
            </div>
          </>
        );
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        activeView={activeView}
        onViewChange={setActiveView}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <TopBar
          activeView={activeView}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="page-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
