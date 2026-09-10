"use client";

import { useEffect } from "react";

const SESSION_KEY = "__protype_hb_id";
const INTERVAL_MS = 25_000;

/**
 * useHeartbeat — registers the current browser tab as "live"
 * by pinging /api/heartbeat every 25 seconds.
 *
 * The clientId is stored in sessionStorage so it:
 *  - Survives Next.js hot-module-replacement (no ghost duplicates)
 *  - Is cleared when the tab is closed (session ends correctly)
 *  - Is unique per tab (separate tabs are counted separately)
 */
export function useHeartbeat() {
  useEffect(() => {
    // Reuse the existing ID for this tab session, or create one
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem(SESSION_KEY, id);
    }

    const ping = () => {
      fetch(`/api/heartbeat?id=${id}`, { cache: "no-store" }).catch(() => {});
    };

    // Ping immediately and then on a fixed interval
    ping();
    const interval = setInterval(ping, INTERVAL_MS);

    // Re-ping when the user switches back to this tab
    const onVisible = () => {
      if (document.visibilityState === "visible") ping();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);
}

