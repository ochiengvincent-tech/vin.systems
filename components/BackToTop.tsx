"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp size={15} strokeWidth={1.8} aria-hidden="true" />
      <span>TOP</span>
    </button>
  );
}
