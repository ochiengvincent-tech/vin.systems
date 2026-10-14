import { ImageResponse } from "next/og";

export const alt =
  "Vincent Ooko Ochieng — Backend-Focused Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#e9e5dd",
          backgroundColor: "#0b0c0d",
          backgroundImage:
            "linear-gradient(rgba(233,229,221,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(233,229,221,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#ff7847",
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          <span
            style={{
              display: "block",
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#ff5a1f",
            }}
          />
          SOFTWARE ENGINEER · KENYA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#e9e5dd",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Vincent Ooko Ochieng
          </div>
          <div
            style={{
              color: "#c8c5bd",
              fontSize: 32,
              lineHeight: 1.25,
            }}
          >
            Backend-Focused Full-Stack Engineer
          </div>
          <div
            style={{
              color: "#ff7847",
              fontSize: 20,
              letterSpacing: 1,
              marginTop: 8,
            }}
          >
            NODE.JS · EXPRESS · POSTGRESQL · REACT · NEXT.JS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(233,229,221,0.24)",
            paddingTop: 20,
            color: "#b3b8bd",
            fontSize: 20,
          }}
        >
          <span>vin.systems</span>
          <span>BUILDING RELIABLE WEB APPLICATIONS & APIS</span>
        </div>
      </div>
    ),
    size,
  );
}
