import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Received",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <div className="eyebrow">MESSAGE RECEIVED</div>
      <h1>THANKS FOR REACHING OUT.</h1>
      <p>
        Your message is on its way. I&apos;ll get back to you as soon as I can.
      </p>
      <Link className="action" href="/">
        RETURN HOME &rarr;
      </Link>
    </main>
  );
}
