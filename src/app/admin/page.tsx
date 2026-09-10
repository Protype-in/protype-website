import { redirect } from "next/navigation";
import Link from "next/link";
import { checkAuth, logoutAction } from "./actions";
import {
  getDailyPageViews,
  getOverviewStats,
  getTopPages,
  getCountryBreakdown,
  getDeviceBreakdown,
  getTopReferrers,
  getBrowserBreakdown,
} from "@/lib/posthog";
import StatCard from "@/components/admin/StatCard";
import AreaChart from "@/components/admin/AreaChart";
import TopPages from "@/components/admin/TopPages";
import DeviceBreakdown from "@/components/admin/DeviceBreakdown";
import ReferrerTable from "@/components/admin/ReferrerTable";
import CountryTable from "@/components/admin/CountryTable";
import BrowserBreakdown from "@/components/admin/BrowserBreakdown";
import LiveCounter from "@/components/admin/LiveCounter";
import Icon3D from "@/components/admin/Icon3D";

export const dynamic = "force-dynamic";

interface AdminPageProps {
  searchParams: Promise<{ tab?: string }>;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const authed = await checkAuth();
  if (!authed) redirect("/admin/login");

  const resolvedParams = await searchParams;
  const currentTab = (resolvedParams?.tab || "overview").toLowerCase();

  const [dailyViews, stats, topPages, countries, devices, referrers, browsers] =
    await Promise.all([
      getDailyPageViews(),
      getOverviewStats(),
      getTopPages(),
      getCountryBreakdown(),
      getDeviceBreakdown(),
      getTopReferrers(),
      getBrowserBreakdown(),
    ]);

  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const navItems = [
    { id: "overview", label: "Overview", iconType: "chart", href: "/admin" },
    { id: "visitors", label: "Visitors", iconType: "users", href: "/admin?tab=visitors" },
    { id: "pages", label: "Pages", iconType: "file", href: "/admin?tab=pages" },
    { id: "geography", label: "Geography", iconType: "globe", href: "/admin?tab=geography" },
    { id: "sources", label: "Traffic Sources", iconType: "link", href: "/admin?tab=sources" },
  ];

  return (
    <div className="admin-root">
      {/* Background ambient accents inspired by Protype website */}
      <div className="admin-glow-tl" />
      <div className="admin-glow-br" />

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="url(#admin-pro-lg)" />
            <path d="M12 20L18 14L24 20L30 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 26L18 20L24 26L30 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <defs>
              <linearGradient id="admin-pro-lg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#059669" /><stop offset="1" stopColor="#0d9488" />
              </linearGradient>
            </defs>
          </svg>
          <div className="admin-sidebar-brand-wrap">
            <span className="admin-sidebar-brand">Protype</span>
            <span className="admin-sidebar-tag">CONSOLE</span>
          </div>
        </div>

        <nav className="admin-nav">
          <span className="admin-nav-section">Dashboard Modules</span>
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`admin-nav-item ${isActive ? "admin-nav-item-active" : ""}`}
              >
                <Icon3D type={item.iconType} size={18} />
                <span>{item.label}</span>
                {isActive && <span className="admin-nav-active-pip" />}
              </Link>
            );
          })}
        </nav>

        {/* Protype Home Shortcut */}
        <div className="admin-website-link-box">
          <a href="/" target="_blank" rel="noopener noreferrer" className="admin-website-link">
            <span>Visit Live Site</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>

        <div className="admin-sidebar-footer">
          <form action={logoutAction}>
            <button type="submit" className="admin-logout-btn">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 2H13.5A.5.5 0 0114 2.5v11a.5.5 0 01-.5.5H10M7 11L10 8M10 8L7 5M10 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <div className="admin-header-left">
            <div className="admin-header-top-pill">
              <span className="admin-header-dot" />
              <span>
                {currentTab === "overview" && "Analytics Overview"}
                {currentTab === "visitors" && "Audience & Device Intelligence"}
                {currentTab === "pages" && "Page Performance & Routing"}
                {currentTab === "geography" && "Global Reach & Country Distribution"}
                {currentTab === "sources" && "Referrals & Acquisition Channels"}
              </span>
            </div>
            <h1 className="admin-page-title">
              {currentTab === "overview" && "Executive Analytics Overview"}
              {currentTab === "visitors" && "Visitor Engagement & Demographics"}
              {currentTab === "pages" && "Top Content & Pages Visited"}
              {currentTab === "geography" && "Geographic Distribution & Traffic Origin"}
              {currentTab === "sources" && "Traffic Sources & Acquisition Channels"}
            </h1>
            <p className="admin-page-subtitle">
              Internal console telemetry · Data synced via PostHog · Refreshed {now} IST
            </p>
          </div>
          <div className="admin-header-right">
            <LiveCounter />
            <a
              href="https://app.posthog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="admin-posthog-btn"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3H3.5A.5.5 0 003 3.5v9a.5.5 0 00.5.5H9a.5.5 0 00.5-.5V10M10 2h4v4M14 2L8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>PostHog Cloud</span>
            </a>
          </div>
        </header>

        {/* ── Quick Tab Switcher Pills ──────────────────────────────────────── */}
        <div className="admin-tab-pills">
          {navItems.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`admin-tab-pill ${currentTab === tab.id ? "admin-tab-pill-active" : ""}`}
            >
              <Icon3D type={tab.iconType} size={15} />
              <span>{tab.label}</span>
            </Link>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* TAB 1: OVERVIEW                                                    */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentTab === "overview" && (
          <>
            {/* Stat Cards */}
            <div className="admin-stat-grid">
              <StatCard
                title="Page Views (7d)"
                value={stats.pageViews7d.toLocaleString()}
                change={stats.pageViewChange}
                subtitle="vs prior 7 days"
                color="emerald"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                }
              />
              <StatCard
                title="Page Views (30d)"
                value={stats.pageViews30d.toLocaleString()}
                subtitle="Rolling 30 days"
                color="cyan"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 16l4-4 4 4 4-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <StatCard
                title="Unique Visitors (7d)"
                value={stats.uniqueVisitors7d.toLocaleString()}
                subtitle="Distinct active visitors"
                color="indigo"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                }
              />
              <StatCard
                title="Active Regions"
                value={countries.length}
                subtitle="Countries recorded"
                color="emerald"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                }
              />
              <StatCard
                title="Top Pages"
                value={topPages.length}
                subtitle="Active routes accessed"
                color="amber"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                }
              />
              <StatCard
                title="Referral Sources"
                value={referrers.length}
                subtitle="Incoming traffic domains"
                color="violet"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                }
              />
            </div>

            {/* Area Chart */}
            <div className="admin-card">
              <div className="admin-card-header-line">
                <h2 className="admin-card-title">
                  <Icon3D type="chart" size={22} />
                  Daily Page Views Activity
                </h2>
                <span className="admin-card-badge">Rolling 30-Day View</span>
              </div>
              <AreaChart data={dailyViews} label="Visitor Trajectory" />
            </div>

            {/* Two col: Top Pages + Referrers */}
            <div className="admin-two-col">
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="file" size={22} />
                    Top Pages Visited
                  </h2>
                  <Link href="/admin?tab=pages" className="admin-card-link">
                    View full breakdown →
                  </Link>
                </div>
                <TopPages data={topPages} />
              </div>
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="link" size={22} />
                    Traffic & Referral Sources
                  </h2>
                  <Link href="/admin?tab=sources" className="admin-card-link">
                    View channels →
                  </Link>
                </div>
                <ReferrerTable data={referrers} />
              </div>
            </div>

            {/* Three col: Countries + Devices + Browsers */}
            <div className="admin-three-col">
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="globe" size={22} />
                    Visitor Geography
                  </h2>
                  <Link href="/admin?tab=geography" className="admin-card-link">
                    Explore map →
                  </Link>
                </div>
                <CountryTable data={countries} />
              </div>
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="monitor" size={22} />
                    Device Breakdown
                  </h2>
                  <Link href="/admin?tab=visitors" className="admin-card-link">
                    Audience →
                  </Link>
                </div>
                <DeviceBreakdown data={devices} />
              </div>
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="chrome" size={22} />
                    Web Browsers
                  </h2>
                </div>
                <BrowserBreakdown data={browsers} />
              </div>
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* TAB 2: VISITORS & DEMOGRAPHICS                                     */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentTab === "visitors" && (
          <div className="admin-tab-view">
            <div className="admin-stat-grid">
              <StatCard
                title="7-Day Active Visitors"
                value={stats.uniqueVisitors7d.toLocaleString()}
                subtitle="Unique individuals"
                color="indigo"
                icon={<Icon3D type="users" size={18} />}
              />
              <StatCard
                title="Total Visits (30d)"
                value={stats.pageViews30d.toLocaleString()}
                subtitle="Aggregated page hits"
                color="cyan"
                icon={<Icon3D type="chart" size={18} />}
              />
              <StatCard
                title="Client Platforms"
                value={devices.length}
                subtitle="Distinct device classes"
                color="emerald"
                icon={<Icon3D type="monitor" size={18} />}
              />
            </div>

            <div className="admin-two-col">
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="monitor" size={22} />
                    Device Distribution
                  </h2>
                  <span className="admin-card-badge">Hardware Platform</span>
                </div>
                <p className="admin-tab-description">
                  Proportion of visitors accessing your site via Desktop computers, Mobile smartphones, or Tablets.
                </p>
                <DeviceBreakdown data={devices} />
              </div>

              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="chrome" size={22} />
                    Web Browsers & Rendering Engines
                  </h2>
                  <span className="admin-card-badge">Client Software</span>
                </div>
                <p className="admin-tab-description">
                  Top software platforms used by your visitors to browse Protype.
                </p>
                <BrowserBreakdown data={browsers} />
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-header-line">
                <h2 className="admin-card-title">
                  <Icon3D type="chart" size={22} />
                  Traffic Volume Trend
                </h2>
                <span className="admin-card-badge">30-Day Activity</span>
              </div>
              <AreaChart data={dailyViews} label="Daily Visitor Trajectory" />
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* TAB 3: PAGES PERFORMANCE                                           */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentTab === "pages" && (
          <div className="admin-tab-view">
            <div className="admin-stat-grid">
              <StatCard
                title="Distinct Routes"
                value={topPages.length}
                subtitle="Monitored endpoints"
                color="amber"
                icon={<Icon3D type="file" size={18} />}
              />
              <StatCard
                title="30-Day Total Views"
                value={stats.pageViews30d.toLocaleString()}
                subtitle="All routes combined"
                color="emerald"
                icon={<Icon3D type="chart" size={18} />}
              />
              <StatCard
                title="Top Performer"
                value={topPages[0]?.page || "/"}
                subtitle={`${topPages[0]?.views.toLocaleString() || 0} visits`}
                color="cyan"
                icon={<Icon3D type="file" size={18} />}
              />
            </div>

            <div className="admin-card">
              <div className="admin-card-header-line">
                <h2 className="admin-card-title">
                  <Icon3D type="file" size={22} />
                  Complete Route Breakdown & Traffic Heatmap
                </h2>
                <span className="admin-card-badge">Ranked By Views</span>
              </div>
              <p className="admin-tab-description">
                Tracks specific path visits across your landing page, capabilities, solutions, and sub-pages.
              </p>
              <TopPages data={topPages} />
            </div>

            <div className="admin-card">
              <div className="admin-card-header-line">
                <h2 className="admin-card-title">
                  <Icon3D type="chart" size={22} />
                  Traffic Wave over Time
                </h2>
                <span className="admin-card-badge">Page Load Volume</span>
              </div>
              <AreaChart data={dailyViews} label="Route Consumption Activity" />
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* TAB 4: GEOGRAPHY & GLOBAL REACH                                     */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentTab === "geography" && (
          <div className="admin-tab-view">
            <div className="admin-stat-grid">
              <StatCard
                title="Represented Countries"
                value={countries.length}
                subtitle="Territories reached"
                color="emerald"
                icon={<Icon3D type="globe" size={18} />}
              />
              <StatCard
                title="Top Country"
                value={countries[0]?.country || countries[0]?.code || "Worldwide"}
                subtitle={`${countries[0]?.visitors.toLocaleString() || 0} visitors`}
                color="cyan"
                icon={<Icon3D type="globe" size={18} />}
              />
              <StatCard
                title="Audience Reach"
                value="Global"
                subtitle="Geo-IP Resolution Enabled"
                color="indigo"
                icon={<Icon3D type="mapPin" size={18} />}
              />
            </div>

            <div className="admin-two-col">
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="globe" size={22} />
                    Country Distribution Table
                  </h2>
                  <span className="admin-card-badge">Geo-IP Tracking</span>
                </div>
                <p className="admin-tab-description">
                  Audience traffic mapped by country origin derived automatically from incoming client requests.
                </p>
                <CountryTable data={countries} />
              </div>

              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="link" size={22} />
                    Cross-Channel Referrers
                  </h2>
                  <span className="admin-card-badge">Acquisition</span>
                </div>
                <p className="admin-tab-description">
                  Where in the world your visitors discover the link to your Protype service.
                </p>
                <ReferrerTable data={referrers} />
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* TAB 5: TRAFFIC SOURCES & REFERRALS                                  */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentTab === "sources" && (
          <div className="admin-tab-view">
            <div className="admin-stat-grid">
              <StatCard
                title="Referral Domains"
                value={referrers.length}
                subtitle="Acquisition channels"
                color="violet"
                icon={<Icon3D type="link" size={18} />}
              />
              <StatCard
                title="Top Discovery Channel"
                value={referrers[0]?.referrer || "Direct Traffic"}
                subtitle={`${referrers[0]?.visitors.toLocaleString() || 0} visits`}
                color="indigo"
                icon={<Icon3D type="link" size={18} />}
              />
              <StatCard
                title="Tracked Events"
                value={stats.pageViews30d.toLocaleString()}
                subtitle="Referrer attribution"
                color="emerald"
                icon={<Icon3D type="chart" size={18} />}
              />
            </div>

            <div className="admin-card">
              <div className="admin-card-header-line">
                <h2 className="admin-card-title">
                  <Icon3D type="link" size={22} />
                  Complete Traffic Sources & Acquisition Channels
                </h2>
                <span className="admin-card-badge">Attribution</span>
              </div>
              <p className="admin-tab-description">
                Identifies whether visitors typed your URL directly, arrived from Google searches, LinkedIn campaigns, 𝕏/Twitter, or other external websites.
              </p>
              <ReferrerTable data={referrers} />
            </div>

            <div className="admin-two-col">
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="file" size={22} />
                    Landing Destinations
                  </h2>
                  <span className="admin-card-badge">First Touches</span>
                </div>
                <TopPages data={topPages} />
              </div>
              <div className="admin-card">
                <div className="admin-card-header-line">
                  <h2 className="admin-card-title">
                    <Icon3D type="monitor" size={22} />
                    Hardware Acquisition
                  </h2>
                  <span className="admin-card-badge">Device Type</span>
                </div>
                <DeviceBreakdown data={devices} />
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        * { box-sizing: border-box; }
        .admin-root {
          display: flex;
          min-height: 100vh;
          background: #f8fafc;
          color: #0f172a;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient glows matching Protype aesthetic */
        .admin-glow-tl {
          position: fixed;
          top: -100px;
          right: 15%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.07);
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
        }
        .admin-glow-br {
          position: fixed;
          bottom: -100px;
          left: 10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.05);
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Sidebar ─────────────────────────────── */
        .admin-sidebar {
          width: 240px;
          background: #ffffff;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          position: sticky;
          top: 0;
          height: 100vh;
          flex-shrink: 0;
          z-index: 10;
        }
        .admin-sidebar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          padding: 2px 6px;
        }
        .admin-sidebar-brand-wrap {
          display: flex;
          flex-direction: column;
        }
        .admin-sidebar-brand {
          color: #0f172a;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .admin-sidebar-tag {
          color: #059669;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .admin-nav-section {
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 8px 12px 6px;
        }
        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 14px;
          border-radius: 12px;
          color: #475569;
          font-size: 13.5px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.15s ease;
          position: relative;
        }
        .admin-nav-item:hover {
          background: #f1f5f9;
          color: #0f172a;
          transform: translateX(2px);
        }
        .admin-nav-item-active {
          background: #ecfdf5 !important;
          color: #047857 !important;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.25);
          box-shadow: 0 1px 3px rgba(16, 185, 129, 0.08);
        }
        .admin-nav-active-pip {
          width: 5px;
          height: 18px;
          border-radius: 99px;
          background: #10b981;
          margin-left: auto;
        }
        .admin-website-link-box {
          margin-top: 24px;
          padding: 0 4px;
        }
        .admin-website-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          color: #64748b;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.15s;
        }
        .admin-website-link:hover {
          color: #059669;
          border-color: rgba(16, 185, 129, 0.35);
          background: #ecfdf5;
        }
        .admin-sidebar-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }
        .admin-logout-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 9px 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          color: #64748b;
          font-size: 13px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.15s;
        }
        .admin-logout-btn:hover {
          color: #dc2626;
          border-color: rgba(239, 68, 68, 0.3);
          background: #fef2f2;
        }

        /* ── Main ─────────────────────────────────── */
        .admin-main {
          flex: 1;
          padding: 32px 36px;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-width: 0;
          position: relative;
          z-index: 1;
        }

        /* ── Header ─────────────────────────────────── */
        .admin-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .admin-header-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ecfdf5;
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #065f46;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 99px;
          margin-bottom: 6px;
        }
        .admin-header-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }
        .admin-header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .admin-page-title {
          color: #0f172a;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.025em;
          margin: 0 0 4px;
        }
        .admin-page-subtitle {
          color: #64748b;
          font-size: 13px;
          margin: 0;
        }
        .admin-posthog-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 99px;
          padding: 7px 15px;
          color: #334155;
          font-size: 13px;
          font-weight: 500;
          font-family: inherit;
          text-decoration: none;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          transition: all 0.2s;
        }
        .admin-posthog-btn:hover {
          color: #0f172a;
          border-color: #94a3b8;
          box-shadow: 0 2px 5px rgba(0,0,0,0.06);
        }

        /* ── Tab Switcher Pills ────────────────────── */
        .admin-tab-pills {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding: 4px 0 8px;
        }
        .admin-tab-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 99px;
          color: #64748b;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.15s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }
        .admin-tab-pill:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }
        .admin-tab-pill-active {
          background: #0f172a !important;
          border-color: #0f172a !important;
          color: #ffffff !important;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);
        }

        /* ── Tab View Wrappers ─────────────────────── */
        .admin-tab-view {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .admin-tab-description {
          color: #64748b;
          font-size: 13.5px;
          margin: -8px 0 18px;
          line-height: 1.5;
        }

        /* ── Stat Grid ─────────────────────────────── */
        .admin-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1200px) {
          .admin-stat-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Cards ─────────────────────────────────── */
        .admin-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03), 0 6px 16px rgba(15, 23, 42, 0.02);
        }
        .admin-card-header-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .admin-card-title {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #0f172a;
          font-size: 15px;
          font-weight: 600;
          margin: 0;
        }
        .admin-card-badge {
          color: #64748b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .admin-card-link {
          color: #059669;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s;
        }
        .admin-card-link:hover {
          color: #047857;
          text-decoration: underline;
        }

        /* ── Two / Three col grids ─────────────────── */
        .admin-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .admin-three-col {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .admin-two-col { grid-template-columns: 1fr; }
          .admin-three-col { grid-template-columns: 1fr 1fr; }
          .admin-sidebar { width: 200px; }
        }
        @media (max-width: 768px) {
          .admin-sidebar { display: none; }
          .admin-main { padding: 20px 16px; }
          .admin-three-col { grid-template-columns: 1fr; }
          .admin-stat-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
