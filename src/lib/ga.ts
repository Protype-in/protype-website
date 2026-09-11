import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = process.env.GA_PROPERTY_ID;
const clientEmail = process.env.GA_CLIENT_EMAIL;
const privateKey = process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n");

let analyticsDataClient: BetaAnalyticsDataClient | null = null;

if (propertyId && clientEmail && privateKey) {
  analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });
}

async function runReport(
  dateRanges: any[],
  metrics: any[],
  dimensions: any[] = [],
  orderBys: any[] = [],
  limit = 100
) {
  if (!analyticsDataClient || !propertyId) return null;
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges,
      dimensions,
      metrics,
      orderBys,
      limit,
    });
    return response;
  } catch (error) {
    console.error("GA Data API Error:", error);
    return null;
  }
}

// ─── DAILY PAGE VIEWS (Last 30 days) ──────────────────────────────────────────
export async function getDailyPageViews() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "screenPageViews" }],
    [{ name: "date" }],
    [{ dimension: { dimensionName: "date" }, desc: false }] // Chronological
  );
  if (!res?.rows) return [];
  return res.rows.map((row) => {
    // GA returns date as YYYYMMDD
    const rawDate = row.dimensionValues?.[0]?.value || "";
    const formattedDate = rawDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    return {
      date: formattedDate,
      views: Number(row.metricValues?.[0]?.value || 0),
    };
  });
}

// ─── OVERVIEW STATS ───────────────────────────────────────────────────────────
export async function getOverviewStats() {
  // GA4 provides everything in a few simple queries
  const todayRes = await runReport(
    [{ startDate: "today", endDate: "today" }],
    [{ name: "screenPageViews" }]
  );
  const viewsToday = Number(todayRes?.rows?.[0]?.metricValues?.[0]?.value || 0);

  const window7dRes = await runReport(
    [{ startDate: "7daysAgo", endDate: "today" }],
    [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "sessions" }]
  );
  const views7d = Number(window7dRes?.rows?.[0]?.metricValues?.[0]?.value || 0);
  const uniqueVisitors7d = Number(window7dRes?.rows?.[0]?.metricValues?.[1]?.value || 0);
  const sessions7d = Number(window7dRes?.rows?.[0]?.metricValues?.[2]?.value || 0);

  const window30dRes = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "sessions" }]
  );
  const views30d = Number(window30dRes?.rows?.[0]?.metricValues?.[0]?.value || 0);
  const uniqueVisitors30d = Number(window30dRes?.rows?.[0]?.metricValues?.[1]?.value || 0);
  const sessions30d = Number(window30dRes?.rows?.[0]?.metricValues?.[2]?.value || 0);

  // Previous 7 days for comparison
  const prev7dRes = await runReport(
    [{ startDate: "14daysAgo", endDate: "8daysAgo" }],
    [{ name: "screenPageViews" }, { name: "activeUsers" }]
  );
  const prevViews7d = Number(prev7dRes?.rows?.[0]?.metricValues?.[0]?.value || 0);
  const prevUniqueVisitors7d = Number(prev7dRes?.rows?.[0]?.metricValues?.[1]?.value || 0);

  const pageViewChange = prevViews7d > 0
    ? parseFloat((((views7d - prevViews7d) / prevViews7d) * 100).toFixed(1))
    : 0;

  const uniqueChange = prevUniqueVisitors7d > 0
    ? parseFloat((((uniqueVisitors7d - prevUniqueVisitors7d) / prevUniqueVisitors7d) * 100).toFixed(1))
    : 0;

  const avgPagesPerSession = sessions7d > 0
    ? parseFloat((views7d / sessions7d).toFixed(1))
    : 0;

  return {
    pageViewsToday: viewsToday,
    pageViews7d: views7d,
    pageViews30d: views30d,
    pageViewChange,
    uniqueVisitors7d,
    uniqueVisitors30d,
    uniqueChange,
    sessions7d,
    sessions30d,
    avgPagesPerSession,
  };
}

// ─── TOP PAGES ────────────────────────────────────────────────────────────────
export async function getTopPages() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "screenPageViews" }],
    [{ name: "pagePath" }],
    [{ metric: { metricName: "screenPageViews" }, desc: true }],
    15
  );
  if (!res?.rows) return [];
  return res.rows.map((row) => ({
    page: row.dimensionValues?.[0]?.value || "/",
    views: Number(row.metricValues?.[0]?.value || 0),
  }));
}

// ─── COUNTRY BREAKDOWN ────────────────────────────────────────────────────────
export async function getCountryBreakdown() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "activeUsers" }],
    [{ name: "country" }, { name: "countryId" }],
    [{ metric: { metricName: "activeUsers" }, desc: true }],
    20
  );
  if (!res?.rows) return [];
  return res.rows.map((row) => ({
    country: row.dimensionValues?.[0]?.value || "Unknown",
    code: row.dimensionValues?.[1]?.value || "",
    visitors: Number(row.metricValues?.[0]?.value || 0),
  }));
}

// ─── CITY BREAKDOWN ───────────────────────────────────────────────────────────
export async function getCityBreakdown() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "activeUsers" }],
    [{ name: "city" }],
    [{ metric: { metricName: "activeUsers" }, desc: true }],
    10
  );
  if (!res?.rows) return [];
  return res.rows.map((row) => ({
    city: row.dimensionValues?.[0]?.value || "Unknown",
    visitors: Number(row.metricValues?.[0]?.value || 0),
  }));
}

// ─── DEVICE BREAKDOWN ─────────────────────────────────────────────────────────
export async function getDeviceBreakdown() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "activeUsers" }],
    [{ name: "deviceCategory" }],
    [{ metric: { metricName: "activeUsers" }, desc: true }]
  );
  if (!res?.rows) return [];
  
  const total = res.rows.reduce((acc, row) => acc + Number(row.metricValues?.[0]?.value || 0), 0);
  
  return res.rows.map((row) => {
    const count = Number(row.metricValues?.[0]?.value || 0);
    return {
      device: row.dimensionValues?.[0]?.value || "Unknown",
      count,
      pct: total > 0 ? Math.round((count / total) * 100) : 0,
    };
  });
}

// ─── OS BREAKDOWN ─────────────────────────────────────────────────────────────
export async function getOSBreakdown() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "activeUsers" }],
    [{ name: "operatingSystem" }],
    [{ metric: { metricName: "activeUsers" }, desc: true }],
    8
  );
  if (!res?.rows) return [];
  return res.rows.map((row) => ({
    os: row.dimensionValues?.[0]?.value || "Unknown",
    count: Number(row.metricValues?.[0]?.value || 0),
  }));
}

// ─── REFERRER BREAKDOWN ───────────────────────────────────────────────────────
export async function getTopReferrers() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "activeUsers" }],
    [{ name: "sessionSource" }],
    [{ metric: { metricName: "activeUsers" }, desc: true }],
    15
  );
  if (!res?.rows) return [];
  
  const total = res.rows.reduce((acc, row) => acc + Number(row.metricValues?.[0]?.value || 0), 0);
  
  return res.rows.map((row) => {
    let source = row.dimensionValues?.[0]?.value || "Direct / None";
    if (source === "(direct)") source = "Direct / None";
    const visitors = Number(row.metricValues?.[0]?.value || 0);
    return {
      referrer: source,
      visitors,
      pct: total > 0 ? Math.round((visitors / total) * 100) : 0,
    };
  });
}

// ─── UTM SOURCE BREAKDOWN ─────────────────────────────────────────────────────
export async function getUTMSources() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "activeUsers" }],
    [{ name: "sessionCampaignName" }],
    [{ metric: { metricName: "activeUsers" }, desc: true }],
    10
  );
  if (!res?.rows) return [];
  return res.rows.map((row) => {
    let source = row.dimensionValues?.[0]?.value || "organic";
    if (source === "(direct)") source = "organic";
    return {
      source,
      visitors: Number(row.metricValues?.[0]?.value || 0),
    };
  }).filter(r => r.source !== "(not set)" && r.source !== "organic");
}

// ─── BROWSER BREAKDOWN ────────────────────────────────────────────────────────
export async function getBrowserBreakdown() {
  const res = await runReport(
    [{ startDate: "30daysAgo", endDate: "today" }],
    [{ name: "activeUsers" }],
    [{ name: "browser" }],
    [{ metric: { metricName: "activeUsers" }, desc: true }],
    8
  );
  if (!res?.rows) return [];
  
  const total = res.rows.reduce((acc, row) => acc + Number(row.metricValues?.[0]?.value || 0), 0);
  
  return res.rows.map((row) => {
    const count = Number(row.metricValues?.[0]?.value || 0);
    return {
      browser: row.dimensionValues?.[0]?.value || "Other",
      count,
      pct: total > 0 ? Math.round((count / total) * 100) : 0,
    };
  });
}
