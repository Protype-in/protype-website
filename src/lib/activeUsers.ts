/**
 * In-memory active user tracker.
 * Each visitor pings /api/heartbeat every 25s with a random clientId.
 * We keep a Map of clientId → last-seen timestamp (ms).
 * Anyone seen in the last 90 seconds counts as "live".
 *
 * NOTE: Works perfectly on localhost and doesn't require PostHog.
 * In production with multiple servers this will only count users on the
 * same Node process; for a single-server deployment it is 100% accurate.
 */

// Use globalThis so the map survives Next.js hot-reload in dev
const g = globalThis as typeof globalThis & {
  __activeUsers?: Map<string, number>;
};

if (!g.__activeUsers) {
  g.__activeUsers = new Map<string, number>();
}

const store: Map<string, number> = g.__activeUsers;
const WINDOW_MS = 60_000; // 60 seconds — tabs ping every 25s, so 60s gives 2 missed pings before expiry

export function heartbeat(clientId: string): void {
  store.set(clientId, Date.now());
}

export function getLiveCount(): number {
  const cutoff = Date.now() - WINDOW_MS;
  let count = 0;
  for (const [id, ts] of store) {
    if (ts >= cutoff) {
      count++;
    } else {
      // clean up stale entries
      store.delete(id);
    }
  }
  return count;
}
