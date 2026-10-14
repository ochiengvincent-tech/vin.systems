import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How vin.systems uses limited, cookieless analytics and handles contact form data.",
};

const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="eyebrow">PRIVACY / DATA USE</div>
      <h1>HOW THIS SITE USES DATA.</h1>

      <section>
        <h2>Analytics</h2>
        <p>
          I use PostHog to understand aggregate visits and interactions so I can
          improve this portfolio. Analytics runs in cookieless mode: this site
          does not use analytics cookies, local storage, session replay, or
          automatic interaction capture. Analytics is always active; it does not
          wait for a cookie banner choice.
        </p>
        <p>
          The events are page views, project and resume link clicks, contact
          channel clicks, technology selections, and successful contact form
          submissions. Form fields and message contents are never sent to
          PostHog. Page URLs are stripped of query strings and fragments before
          they are sent. PostHog receives network metadata such as IP address
          and browser type to produce a rotating, pseudonymous count of visits;
          that metadata is not used here to identify you.
        </p>
        <p>
          The purpose is to measure and improve this portfolio. The stated
          lawful basis is legitimate interests, limited to aggregate usage
          measurement. You may object to this processing by contacting me.
          PostHog Cloud retention follows the active organization plan. The
          retention period for this deployment must be confirmed against that
          plan and reflected here.
        </p>
        <p>
          Analytics is provided by PostHog at the configured regional host:
          <br />
          <code>{posthogHost}</code>
        </p>
        <p>
          Depending on that region, data may be processed outside Kenya. Any
          cross-border transfer must use and document an applicable legal basis
          and safeguards for the selected region.
        </p>
      </section>

      <section>
        <h2>Contact messages</h2>
        <p>
          If you send a message through the contact form, the name, email, and
          message are processed by Formspree so I can receive and reply to it.
          Those form contents are not included in analytics events.
        </p>
      </section>

      <section>
        <h2>Your data rights</h2>
        <p>
          You can ask about personal data associated with your visit or request
          access, correction, or deletion. You may also object to analytics
          processing. Contact me at{" "}
          <a href="mailto:ookovincent616@gmail.com">ookovincent616@gmail.com</a>.
        </p>
      </section>

      <p className="privacy-updated">Last updated: 14 October 2026</p>
      <Link className="action" href="/">
        RETURN TO PORTFOLIO &rarr;
      </Link>
    </main>
  );
}
