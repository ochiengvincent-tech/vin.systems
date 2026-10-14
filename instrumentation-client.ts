import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (
  !projectToken ||
  !host ||
  projectToken.startsWith("your_") ||
  host.includes("your-posthog-region")
) {
  throw new Error(
    "PostHog analytics requires a real project token and regional host. Configure NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN and NEXT_PUBLIC_POSTHOG_HOST in .env.local and the deployment environment.",
  );
}

let parsedHost: URL;
try {
  parsedHost = new URL(host);
} catch {
  throw new Error("NEXT_PUBLIC_POSTHOG_HOST must be a valid URL.");
}

if (process.env.NODE_ENV === "production" && parsedHost.protocol !== "https:") {
  throw new Error("PostHog production host must use HTTPS.");
}

posthog.init(projectToken, {
  api_host: host,
  defaults: "2026-05-30",
  debug: process.env.NODE_ENV === "development",
  autocapture: false,
  capture_pageview: "history_change",
  capture_pageleave: false,
  capture_exceptions: false,
  disable_session_recording: true,
  disable_persistence: true,
  person_profiles: "never",
  cookieless_mode: "always",
  property_denylist: [
    "$device_id",
    "$screen_height",
    "$screen_width",
    "$viewport_height",
    "$viewport_width",
  ],
  before_send: (event) => {
    for (const key of ["$current_url", "$referrer"]) {
      const value = event.properties[key];
      if (typeof value !== "string" || !value) continue;

      try {
        const url = new URL(value, window.location.origin);
        event.properties[key] = `${url.origin}${url.pathname}`;
      } catch {
        delete event.properties[key];
      }
    }

    return event;
  },
});
