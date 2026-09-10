import { NextResponse } from "next/server";
import { checkAuth } from "@/app/admin/actions";
import { getLiveCount } from "@/lib/activeUsers";

export const dynamic = "force-dynamic";

/**
 * GET /api/admin/live-users
 * Returns the number of visitors who pinged /api/heartbeat in the last 90 seconds.
 * Works on localhost — no PostHog API call required.
 */
export async function GET() {
  const authed = await checkAuth();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const count = getLiveCount();
  return NextResponse.json({ count });
}
