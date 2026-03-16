<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> db7a11304d984245563fe39d8b17b6d326901b87
