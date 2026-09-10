import Icon3D from "./Icon3D";

interface Browser {
  browser: string;
  count: number;
}

interface BrowserBreakdownProps {
  data: Browser[];
}

const BROWSER_COLORS: Record<string, string> = {
  Chrome: "#059669",
  Firefox: "#f97316",
  Safari: "#0284c7",
  Edge: "#2563eb",
  Opera: "#dc2626",
  "Samsung Internet": "#4f46e5",
  Other: "#64748b",
};

function getBrowserIconType(browser: string) {
  const b = browser.toLowerCase();
  if (b.includes("chrome")) return "chrome";
  if (b.includes("firefox")) return "firefox";
  if (b.includes("safari")) return "safari";
  if (b.includes("edge")) return "edge";
  if (b.includes("opera")) return "opera";
  return "chrome";
}

export default function BrowserBreakdown({ data }: BrowserBreakdownProps) {
  const total = data.reduce((s, d) => s + d.count, 0);
  const maxCount = Math.max(...data.map((d) => d.count), 1);

  if (!data || data.length === 0 || total === 0) {
    return <div className="bb-empty">No browser data yet</div>;
  }

  return (
    <div className="bb-wrap">
      {data.map((item, i) => {
        const color = BROWSER_COLORS[item.browser] || BROWSER_COLORS.Other;
        const iconType = getBrowserIconType(item.browser);
        const pct = ((item.count / total) * 100).toFixed(1);

        return (
          <div key={i} className="bb-row">
            <Icon3D type={iconType} size={18} />
            <span className="bb-name">{item.browser}</span>
            <div className="bb-bar-wrap">
              <div
                className="bb-bar"
                style={{
                  width: `${(item.count / maxCount) * 100}%`,
                  background: color,
                }}
              />
            </div>
            <span className="bb-pct">{pct}%</span>
          </div>
        );
      })}

      <style>{`
        .bb-wrap { display: flex; flex-direction: column; gap: 11px; }
        .bb-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .bb-icon { font-size: 15px; flex-shrink: 0; }
        .bb-name {
          color: #334155;
          font-size: 13px;
          font-weight: 500;
          width: 110px;
          flex-shrink: 0;
        }
        .bb-bar-wrap {
          flex: 1;
          height: 8px;
          background: #f1f5f9;
          border-radius: 99px;
          overflow: hidden;
        }
        .bb-bar {
          height: 100%;
          border-radius: 99px;
          opacity: 0.9;
          transition: width 0.6s ease;
        }
        .bb-pct {
          color: #64748b;
          font-size: 12px;
          font-weight: 600;
          width: 40px;
          text-align: right;
          flex-shrink: 0;
        }
        .bb-empty {
          color: #94a3b8;
          font-size: 13px;
          text-align: center;
          padding: 36px 0;
        }
      `}</style>
    </div>
  );
}
