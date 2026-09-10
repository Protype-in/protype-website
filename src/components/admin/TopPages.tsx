interface TopPage {
  page: string;
  views: number;
}

interface TopPagesProps {
  data: TopPage[];
}

export default function TopPages({ data }: TopPagesProps) {
  const maxViews = Math.max(...data.map((d) => d.views), 1);

  if (!data || data.length === 0) {
    return (
      <div className="tp-empty">
        <span>No page visits recorded yet</span>
      </div>
    );
  }

  return (
    <div className="tp-wrap">
      <div className="tp-header">
        <span className="tp-col-page">Route / Path</span>
        <span className="tp-col-views">Views</span>
      </div>
      <div className="tp-list">
        {data.map((item, i) => (
          <div key={i} className="tp-row">
            <div className="tp-page-info">
              <span className="tp-rank">{i + 1}</span>
              <span className="tp-page-path" title={item.page || "/"}>
                {item.page || "/"}
              </span>
            </div>
            <div className="tp-bar-wrap">
              <div
                className="tp-bar"
                style={{ width: `${(item.views / maxViews) * 100}%` }}
              />
            </div>
            <span className="tp-views-count">
              {item.views.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .tp-wrap { width: 100%; }
        .tp-header {
          display: flex;
          justify-content: space-between;
          padding: 0 0 10px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 6px;
        }
        .tp-col-page, .tp-col-views {
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .tp-list { display: flex; flex-direction: column; }
        .tp-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 6px;
          border-bottom: 1px solid #f8fafc;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .tp-row:hover { background: #f8fafc; }
        .tp-page-info {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 170px;
          flex-shrink: 0;
        }
        .tp-rank {
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
          width: 18px;
          text-align: center;
          background: #f1f5f9;
          border-radius: 4px;
          padding: 1px 0;
        }
        .tp-page-path {
          color: #1e293b;
          font-size: 13px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tp-bar-wrap {
          flex: 1;
          height: 6px;
          background: #f1f5f9;
          border-radius: 99px;
          overflow: hidden;
        }
        .tp-bar {
          height: 100%;
          background: linear-gradient(90deg, #059669, #0d9488);
          border-radius: 99px;
          transition: width 0.6s ease;
        }
        .tp-views-count {
          color: #0f172a;
          font-size: 13px;
          font-weight: 600;
          width: 50px;
          text-align: right;
          flex-shrink: 0;
        }
        .tp-empty {
          color: #94a3b8;
          font-size: 13px;
          text-align: center;
          padding: 36px 0;
        }
      `}</style>
    </div>
  );
}
