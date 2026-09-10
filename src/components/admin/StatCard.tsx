interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  subtitle?: string;
  icon: React.ReactNode;
  color: "indigo" | "violet" | "emerald" | "amber" | "rose" | "cyan";
}

const colorMap = {
  emerald: { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)", icon: "#059669", accent: "#10b981" },
  cyan: { bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.25)", icon: "#0891b2", accent: "#06b6d4" },
  indigo: { bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.25)", icon: "#4f46e5", accent: "#6366f1" },
  violet: { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.25)", icon: "#7c3aed", accent: "#8b5cf6" },
  amber: { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)", icon: "#d97706", accent: "#f59e0b" },
  rose: { bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.25)", icon: "#e11d48", accent: "#f43f5e" },
};

export default function StatCard({ title, value, change, subtitle, icon, color }: StatCardProps) {
  const c = colorMap[color] || colorMap.emerald;
  const isPositive = (change ?? 0) >= 0;

  return (
    <div className="stat-card">
      <div className="stat-card-inner">
        <div className="stat-card-header">
          <span className="stat-card-title">{title}</span>
          <div className="stat-icon" style={{ background: c.bg, borderColor: c.border }}>
            <span style={{ color: c.icon }}>{icon}</span>
          </div>
        </div>
        <div className="stat-card-value">{value}</div>
        <div className="stat-card-footer">
          {change !== undefined && (
            <span className={`stat-change ${isPositive ? "stat-change-up" : "stat-change-down"}`}>
              {isPositive ? "↑" : "↓"} {Math.abs(change)}%
            </span>
          )}
          {subtitle && <span className="stat-subtitle">{subtitle}</span>}
        </div>
      </div>

      <style>{`
        .stat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          position: relative;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(15, 23, 42, 0.02);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px #cbd5e1;
        }
        .stat-card-inner {
          padding: 20px 22px;
        }
        .stat-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .stat-card-title {
          color: #64748b;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-card-value {
          color: #0f172a;
          font-size: 30px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 10px;
          letter-spacing: -0.03em;
        }
        .stat-card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .stat-change {
          font-size: 11.5px;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 99px;
        }
        .stat-change-up {
          color: #047857;
          background: #ecfdf5;
          border: 1px solid rgba(16,185,129,0.25);
        }
        .stat-change-down {
          color: #b91c1c;
          background: #fef2f2;
          border: 1px solid rgba(239,68,68,0.25);
        }
        .stat-subtitle {
          color: #94a3b8;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}
