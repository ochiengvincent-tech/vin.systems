"use client";

import { useEffect, useState } from "react";

const sections = [
  ["about", "about"],
  ["experience", "experience"],
  ["work", "projects"],
  ["system", "approach"],
  ["contact", "contact"],
] as const;

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const elements = sections
      .map(([id]) => document.getElementById(id))
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
      {
        rootMargin: "-96px 0px -70% 0px",
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-links">
      {sections.map(([id, label]) => (
        <a
          className={activeSection === id ? "active" : undefined}
          href={`#${id}`}
          onClick={() => setActiveSection(id)}
          aria-current={activeSection === id ? "page" : undefined}
          key={id}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
