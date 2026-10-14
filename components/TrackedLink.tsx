"use client";

import type { ComponentPropsWithoutRef } from "react";
import { portfolioAnalytics } from "./portfolioAnalytics";

type TrackedLinkProps = ComponentPropsWithoutRef<"a"> & {
  event: string;
  properties?: Record<string, string>;
};

export default function TrackedLink({
  event,
  properties,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        portfolioAnalytics.capture(event, properties);
        onClick?.(clickEvent);
      }}
    />
  );
}
