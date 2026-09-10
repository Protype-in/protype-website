"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import { useHeartbeat } from "@/hooks/useHeartbeat";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // Register this browser tab as "live" for the admin panel counter
  useHeartbeat();

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "https://app.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      session_recording: {
        maskAllInputs: true,
      },
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
