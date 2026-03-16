import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Segmentation from './pages/Segmentation';
import Performance from './pages/Performance';
import Cohorts from './pages/Cohorts';
import Automations from './pages/Automations';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="segmentation" element={<Segmentation />} />
        <Route path="performance" element={<Performance />} />
        <Route path="cohorts" element={<Cohorts />} />
        <Route path="automations" element={<Automations />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}
