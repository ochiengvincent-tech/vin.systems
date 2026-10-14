"use client";

import posthog from "posthog-js";

type PortfolioEventProperties = Record<string, string | number | boolean>;

export const portfolioAnalytics = {
  capture(event: string, properties?: PortfolioEventProperties) {
    posthog.capture(event, properties);
  },
};
