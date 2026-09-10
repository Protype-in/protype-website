import Icon3D from "./Icon3D";

interface Country {
  code: string;
  country: string;
  visitors: number;
}

interface CountryTableProps {
  data: Country[];
}

function getFlag(code: string) {
  if (!code || code.length !== 2) return null;
  const codePoints = code
    .toUpperCase()
    .split("")
    .map((c) => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function CountryTable({ data }: CountryTableProps) {
  const maxVisitors = Math.max(...data.map((d) => d.visitors), 1);

  if (!data || data.length === 0) {
    return <div className="ct-empty">No visitor locations yet</div>;
  }

  return (
    <div className="ct-wrap">
      <div className="ct-header">
        <span className="ct-col-country">Location / Region</span>
        <span className="ct-col-visitors">Visitors</span>
      </div>
      <div className="ct-list">
        {data.slice(0, 8).map((item, i) => {
          const flag = getFlag(item.code);
          return (
            <div key={i} className="ct-row">
              <div className="ct-country-info">
                {flag ? (
                  <span className="ct-flag">{flag}</span>
                ) : (
                  <Icon3D type="globe" size={16} />
                )}
                <span className="ct-name" title={item.country || item.code}>
                  {item.country || item.code}
                </span>
              </div>
            <div className="ct-bar-wrap">
              <div
                className="ct-bar"
                style={{ width: `${(item.visitors / maxVisitors) * 100}%` }}
              />
            </div>
              <span className="ct-count">{item.visitors.toLocaleString()}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .ct-wrap { width: 100%; }
        .ct-header {
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 6px;
        }
        .ct-col-country, .ct-col-visitors {
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .ct-list { display: flex; flex-direction: column; }
        .ct-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 6px;
          border-bottom: 1px solid #f8fafc;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .ct-row:hover { background: #f8fafc; }
        .ct-country-info {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 150px;
          flex-shrink: 0;
        }
        .ct-flag { font-size: 16px; line-height: 1; }
        .ct-name {
          color: #1e293b;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ct-bar-wrap {
          flex: 1;
          height: 6px;
          background: #f1f5f9;
          border-radius: 99px;
          overflow: hidden;
        }
        .ct-bar {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #06b6d4);
          border-radius: 99px;
        }
        .ct-count {
          color: #0f172a;
          font-size: 13px;
          font-weight: 600;
          width: 50px;
          text-align: right;
          flex-shrink: 0;
        }
        .ct-empty {
          color: #94a3b8;
          font-size: 13px;
          text-align: center;
          padding: 36px 0;
        }
      `}</style>
    </div>
  );
}
