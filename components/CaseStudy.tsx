"use client";

import { useEffect, useState } from "react";

export default function CaseStudy() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button className="action mt-8" type="button" onClick={() => setOpen(true)}>
        VIEW CASE STUDY &rarr;
      </button>

      <div
        className={`modal ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <article className="case-file">
          <button
            className="case-close"
            type="button"
            aria-label="Close case study"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <div className="eyebrow">CASE_FILE / 01</div>
          <h2 id="case-title">LOG INGESTION ENGINE</h2>
          <div className="case-grid">
            <div>
              <h3>THE PROBLEM</h3>
              <p>
                Bursty upstream traffic could overwhelm downstream storage during
                peak windows, risking dropped or delayed log delivery.
              </p>
            </div>
            <div>
              <h3>ARCHITECTURE</h3>
              <p>
                Client requests pass through a rate limiter into a durable queue,
                decoupling ingestion speed from write throughput. Workers pull
                from the queue and persist to the database at a sustainable pace.
              </p>
            </div>
            <div>
              <h3>ENGINEERING DECISIONS</h3>
              <p>
                Backpressure is handled at the limiter, not the database. Workers
                are horizontally scalable and idempotent, so retries never
                duplicate writes.
              </p>
            </div>
            <div>
              <h3>RESULT</h3>
              <p>
                Sustains 1,385 requests/second with zero failed deliveries and a
                p95 latency of 1101ms under sustained load.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
