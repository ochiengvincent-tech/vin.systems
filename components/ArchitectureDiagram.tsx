"use client";

import { useState } from "react";

type NodeKey =
  | "typescript"
  | "node"
  | "express"
  | "postgres"
  | "mongo"
  | "redis"
  | "react"
  | "nextjs"
  | "tailwind";

const NODE_INFO: Record<
  NodeKey,
  { title: string; description: string; useCase: string; related: string }
> = {
  typescript: {
    title: "TYPESCRIPT",
    description:
      "The contract layer: explicit interfaces, safer service boundaries, and predictable application behavior across the stack.",
    useCase: "FULL-STACK APPLICATIONS",
    related: "LOG INGESTION ENGINE",
  },
  node: {
    title: "NODE.JS",
    description:
      "Event-driven runtime work for APIs, workers, data movement, and systems that need to remain responsive under load.",
    useCase: "SERVICES + QUEUES",
    related: "BACKGROUND JOB MONITOR",
  },
  express: {
    title: "EXPRESS",
    description:
      "Small, deliberate API surfaces with middleware boundaries built for observability, validation, and change.",
    useCase: "API LAYERS",
    related: "PERMISSION MATRIX BUILDER",
  },
  postgres: {
    title: "POSTGRESQL",
    description:
      "Relational modelling, query planning, transactions, and durable system-of-record design.",
    useCase: "TRANSACTIONAL DATA",
    related: "SQL-PERF-ANALYSER",
  },
  mongo: {
    title: "MONGODB",
    description:
      "Flexible document structures where product requirements need a shape that can evolve without friction.",
    useCase: "DOCUMENT DATA",
    related: "FULL-STACK PRODUCTS",
  },
  redis: {
    title: "REDIS",
    description:
      "Fast coordination for rate limits, ephemeral state, cache paths, and distributed workload control.",
    useCase: "SYSTEM ACCELERATION",
    related: "LOG INGESTION ENGINE",
  },
  react: {
    title: "REACT",
    description:
      "Component-driven UI layer. Composable views and a clear boundary between presentation and logic.",
    useCase: "UI COMPONENTS",
    related: "REDUZER SCHOOL",
  },
  nextjs: {
    title: "NEXT.JS",
    description:
      "Routing, rendering strategy, and the client/server boundary for full-stack React applications.",
    useCase: "FULL-STACK APPLICATIONS",
    related: "REDUZER SCHOOL",
  },
  tailwind: {
    title: "TAILWINDCSS",
    description:
      "Utility-first styling kept close to markup, for fast iteration without a parallel CSS architecture.",
    useCase: "UI STYLING",
    related: "REDUZER SCHOOL",
  },
};

export default function ArchitectureDiagram() {
  const [active, setActive] = useState<NodeKey>("typescript");
  const info = NODE_INFO[active];

  const node = (key: NodeKey, className: string, label: string) => (
    <button
      type="button"
      className={`node ${className} ${active === key ? "selected" : ""}`}
      onClick={() => setActive(key)}
    >
      {label}
    </button>
  );

  return (
    <div className="system-layout">
      <div className="architecture" aria-label="Software architecture stack">
        <span
          className="arch-line active"
          style={{ left: "62%", top: "16%", width: "1px", height: "16%", transform: "rotate(90deg)" }}
        />
        <span
          className="arch-line"
          style={{ left: "62%", top: "39%", width: "1px", height: "16%", transform: "rotate(90deg)" }}
        />
        <span
          className="arch-line active"
          style={{ left: "58%", top: "61%", width: "16%", transform: "rotate(25deg)" }}
        />
        <span
          className="arch-line"
          style={{ left: "65%", top: "61%", width: "16%", transform: "rotate(155deg)" }}
        />
        <span
          className="arch-line"
          style={{ left: "20%", top: "16%", width: "1px", height: "16%", transform: "rotate(90deg)" }}
        />
        <span
          className="arch-line"
          style={{ left: "20%", top: "39%", width: "1px", height: "16%", transform: "rotate(90deg)" }}
        />
        <span
          className="arch-line"
          style={{ left: "20%", top: "58%", width: "38%", transform: "rotate(6deg)" }}
        />

        {node("react", "react", "REACT")}
        {node("nextjs", "nextjs", "NEXT.JS")}
        {node("tailwind", "tailwind", "TAILWINDCSS")}

        {node("typescript", "ts", "TYPESCRIPT")}
        {node("node", "nodejs", "NODE.JS")}
        {node("express", "express", "EXPRESS")}
        {node("postgres", "pg", "POSTGRESQL")}
        {node("mongo", "mongo", "MONGODB")}
        {node("redis", "redis", "REDIS")}
      </div>

      <aside className="system-panel" aria-live="polite">
        <div className="eyebrow">ACTIVE COMPONENT</div>
        <div className="panel-node">{info.title}</div>
        <p className="panel-body">{info.description}</p>
        <div className="panel-meta">
          USE_CASE / {info.useCase}
          <br />
          RELATED / {info.related}
        </div>
      </aside>
    </div>
  );
}
