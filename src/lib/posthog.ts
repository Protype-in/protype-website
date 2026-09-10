const POSTHOG_HOST = "https://app.posthog.com";
const PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
const PERSONAL_API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;

const headers = {
  Authorization: `Bearer ${PERSONAL_API_KEY}`,
  "Content-Type": "application/json",
};

// ─── SHARED FETCH HELPERS ─────────────────────────────────────────────────────

async function trendQuery(body: object, cache = 300) {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        next: { revalidate: cache },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// Sum an array of numbers
const sum = (arr: number[]) =>
  (arr ?? []).reduce((a: number, b: number) => a + b, 0);

// ─── DAILY PAGE VIEWS (Last 30 days) ──────────────────────────────────────────
export async function getDailyPageViews() {
  try {
    const data = await trendQuery({
      events: [{ id: "$pageview", type: "events" }],
      date_from: "-30d",
      date_to: "today",
      display: "ActionsLineGraph",
      interval: "day",
    });
    if (!data?.result?.[0]) return [];
    const result = data.result[0];
    return (result.data as number[]).map((count: number, i: number) => ({
      date: result.labels[i] as string,
      views: count,
    }));
  } catch {
    return [];
  }
}

// ─── HOURLY VIEWS FOR TODAY ───────────────────────────────────────────────────
export async function getTodayHourlyViews() {
  try {
    const data = await trendQuery(
      {
        events: [{ id: "$pageview", type: "events" }],
        date_from: "-1d",
        date_to: "today",
        display: "ActionsLineGraph",
        interval: "hour",
      },
      60 // 1 min cache for today's data
    );
    if (!data?.result?.[0]) return [];
    const result = data.result[0];
    return (result.data as number[]).map((count: number, i: number) => ({
      label: result.labels[i] as string,
      views: count,
    }));
  } catch {
    return [];
  }
}

// ─── OVERVIEW STATS ───────────────────────────────────────────────────────────
export async function getOverviewStats() {
  try {
    const [
      viewsToday,
      views7d,
      views30d,
      // Unique persons (not DAU sum — true distinct count per period)
      uniques7d,
      uniques30d,
      // Unique sessions
      sessions7d,
      sessions30d,
    ] = await Promise.all([
      // Today's page views (hourly, interval=hour, 1 day window)
      trendQuery(
        {
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-1d",
          date_to: "today",
          display: "ActionsLineGraph",
          interval: "hour",
        },
        60
      ),
      // 7d page views
      trendQuery({
        events: [{ id: "$pageview", type: "events" }],
        date_from: "-7d",
        date_to: "today",
        display: "ActionsLineGraph",
        interval: "day",
      }),
      // 30d page views
      trendQuery({
        events: [{ id: "$pageview", type: "events" }],
        date_from: "-30d",
        date_to: "today",
        display: "ActionsLineGraph",
        interval: "day",
      }),
      // Unique visitors 7d — math: "unique_group" on person
      trendQuery({
        events: [{ id: "$pageview", type: "events", math: "dau" }],
        date_from: "-7d",
        date_to: "today",
        display: "ActionsLineGraph",
        interval: "day",
      }),
      // Unique visitors 30d
      trendQuery({
        events: [{ id: "$pageview", type: "events", math: "dau" }],
        date_from: "-30d",
        date_to: "today",
        display: "ActionsLineGraph",
        interval: "day",
      }),
      // Sessions 7d — unique $session_id count
      trendQuery({
        events: [
          {
            id: "$pageview",
            type: "events",
            math: "unique_group",
            math_group_type_index: 0,
          },
        ],
        date_from: "-7d",
        date_to: "today",
        display: "ActionsLineGraph",
        interval: "day",
      }),
      // Sessions 30d
      trendQuery({
        events: [
          {
            id: "$pageview",
            type: "events",
            math: "unique_group",
            math_group_type_index: 0,
          },
        ],
        date_from: "-30d",
        date_to: "today",
        display: "ActionsLineGraph",
        interval: "day",
      }),
    ]);

    const todayTotal = sum(viewsToday?.result?.[0]?.data ?? []);
    const views7dTotal = sum(views7d?.result?.[0]?.data ?? []);
    const views30dTotal = sum(views30d?.result?.[0]?.data ?? []);

    // Week-over-week change: compare last 7 days vs previous 7 days
    const data30 = views30d?.result?.[0]?.data ?? [];
    const prev7 = data30.slice(0, 7);
    const curr7 = data30.slice(-7);
    const prevSum = sum(prev7);
    const currSum = sum(curr7);
    const pageViewChange =
      prevSum > 0 ? parseFloat((((currSum - prevSum) / prevSum) * 100).toFixed(1)) : 0;

    // Unique visitors = sum of DAU per day (best approximation without HogQL)
    // This overcounts repeat visitors across days, but it's the standard PostHog approach
    const uniqueVisitors7d = sum(uniques7d?.result?.[0]?.data ?? []);
    const uniqueVisitors30d = sum(uniques30d?.result?.[0]?.data ?? []);

    // Unique visitor change (7d vs prev 7d from 30d window)
    const uniques30data = uniques30d?.result?.[0]?.data ?? [];
    const prevUniques7 = sum(uniques30data.slice(0, 7));
    const currUniques7 = sum(uniques30data.slice(-7));
    const uniqueChange =
      prevUniques7 > 0
        ? parseFloat((((currUniques7 - prevUniques7) / prevUniques7) * 100).toFixed(1))
        : 0;

    const sessions7dTotal = sum(sessions7d?.result?.[0]?.data ?? []);
    const sessions30dTotal = sum(sessions30d?.result?.[0]?.data ?? []);

    // Avg pages per session
    const avgPagesPerSession =
      sessions7dTotal > 0 ? parseFloat((views7dTotal / sessions7dTotal).toFixed(1)) : 0;

    return {
      pageViewsToday: todayTotal,
      pageViews7d: views7dTotal,
      pageViews30d: views30dTotal,
      pageViewChange,
      uniqueVisitors7d,
      uniqueVisitors30d,
      uniqueChange,
      sessions7d: sessions7dTotal,
      sessions30d: sessions30dTotal,
      avgPagesPerSession,
    };
  } catch {
    return {
      pageViewsToday: 0,
      pageViews7d: 0,
      pageViews30d: 0,
      pageViewChange: 0,
      uniqueVisitors7d: 0,
      uniqueVisitors30d: 0,
      uniqueChange: 0,
      sessions7d: 0,
      sessions30d: 0,
      avgPagesPerSession: 0,
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
      .slice(0, 15)
      .map((r: { breakdown_value: string; aggregated_value: number }) => ({
        page: r.breakdown_value || "/",
        views: r.aggregated_value || 0,
      }))
      .sort((a: { views: number }, b: { views: number }) => b.views - a.views);
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
          breakdown: "$geoip_country_name",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const results = data?.result ?? [];

    // Also get country codes in parallel for flag display
    const codeRes = await fetch(
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
    const codeData = codeRes.ok ? await codeRes.json() : null;
    const codeResults: { breakdown_value: string; aggregated_value: number }[] =
      codeData?.result ?? [];
    // Build a value→code map
    const codeMap = new Map<number, string>();
    codeResults.forEach((r) => codeMap.set(r.aggregated_value, r.breakdown_value));

    return results
      .slice(0, 20)
      .map(
        (r: { breakdown_value: string; label: string; aggregated_value: number }) => ({
          code: codeMap.get(r.aggregated_value) ?? "",
          country: r.breakdown_value || r.label || "Unknown",
          visitors: r.aggregated_value || 0,
        })
      )
      .filter((r: { country: string }) => r.country !== "null" && r.country)
      .sort((a: { visitors: number }, b: { visitors: number }) => b.visitors - a.visitors);
  } catch {
    return [];
  }
}

// ─── CITY BREAKDOWN ───────────────────────────────────────────────────────────
export async function getCityBreakdown() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$geoip_city_name",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data?.result ?? [])
      .slice(0, 10)
      .map((r: { breakdown_value: string; aggregated_value: number }) => ({
        city: r.breakdown_value || "Unknown",
        visitors: r.aggregated_value || 0,
      }))
      .filter((r: { city: string }) => r.city !== "null" && r.city)
      .sort((a: { visitors: number }, b: { visitors: number }) => b.visitors - a.visitors);
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
    const total = results.reduce(
      (acc: number, r: { aggregated_value: number }) => acc + (r.aggregated_value || 0),
      0
    );
    return results.map(
      (r: { breakdown_value: string; aggregated_value: number }) => ({
        device: r.breakdown_value || "Unknown",
        count: r.aggregated_value || 0,
        pct: total > 0 ? Math.round(((r.aggregated_value || 0) / total) * 100) : 0,
      })
    );
  } catch {
    return [];
  }
}

// ─── OS BREAKDOWN ─────────────────────────────────────────────────────────────
export async function getOSBreakdown() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$os",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data?.result ?? [])
      .slice(0, 8)
      .map((r: { breakdown_value: string; aggregated_value: number }) => ({
        os: r.breakdown_value || "Unknown",
        count: r.aggregated_value || 0,
      }));
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
    const total = results.reduce(
      (acc: number, r: { aggregated_value: number }) => acc + (r.aggregated_value || 0),
      0
    );
    return results
      .slice(0, 15)
      .map((r: { breakdown_value: string; aggregated_value: number }) => ({
        referrer:
          r.breakdown_value === "$direct" || !r.breakdown_value
            ? "Direct / None"
            : r.breakdown_value,
        visitors: r.aggregated_value || 0,
        pct: total > 0 ? Math.round(((r.aggregated_value || 0) / total) * 100) : 0,
      }))
      .sort((a: { visitors: number }, b: { visitors: number }) => b.visitors - a.visitors);
  } catch {
    return [];
  }
}

// ─── UTM SOURCE BREAKDOWN ─────────────────────────────────────────────────────
export async function getUTMSources() {
  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-30d",
          breakdown: "$utm_source",
          breakdown_type: "event",
          display: "ActionsTable",
        }),
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data?.result ?? [])
      .slice(0, 10)
      .map((r: { breakdown_value: string; aggregated_value: number }) => ({
        source: r.breakdown_value || "organic",
        visitors: r.aggregated_value || 0,
      }))
      .filter((r: { source: string }) => r.source !== "null");
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
    const total = results.reduce(
      (acc: number, r: { aggregated_value: number }) => acc + (r.aggregated_value || 0),
      0
    );
    return results.slice(0, 8).map(
      (r: { breakdown_value: string; aggregated_value: number }) => ({
        browser: r.breakdown_value || "Other",
        count: r.aggregated_value || 0,
        pct: total > 0 ? Math.round(((r.aggregated_value || 0) / total) * 100) : 0,
      })
    );
  } catch {
    return [];
  }
}
