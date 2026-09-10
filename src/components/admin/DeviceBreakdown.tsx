import Icon3D from "./Icon3D";

interface DeviceData {
  device: string;
  count: number;
}

interface DeviceBreakdownProps {
  data: DeviceData[];
}

const DEVICE_COLORS: Record<string, string> = {
  Desktop: "#059669",
  Mobile: "#0891b2",
  Tablet: "#6366f1",
  Unknown: "#94a3b8",
};

function getDeviceIcon(device: string) {
  const d = device.toLowerCase();
  if (d.includes("desktop") || d.includes("mac") || d.includes("windows")) return "monitor";
  if (d.includes("mobile") || d.includes("phone")) return "smartphone";
  if (d.includes("tablet") || d.includes("ipad")) return "tablet";
  return "monitor";
}

export default function DeviceBreakdown({ data }: DeviceBreakdownProps) {
  const total = data.reduce((s, d) => s + d.count, 0);

  if (!data || data.length === 0 || total === 0) {
    return <div className="db-empty">No device data yet</div>;
  }

  // SVG Donut chart
  const cx = 80;
  const cy = 80;
  const r = 60;
  const innerR = 38;
  const circumference = 2 * Math.PI * r;

  let offset = 0;
  const segments = data.map((d, i) => {
    const pct = d.count / total;
    const len = pct * circumference;
    const seg = { ...d, pct, len, offset, color: Object.values(DEVICE_COLORS)[i] || "#94a3b8" };
    offset += len;
    return seg;
  });

  return (
    <div className="db-wrap">
      <div className="db-chart-area">
        <svg width="160" height="160" viewBox="0 0 160 160">
          {/* Background ring */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" strokeWidth="22" />
          {/* Segments */}
          {segments.map((s, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="22"
              strokeDasharray={`${s.len} ${circumference - s.len}`}
              strokeDashoffset={-s.offset}
              strokeLinecap="butt"
              transform={`rotate(-90 ${cx} ${cy})`}
            />
          ))}
          {/* Center text */}
          <text x={cx} y={cy - 6} textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="700">
            {total.toLocaleString()}
          </text>
          <text x={cx} y={cy + 13} textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" letterSpacing="0.05em">
            DEVICES
          </text>
        </svg>
      </div>

      <div className="db-legend">
        {segments.map((s, i) => (
          <div key={i} className="db-legend-row">
            <span className="db-legend-dot" style={{ background: s.color }} />
            <Icon3D type={getDeviceIcon(s.device)} size={16} />
            <span className="db-legend-name">{s.device}</span>
            <span className="db-legend-pct" style={{ color: s.color }}>
              {(s.pct * 100).toFixed(1)}%
            </span>
            <span className="db-legend-count">{s.count.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <style>{`
        .db-wrap {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .db-chart-area { flex-shrink: 0; }
        .db-legend {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .db-legend-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .db-legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .db-legend-icon { font-size: 13px; }
        .db-legend-name {
          flex: 1;
          color: #334155;
          font-size: 13px;
          font-weight: 500;
        }
        .db-legend-pct {
          font-size: 12.5px;
          font-weight: 700;
          width: 45px;
          text-align: right;
        }
        .db-legend-count {
          color: #94a3b8;
          font-size: 12px;
          width: 35px;
          text-align: right;
        }
        .db-empty {
          color: #94a3b8;
          font-size: 13px;
          text-align: center;
          padding: 36px 0;
        }
      `}</style>
    </div>
  );
}
