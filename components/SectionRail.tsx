"use client";

import { useEffect, useState } from "react";

const sectionIds = ["about", "system", "work", "lab", "experience", "contact"];

export default function SectionRail() {
  const [activeSection, setActiveSection] = useState<string | null>("about");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });

        const topMost = elements.find((element) => visible.has(element.id));
        if (topMost) {
          setActiveSection(topMost.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="rail" aria-label="Section progress">
      {sectionIds.map((id) => (
        <a
          className={activeSection === id ? "active" : undefined}
          href={`#${id}`}
          aria-label={`Go to ${id} section`}
          aria-current={activeSection === id ? "location" : undefined}
          key={id}
        />
      ))}
    </aside>
  );
}
