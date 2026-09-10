"use client";

import { useEffect, useState, useCallback } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [prev, setPrev] = useState<number | null>(null);
  const [pulse, setPulse] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchLive = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/live-users", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        const next = data.count ?? 0;
        setPrev((c) => c);
        setCount(next);
        setLastUpdated(new Date());
        setPulse(true);
        setTimeout(() => setPulse(false), 800);
      }
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    fetchLive();
    const interval = setInterval(fetchLive, 15_000);
    return () => clearInterval(interval);
  }, [fetchLive]);

  const trend = count !== null && prev !== null && count !== prev
    ? count > prev ? "up" : "down"
    : null;

  const timeAgo =
    lastUpdated
      ? `${Math.round((Date.now() - lastUpdated.getTime()) / 1000)}s ago`
      : null;

  return (
    <div
      className={`lc-wrap ${pulse ? "lc-pulse" : ""}`}
      title={`Updated ${timeAgo ?? "..."} · Refreshes every 15s`}
    >
      {/* Pulsing live dot */}
      <span className="lc-dot" />

      <div className="lc-body">
        <span className="lc-label">LIVE</span>
        <span className="lc-count">
          {count === null ? (
            <span className="lc-loading">
              <span />
              <span />
              <span />
            </span>
          ) : (
            count
          )}
        </span>
        <span className="lc-sublabel">
          {count === 1 ? "visitor" : "visitors"}
        </span>
      </div>

      {/* Trend arrow when count changes */}
      {trend && (
        <span className={`lc-trend lc-trend-${trend}`}>
          {trend === "up" ? "↑" : "↓"}
        </span>
      )}

      <style>{`
        .lc-wrap {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #ecfdf5;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 99px;
          padding: 7px 16px 7px 12px;
          box-shadow: 0 1px 3px rgba(16, 185, 129, 0.08);
          transition: all 0.25s ease;
          cursor: default;
          user-select: none;
        }
        .lc-pulse {
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12), 0 1px 3px rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.6);
        }
        .lc-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          animation: lc-ping 2s ease infinite;
        }
        @keyframes lc-ping {
          0%   { box-shadow: 0 0 0 0   rgba(16, 185, 129, 0.5); }
          70%  { box-shadow: 0 0 0 9px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0   rgba(16, 185, 129, 0); }
        }
        .lc-body {
          display: flex;
          align-items: baseline;
          gap: 5px;
        }
        .lc-label {
          color: #047857;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }
        .lc-count {
          color: #064e3b;
          font-size: 15px;
          font-weight: 700;
          line-height: 1;
          min-width: 14px;
          display: inline-flex;
          align-items: center;
        }
        .lc-sublabel {
          color: #059669;
          font-size: 11.5px;
          font-weight: 500;
        }
        .lc-loading {
          display: inline-flex;
          gap: 3px;
          align-items: center;
        }
        .lc-loading span {
          width: 4px;
          height: 4px;
          background: #10b981;
          border-radius: 50%;
          animation: lc-bounce 1.2s ease infinite;
        }
        .lc-loading span:nth-child(2) { animation-delay: 0.2s; }
        .lc-loading span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes lc-bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40%           { transform: scale(1);   opacity: 1; }
        }
        .lc-trend {
          font-size: 12px;
          font-weight: 700;
          animation: lc-trend-pop 0.4s ease;
        }
        .lc-trend-up   { color: #059669; }
        .lc-trend-down { color: #e11d48; }
        @keyframes lc-trend-pop {
          0%   { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}
