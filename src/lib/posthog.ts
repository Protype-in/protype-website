const POSTHOG_HOST = "https://app.posthog.com";
const PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
const PERSONAL_API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;

const headers = {
  Authorization: `Bearer ${PERSONAL_API_KEY}`,
  "Content-Type": "application/json",
};

// Generic trend query
async function queryTrend(events: object[], dateFrom: string, dateTo?: string) {
  const res = await fetch(
    `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        events,
        date_from: dateFrom,
        date_to: dateTo ?? "today",
        display: "ActionsLineGraph",
        interval: "day",
      }),
      next: { revalidate: 300 }, // Cache 5 minutes
    }
  );
  if (!res.ok) return null;
  return res.json();
}

// Generic funnel / actors query
async function queryActors(eventName: string, dateFrom: string) {
  const res = await fetch(
    `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        events: [{ id: eventName, type: "events" }],
        date_from: dateFrom,
        breakdown: "$current_url",
        breakdown_type: "event",
        display: "ActionsTable",
      }),
      next: { revalidate: 300 },
    }
  );
  if (!res.ok) return null;
  return res.json();
}

// ─── DAILY PAGE VIEWS (Last 30 days) ──────────────────────────────────────────
export async function getDailyPageViews() {
  try {
    const data = await queryTrend(
      [{ id: "$pageview", type: "events" }],
      "-30d"
    );
    if (!data?.result?.[0]) return [];
    const result = data.result[0];
    return (result.data as number[]).map((count: number, i: number) => ({
      date: result.labels[i],
      views: count,
    }));
  } catch {
    return [];
  }
}

// ─── TOTAL PAGE VIEWS & UNIQUE SESSIONS (last 7d and 30d) ────────────────────
export async function getOverviewStats() {
  try {
    const [views7d, views30d, sessions7d] = await Promise.all([
      queryTrend([{ id: "$pageview", type: "events" }], "-7d"),
      queryTrend([{ id: "$pageview", type: "events" }], "-30d"),
      queryTrend([{ id: "$pageview", type: "events", math: "dau" }], "-7d"),
    ]);

    const sum = (arr: number[]) =>
      arr?.reduce((a: number, b: number) => a + b, 0) ?? 0;

    const views7dTotal = sum(views7d?.result?.[0]?.data ?? []);
    const views30dTotal = sum(views30d?.result?.[0]?.data ?? []);
    const prev7d = views30d?.result?.[0]?.data?.slice(0, 7) ?? [];
    const curr7d = views30d?.result?.[0]?.data?.slice(-7) ?? [];
    const pageViewChange =
      prev7d.length && sum(prev7d) > 0
        ? (((sum(curr7d) - sum(prev7d)) / sum(prev7d)) * 100).toFixed(1)
        : "0";

    const sessions7dTotal = sum(sessions7d?.result?.[0]?.data ?? []);

    return {
      pageViews7d: views7dTotal,
      pageViews30d: views30dTotal,
      uniqueVisitors7d: sessions7dTotal,
      pageViewChange: parseFloat(pageViewChange),
    };
  } catch {
    return {
      pageViews7d: 0,
      pageViews30d: 0,
      uniqueVisitors7d: 0,
      pageViewChange: 0,
    };
  }
}

// ─── TOP PAGES ────────────────────────────────────────────────────────────────
export async function getTopPages() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$pathname",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const results = data?.result ?? [];
    return results
      .slice(0, 10)
      .map((r: { breakdown_value: string; aggregated_value: number }) => ({
        page: r.breakdown_value || "/",
        views: r.aggregated_value || 0,
      }))
      .sort(
        (a: { views: number }, b: { views: number }) => b.views - a.views
      );
  } catch {
    return [];
  }
}

// ─── COUNTRY BREAKDOWN ────────────────────────────────────────────────────────
export async function getCountryBreakdown() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$geoip_country_code",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const results = data?.result ?? [];
    return results
      .slice(0, 20)
      .map(
        (r: {
          breakdown_value: string;
          label: string;
          aggregated_value: number;
        }) => ({
          code: r.breakdown_value,
          country: r.label || r.breakdown_value,
          visitors: r.aggregated_value || 0,
        })
      )
      .sort(
        (a: { visitors: number }, b: { visitors: number }) =>
          b.visitors - a.visitors
      );
  } catch {
    return [];
  }
}

// ─── DEVICE BREAKDOWN ─────────────────────────────────────────────────────────
export async function getDeviceBreakdown() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$device_type",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const results = data?.result ?? [];
    return results.map(
      (r: { breakdown_value: string; aggregated_value: number }) => ({
        device: r.breakdown_value || "Unknown",
        count: r.aggregated_value || 0,
      })
    );
  } catch {
    return [];
  }
}

// ─── REFERRER BREAKDOWN ───────────────────────────────────────────────────────
export async function getTopReferrers() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$referring_domain",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const results = data?.result ?? [];
    return results
      .slice(0, 10)
      .map(
        (r: { breakdown_value: string; aggregated_value: number }) => ({
          referrer: r.breakdown_value || "Direct",
          visitors: r.aggregated_value || 0,
        })
      )
      .sort(
        (a: { visitors: number }, b: { visitors: number }) =>
          b.visitors - a.visitors
      );
  } catch {
    return [];
  }
}

// ─── BROWSER BREAKDOWN ────────────────────────────────────────────────────────
export async function getBrowserBreakdown() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$browser",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const results = data?.result ?? [];
    return results.slice(0, 6).map(
      (r: { breakdown_value: string; aggregated_value: number }) => ({
        browser: r.breakdown_value || "Other",
        count: r.aggregated_value || 0,
      })
    );
  } catch {
    return [];
  }
}

// ─── LIVE ACTIVE USERS (last 5 min) ──────────────────────────────────────────
export async function getLiveUsers() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-1d",
          display: "ActionsLineGraph",
        }),
        cache: "no-store",
      }
    );
    if (!res.ok) return 0;
    const data = await res.json();
    const arr: number[] = data?.result?.[0]?.data ?? [];
    return arr[arr.length - 1] ?? 0;
  } catch {
    return 0;
  }
}
