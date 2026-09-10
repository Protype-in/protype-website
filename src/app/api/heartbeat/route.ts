import { NextRequest, NextResponse } from "next/server";
import { heartbeat } from "@/lib/activeUsers";

export const dynamic = "force-dynamic";

/**
 * GET /api/heartbeat?id=<clientId>
 * Called by the main site's useHeartbeat hook every 25 seconds.
 * Registers the client as "live" in the in-memory store.
 */
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") ?? "anon";
  heartbeat(id);
  return NextResponse.json({ ok: true }, { status: 200 });
}
