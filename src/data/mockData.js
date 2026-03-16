// ─── Revenue & Overview ───────────────────────────────────────────────────────
export const revenueData = [
  { month: 'Jan', current: 2800000, projected: 3000000 },
  { month: 'Feb', current: 3100000, projected: 3200000 },
  { month: 'Mar', current: 2900000, projected: 3100000 },
  { month: 'Apr', current: 3400000, projected: 3500000 },
  { month: 'May', current: 3200000, projected: 3600000 },
  { month: 'Jun', current: 3800000, projected: 3900000 },
  { month: 'Jul', current: 4200000, projected: 4400000 },
];

export const regionalData = [
  { name: 'North America', value: 45, color: '#00e5cc' },
  { name: 'Europe', value: 25, color: '#00b8a3' },
  { name: 'APAC', value: 18, color: '#008a7a' },
  { name: 'Other', value: 12, color: '#1e2e2e' },
];

export const segmentTableData = [
  { id: 1, name: 'Enterprise Core', icon: '🚀', status: 'stable', growth: 18.2, churn: 1.2, value: 2450000 },
  { id: 2, name: 'Mid-Market', icon: '📊', status: 'growing', growth: 24.5, churn: 4.8, value: 890200 },
  { id: 3, name: 'SMB Growth', icon: '💼', status: 'growing', growth: 31.0, churn: 7.1, value: 540000 },
  { id: 4, name: 'Startup Tier', icon: '⚡', status: 'warning', growth: -2.3, churn: 12.4, value: 220000 },
  { id: 5, name: 'Government', icon: '🏛️', status: 'stable', growth: 8.7, churn: 0.4, value: 1100000 },
];

// ─── Analytics ───────────────────────────────────────────────────────────────
export const weeklyMetrics = [
  { day: 'Mon', sessions: 4200, conversions: 320, revenue: 84000 },
  { day: 'Tue', sessions: 5100, conversions: 410, revenue: 102000 },
  { day: 'Wed', sessions: 4800, conversions: 390, revenue: 97000 },
  { day: 'Thu', sessions: 6200, conversions: 520, revenue: 130000 },
  { day: 'Fri', sessions: 5800, conversions: 480, revenue: 119000 },
  { day: 'Sat', sessions: 3200, conversions: 210, revenue: 52000 },
  { day: 'Sun', sessions: 2900, conversions: 180, revenue: 44000 },
];

export const funnelData = [
  { stage: 'Visitors', count: 125000, pct: 100 },
  { stage: 'Sign-ups', count: 18400, pct: 14.7 },
  { stage: 'Activated', count: 9200, pct: 7.4 },
  { stage: 'Converted', count: 3680, pct: 2.9 },
  { stage: 'Retained', count: 2940, pct: 2.4 },
];

export const channelData = [
  { channel: 'Organic', users: 38200, revenue: 1820000, cac: 12 },
  { channel: 'Paid Search', users: 21000, revenue: 1050000, cac: 48 },
  { channel: 'Social', users: 14800, revenue: 520000, cac: 35 },
  { channel: 'Referral', users: 8200, revenue: 410000, cac: 8 },
  { channel: 'Email', users: 6400, revenue: 320000, cac: 4 },
  { channel: 'Direct', users: 4900, revenue: 245000, cac: 0 },
];

export const retentionCohorts = [
  { cohort: 'Jan', m0: 100, m1: 68, m2: 52, m3: 44, m4: 38, m5: 34 },
  { cohort: 'Feb', m0: 100, m1: 71, m2: 55, m3: 47, m4: 41, m5: 36 },
  { cohort: 'Mar', m0: 100, m1: 65, m2: 50, m3: 42, m4: 36, m5: null },
  { cohort: 'Apr', m0: 100, m1: 74, m2: 58, m3: 49, m4: null, m5: null },
  { cohort: 'May', m0: 100, m1: 69, m2: 53, m3: null, m4: null, m5: null },
  { cohort: 'Jun', m0: 100, m1: 72, m2: null, m3: null, m4: null, m5: null },
];

// ─── Segmentation ─────────────────────────────────────────────────────────────
export const segmentDistribution = [
  { name: 'Power Users', value: 34, color: '#00e5cc' },
  { name: 'Casual', value: 41, color: '#00b8a3' },
  { name: 'At Risk', value: 25, color: '#ff6b6b' },
];

export const segmentMetrics = [
  {
    id: 1, name: 'High-Value APAC', subtitle: 'Enterprise tier, SEA region',
    icon: '🚀', activeUsers: 12402, churnRisk: 'low', avgLtv: 4850, growth: 8.2,
  },
  {
    id: 2, name: 'Dormant Trials', subtitle: 'No activity in 14 days',
    icon: '⚠️', activeUsers: 3120, churnRisk: 'high', avgLtv: 120, growth: -12.5,
  },
  {
    id: 3, name: 'Champions', subtitle: 'Daily logins, 100+ seats',
    icon: '🏆', activeUsers: 842, churnRisk: 'low', avgLtv: 12900, growth: 2.4,
  },
  {
    id: 4, name: 'Lapsed Enterprise', subtitle: 'Last login > 30 days',
    icon: '📉', activeUsers: 1580, churnRisk: 'high', avgLtv: 3200, growth: -8.1,
  },
  {
    id: 5, name: 'New SMB', subtitle: 'Onboarded < 30 days',
    icon: '🌱', activeUsers: 5940, churnRisk: 'medium', avgLtv: 380, growth: 45.2,
  },
];

export const behavioralStats = [
  { label: 'Avg Session Duration', value: '8m 42s', change: +12 },
  { label: 'Feature Adoption Rate', value: '67.3%', change: +4.1 },
  { label: 'Support Ticket Rate', value: '2.1%', change: -0.8 },
  { label: 'NPS Score', value: '72', change: +5 },
];

// ─── Performance ─────────────────────────────────────────────────────────────
export const performanceTimeline = [
  { time: '00:00', cpu: 22, memory: 48, latency: 42 },
  { time: '04:00', cpu: 18, memory: 45, latency: 38 },
  { time: '08:00', cpu: 45, memory: 62, latency: 78 },
  { time: '12:00', cpu: 72, memory: 74, latency: 124 },
  { time: '16:00', cpu: 65, memory: 70, latency: 108 },
  { time: '20:00', cpu: 55, memory: 68, latency: 92 },
  { time: '23:59', cpu: 30, memory: 52, latency: 55 },
];

export const apiMetrics = [
  { endpoint: '/api/analytics/query', calls: 142800, p50: 38, p95: 124, p99: 298, errors: 0.02 },
  { endpoint: '/api/segments/list', calls: 98200, p50: 22, p95: 68, p99: 142, errors: 0.01 },
  { endpoint: '/api/reports/export', calls: 12400, p50: 820, p95: 2400, p99: 4800, errors: 0.08 },
  { endpoint: '/api/ai/suggest', calls: 34600, p50: 480, p95: 1200, p99: 2100, errors: 0.04 },
  { endpoint: '/api/users/cohort', calls: 56800, p50: 65, p95: 180, p99: 420, errors: 0.01 },
];

export const errorRateData = [
  { time: 'Jan', rate: 0.04 }, { time: 'Feb', rate: 0.03 }, { time: 'Mar', rate: 0.06 },
  { time: 'Apr', rate: 0.02 }, { time: 'May', rate: 0.02 }, { time: 'Jun', rate: 0.01 },
  { time: 'Jul', rate: 0.02 },
];

// ─── AI Chat ──────────────────────────────────────────────────────────────────
export const sampleChatMessages = [
  { role: 'assistant', text: "Hello. I'm your Gesix AI assistant. How can I help you analyze your data today?" },
  { role: 'user', text: "Show me the revenue growth for the last quarter by region." },
  { role: 'assistant', text: "Processing... I've updated the dashboard view with the requested regional filters. North America is leading with a 12.5% increase, followed by APAC at 8.2%. Europe showed moderate growth at 5.4%." },
];

export const aiSuggestions = [
  "Show revenue trend by region",
  "Identify churn risk segments",
  "Compare Q3 vs Q4 performance",
  "Predict next quarter revenue",
  "Find top performing channels",
];

// ─── User Profile ────────────────────────────────────────────────────────────
export const userActivity = [
  { day: 'Mon', queries: 12 }, { day: 'Tue', queries: 18 },
  { day: 'Wed', queries: 9 }, { day: 'Thu', queries: 24 },
  { day: 'Fri', queries: 16 }, { day: 'Sat', queries: 4 },
  { day: 'Sun', queries: 2 },
];

export const recentReports = [
  { name: 'Q4 2023 Revenue Summary', date: '2024-01-15', type: 'Revenue', size: '2.4 MB' },
  { name: 'APAC Segment Deep Dive', date: '2024-01-12', type: 'Segmentation', size: '1.8 MB' },
  { name: 'Churn Risk Analysis', date: '2024-01-10', type: 'Analytics', size: '3.1 MB' },
  { name: 'API Performance Report', date: '2024-01-08', type: 'Performance', size: '0.9 MB' },
  { name: 'Enterprise Cohort Study', date: '2024-01-05', type: 'Segmentation', size: '4.2 MB' },
];
