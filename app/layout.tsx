import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vin-systems.vercel.app";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vincent Ooko Ochieng | Full-Stack Software Engineer",
    template: "%s | Vincent Ooko Ochieng",
  },
  description:
    "Vincent Ooko Ochieng is a Kenya-based full-stack software engineer building durable backend systems, web applications, and developer tools.",
  keywords: [
    "Vincent Ooko Ochieng",
    "full-stack software engineer",
    "software engineer Kenya",
    "backend engineer",
    "TypeScript developer",
    "Next.js developer",
    "Node.js developer",
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
    title: "Vincent Ooko Ochieng | Full-Stack Software Engineer",
    description:
      "Portfolio of Vincent Ooko Ochieng, a Kenya-based full-stack software engineer building durable backend systems, web applications, and developer tools.",
    locale: "en_KE",
    images: [
      {
        url: "/vincent-ochieng.png",
        width: 800,
        height: 600,
        alt: "Vincent Ooko Ochieng, full-stack software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Ooko Ochieng | Full-Stack Software Engineer",
    description:
      "Portfolio of Vincent Ooko Ochieng, a Kenya-based full-stack software engineer building durable backend systems, web applications, and developer tools.",
    images: ["/vincent-ochieng.png"],
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
              jobTitle: "Full-Stack Software Engineer",
              description:
                "Full-stack software engineer building durable backend systems, web applications, and developer tools.",
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
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Backend systems",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = window.localStorage.getItem("theme");

                if (savedTheme === "light") {
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
