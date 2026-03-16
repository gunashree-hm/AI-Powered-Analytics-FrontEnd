# Gesix — Enterprise AI Analytics Dashboard

A production-ready, dark-themed AI analytics dashboard built with React + Vite + Tailwind CSS.

## 🚀 Quick Start

```bash
# 1. Extract the project folder
# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# App will be running at http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Root layout: Sidebar + AIChatPanel + Navbar + Outlet
│   ├── Sidebar.jsx         # Collapsible left navigation
│   ├── Navbar.jsx          # Top bar with tabs, live stream badge, notifications
│   ├── AIChatPanel.jsx     # Left AI assistant chat panel
│   ├── StatCard.jsx        # Animated metric cards with progress bar
│   ├── ChartComponent.jsx  # Recharts wrappers: Area, Bar, Line, Donut
│   └── TableComponent.jsx  # Reusable table + StatusBadge + GrowthCell helpers
│
├── pages/
│   ├── Dashboard.jsx       # Overview: stat cards, revenue trend, donut, segment table
│   ├── Analytics.jsx       # Weekly metrics, conversion funnel, channels, retention matrix
│   ├── Segmentation.jsx    # Donut distribution, quick stats, AI suggestion, segment metrics
│   ├── Performance.jsx     # Resource timeline, API endpoint metrics, service health
│   ├── Cohorts.jsx         # LTV progression, cohort breakdown, cohort list
│   ├── Automations.jsx     # Automation cards with toggle, activity feed
│   ├── Settings.jsx        # Profile, notifications, API keys
│   └── UserProfile.jsx     # User card, activity chart, recent reports
│
├── data/
│   └── mockData.js         # All mock data: revenue, segments, analytics, etc.
│
├── App.jsx                 # React Router routes
├── main.jsx                # React entry point
└── index.css               # Global styles, Tailwind base, custom utilities
```

## 🎨 Design System

| Token | Value |
|---|---|
| `bg-primary` | `#0a0f0f` |
| `bg-card` | `#111a1a` |
| `cyan-accent` | `#00e5cc` |
| `text-primary` | `#e8f4f4` |
| `text-secondary` | `#7a9e9e` |
| Font Display | DM Mono |
| Font Body | DM Sans |
| Font Mono | JetBrains Mono |

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `react-router-dom` | Client-side routing |
| `recharts` | Charts (Area, Bar, Line, Pie) |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility CSS |
| `vite` | Dev server & bundler |

## 🗺️ Routes

| Path | Page |
|---|---|
| `/` | Dashboard (Revenue Workspace) |
| `/analytics` | Analytics |
| `/segmentation` | User Segmentation |
| `/performance` | System Performance |
| `/cohorts` | Cohorts |
| `/automations` | Automations |
| `/settings` | Settings |
| `/profile` | User Profile |

## ➕ Adding New Pages

1. Create `src/pages/YourPage.jsx`
2. Add mock data to `src/data/mockData.js`
3. Add a `<Route>` in `src/App.jsx`
4. Add nav item in `src/components/Sidebar.jsx`

## 🧩 Reusable Components

### StatCard
```jsx
<StatCard label="Total Revenue" value="$4.2M" change="12.4" icon={DollarSign} />
```

### AreaChartComponent
```jsx
<AreaChartComponent
  data={revenueData}
  lines={[{ key: 'current', label: 'Current', color: '#00e5cc' }]}
  height={220}
/>
```

### TableComponent
```jsx
<TableComponent columns={columns} data={rows} />
```
Columns support a `render(value, row)` function for custom cells.

### StatusBadge / GrowthCell
```jsx
<StatusBadge status="stable" />   // stable | growing | risk | warning | high | low | medium
<GrowthCell value={18.2} />       // shows trend arrow + colored %
```
