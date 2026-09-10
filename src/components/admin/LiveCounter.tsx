"use client";

import { useEffect, useState } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    async function fetchLive() {
      try {
        const res = await fetch("/api/admin/live-users", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setCount(data.count ?? 0);
          setPulse(true);
          setTimeout(() => setPulse(false), 600);
        }
      } catch {
        setCount(0);
      }
    }

    fetchLive();
    const interval = setInterval(fetchLive, 15000); // refresh every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`lc-wrap ${pulse ? "lc-pulse" : ""}`}>
      <span className="lc-dot" />
      <span className="lc-label">Live</span>
      <span className="lc-count">{count === null ? "0" : count}</span>
      <span className="lc-sublabel">active</span>

      <style>{`
        .lc-wrap {
          display: flex;
          align-items: center;
          gap: 7px;
          background: #ecfdf5;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 99px;
          padding: 6px 14px 6px 11px;
          box-shadow: 0 1px 2px rgba(16, 185, 129, 0.08);
          transition: all 0.2s ease;
        }
        .lc-pulse {
          transform: scale(1.02);
          border-color: rgba(16, 185, 129, 0.6);
        }
        .lc-dot {
          width: 7px;
          height: 7px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          animation: lc-ping 1.8s ease infinite;
          flex-shrink: 0;
        }
        @keyframes lc-ping {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .lc-label {
          color: #047857;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .lc-count {
          color: #064e3b;
          font-size: 13.5px;
          font-weight: 700;
        }
        .lc-sublabel {
          color: #059669;
          font-size: 11.5px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
