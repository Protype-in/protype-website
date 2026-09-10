import Icon3D from "./Icon3D";

interface DataPoint {
  date: string;
  views: number;
}

interface AreaChartProps {
  data: DataPoint[];
  label?: string;
}

export default function AreaChart({ data, label = "Page Views" }: AreaChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="area-chart-empty">
        <div className="area-chart-empty-icon">
          <Icon3D type="chart" size={36} />
        </div>
        <p>Awaiting visitor events from your website</p>
        <span>Data updates automatically once visits are tracked</span>
      </div>
    );
  }

  const width = 800;
  const height = 200;
  const paddingX = 40;
  const paddingY = 20;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  const maxVal = Math.max(...data.map((d) => d.views), 1);
  const minVal = 0;

  const xStep = chartWidth / Math.max(data.length - 1, 1);

  const toX = (i: number) => paddingX + i * xStep;
  const toY = (v: number) =>
    paddingY + chartHeight - ((v - minVal) / (maxVal - minVal)) * chartHeight;

  // Build smooth SVG path using cubic bezier
  const linePath = data
    .map((d, i) => {
      const x = toX(i);
      const y = toY(d.views);
      if (i === 0) return `M ${x} ${y}`;
      const prevX = toX(i - 1);
      const prevY = toY(data[i - 1].views);
      const cp1x = prevX + (x - prevX) / 3;
      const cp2x = prevX + (2 * (x - prevX)) / 3;
      return `C ${cp1x} ${prevY}, ${cp2x} ${y}, ${x} ${y}`;
    })
    .join(" ");

  const areaPath =
    linePath +
    ` L ${toX(data.length - 1)} ${paddingY + chartHeight} L ${toX(0)} ${paddingY + chartHeight} Z`;

  // Y-axis gridlines
  const gridLines = 4;
  const yTicks = Array.from({ length: gridLines + 1 }, (_, i) => ({
    value: Math.round((maxVal * i) / gridLines),
    y: toY((maxVal * i) / gridLines),
  }));

  // X labels — show ~6 evenly spaced
  const xLabelStep = Math.max(1, Math.floor(data.length / 6));
  const xLabels = data
    .map((d, i) => ({ date: d.date, x: toX(i), i }))
    .filter((_, i) => i % xLabelStep === 0 || i === data.length - 1);

  const formatDate = (d: string) => {
    const dt = new Date(d);
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="area-chart-wrap">
      <div className="area-chart-header">
        <span className="area-chart-label">{label}</span>
        <span className="area-chart-total">
          {data.reduce((s, d) => s + d.views, 0).toLocaleString()} views total
        </span>
      </div>
      <div className="area-chart-svg-wrap">
        <svg
          viewBox={`0 0 ${width} ${height + 30}`}
          preserveAspectRatio="none"
          style={{ width: "100%", height: "220px", display: "block", overflow: "visible" }}
        >
          <defs>
            <linearGradient id="areaGradLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="lineGradLight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {yTicks.map((t, i) => (
            <g key={i}>
              <line
                x1={paddingX}
                y1={t.y}
                x2={width - paddingX}
                y2={t.y}
                stroke="#f1f5f9"
                strokeWidth="1.2"
              />
              <text
                x={paddingX - 8}
                y={t.y + 4}
                fill="#94a3b8"
                fontSize="11"
                fontWeight="500"
                textAnchor="end"
              >
                {t.value > 999 ? `${(t.value / 1000).toFixed(1)}k` : t.value}
              </text>
            </g>
          ))}

          {/* Area */}
          <path d={areaPath} fill="url(#areaGradLight)" />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#lineGradLight)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dots on data points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={toX(i)}
              cy={toY(d.views)}
              r="3.5"
              fill="#059669"
              stroke="#ffffff"
              strokeWidth="2"
            />
          ))}

          {/* X Labels */}
          {xLabels.map(({ date, x, i }) => (
            <text
              key={i}
              x={x}
              y={height + 20}
              fill="#94a3b8"
              fontSize="11"
              fontWeight="500"
              textAnchor="middle"
            >
              {formatDate(date)}
            </text>
          ))}
        </svg>
      </div>

      <style>{`
        .area-chart-wrap {
          padding: 0;
        }
        .area-chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .area-chart-label {
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
        }
        .area-chart-total {
          color: #059669;
          background: #ecfdf5;
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 3px 10px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
        }
        .area-chart-svg-wrap {
          overflow: hidden;
        }
        .area-chart-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: #64748b;
          font-size: 13.5px;
          gap: 6px;
        }
        .area-chart-empty-icon {
          font-size: 24px;
          margin-bottom: 4px;
        }
        .area-chart-empty p {
          margin: 0;
          font-weight: 600;
          color: #334155;
        }
        .area-chart-empty span {
          color: #94a3b8;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}
