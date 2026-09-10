import Icon3D from "./Icon3D";

interface Referrer {
  referrer: string;
  visitors: number;
}

interface ReferrerTableProps {
  data: Referrer[];
}

function getFaviconUrl(domain: string) {
  if (!domain || domain === "Direct" || domain === "" || domain === "direct") {
    return null;
  }
  try {
    const host = domain.startsWith("http") ? new URL(domain).hostname : domain;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=16`;
  } catch {
    return null;
  }
}

function getSourceIconType(referrer: string) {
  const lower = referrer.toLowerCase();
  if (!referrer || lower === "direct" || lower === "") return "link";
  if (lower.includes("google")) return "google";
  if (lower.includes("twitter") || lower.includes("t.co") || lower.includes("x.com")) return "twitter";
  if (lower.includes("linkedin")) return "linkedin";
  if (lower.includes("facebook") || lower.includes("fb")) return "facebook";
  if (lower.includes("github")) return "github";
  if (lower.includes("reddit")) return "reddit";
  return "link";
}

export default function ReferrerTable({ data }: ReferrerTableProps) {
  const maxVisitors = Math.max(...data.map((d) => d.visitors), 1);

  if (!data || data.length === 0) {
    return <div className="rt-empty">No referrer sources recorded yet</div>;
  }

  return (
    <div className="rt-wrap">
      <div className="rt-header">
        <span className="rt-col-source">Origin / Referrer</span>
        <span className="rt-col-visitors">Visitors</span>
      </div>
      <div className="rt-list">
        {data.map((item, i) => {
          const label =
            !item.referrer || item.referrer === "direct"
              ? "Direct / Direct URL"
              : item.referrer;
          const favicon = getFaviconUrl(item.referrer);
          const iconType = getSourceIconType(item.referrer);

          return (
            <div key={i} className="rt-row">
              <div className="rt-source">
                {favicon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={favicon} alt="" width={14} height={14} className="rt-favicon" />
                ) : (
                  <Icon3D type={iconType} size={15} />
                )}
                <span className="rt-label" title={label}>{label}</span>
              </div>
              <div className="rt-bar-wrap">
                <div
                  className="rt-bar"
                  style={{ width: `${(item.visitors / maxVisitors) * 100}%` }}
                />
              </div>
              <span className="rt-count">{item.visitors.toLocaleString()}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .rt-wrap { width: 100%; }
        .rt-header {
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 6px;
        }
        .rt-col-source, .rt-col-visitors {
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .rt-list { display: flex; flex-direction: column; }
        .rt-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 6px;
          border-bottom: 1px solid #f8fafc;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .rt-row:hover { background: #f8fafc; }
        .rt-source {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 170px;
          flex-shrink: 0;
        }
        .rt-favicon { border-radius: 3px; }
        .rt-icon { font-size: 13px; }
        .rt-label {
          color: #1e293b;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rt-bar-wrap {
          flex: 1;
          height: 6px;
          background: #f1f5f9;
          border-radius: 99px;
          overflow: hidden;
        }
        .rt-bar {
          height: 100%;
          background: linear-gradient(90deg, #0284c7, #06b6d4);
          border-radius: 99px;
        }
        .rt-count {
          color: #0f172a;
          font-size: 13px;
          font-weight: 600;
          width: 50px;
          text-align: right;
          flex-shrink: 0;
        }
        .rt-empty {
          color: #94a3b8;
          font-size: 13px;
          text-align: center;
          padding: 36px 0;
        }
      `}</style>
    </div>
  );
}
