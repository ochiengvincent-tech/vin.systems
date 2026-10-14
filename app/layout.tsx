import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vin-systems.vercel.app";
const description =
  "Vincent Ooko Ochieng is a Kenya-based full-stack software engineer focused on backend development with Node.js, Express, PostgreSQL, React, and Next.js.";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const spaceMono = localFont({
  src: [
    { path: "./fonts/space-mono-latin-400.woff2", weight: "400" },
    { path: "./fonts/space-mono-latin-700.woff2", weight: "700" },
  ],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Vincent Ooko Ochieng | Backend-Focused Full-Stack Software Engineer",
    template: "%s | Vincent Ooko Ochieng",
  },
  description,
  keywords: [
    "Vincent Ooko Ochieng",
    "full-stack software engineer",
    "software engineer Kenya",
    "backend-focused full-stack engineer",
    "TypeScript developer",
    "Node.js developer",
    "Express developer",
    "PostgreSQL developer",
    "React developer",
    "Next.js developer",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Vincent Ooko Ochieng", url: siteUrl }],
  creator: "Vincent Ooko Ochieng",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "vin.systems",
    title:
      "Vincent Ooko Ochieng | Backend-Focused Full-Stack Software Engineer",
    description,
    locale: "en_KE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vincent Ooko Ochieng, backend-focused full-stack software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vincent Ooko Ochieng | Backend-Focused Full-Stack Software Engineer",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vincent Ooko Ochieng",
              url: siteUrl,
              image: `${siteUrl}/vincent-ochieng.png`,
              jobTitle:
                "Backend-Focused Full-Stack Software Engineer",
              description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
              sameAs: [
                "https://github.com/ochiengvincent-tech",
                "https://www.linkedin.com/in/vincent-ochieng-406076257/",
              ],
              knowsAbout: [
                "TypeScript",
                "Node.js",
                "Express",
                "PostgreSQL",
                "React",
                "Next.js",
                "Backend systems",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.localStorage.getItem("theme") === "light") {
                  document.body.classList.add("light-mode");
                }
              } catch {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
