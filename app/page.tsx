import { FileText, Mail, MessageCircle, Phone, Shield } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import BackToTop from "@/components/BackToTop";
import CaseStudy from "@/components/CaseStudy";
import ContactForm from "@/components/ContactForm";
import SectionRail from "@/components/SectionRail";
import SectionNav from "@/components/SectionNav";
import TrackedLink from "@/components/TrackedLink";

import Image from "next/image";

const email = "ookovincent616@gmail.com";
const emailLink = `mailto:${email}`;
const whatsappLink = "https://wa.me/254727664787";
const resumeHref = "/Vincent-Ooko-Ochieng-CV.pdf";
const currentYear = new Date().getFullYear();

const metadataItems = [
  ["ROLE", "BACKEND-FOCUSED FULL-STACK ENGINEER"],
  ["LOCATION", "KENYA / OPEN TO REMOTE"],
  ["AVAILABILITY", "OPEN TO SOFTWARE ENGINEERING ROLES"],
];

const workItems = [
  {
    num: "03",
    title: "SQL PERFORMANCE ANALYZER",
    copy: "Query-plan inspection and database performance diagnostics.",
    href: "https://github.com/ochiengvincent-tech/sql-perf-analyzer",
  },
  {
    num: "04",
    title: "DIFF-ENGINE",
    copy: "A precise comparison engine for structured data and meaningful change.",
    href: "https://github.com/ochiengvincent-tech/diff-engine",
  },
  {
    num: "05",
    title: "PERMISSION-MATRIX-BUILDER",
    copy: "Role-aware application permissions made inspectable and maintainable.",
    href: "https://github.com/ochiengvincent-tech/permission-matrix-builder",
  },
  {
    num: "06",
    title: "BACKGROUND-JOB-MONITOR",
    copy: "Operational visibility for asynchronous queues and worker processes.",
    href: "https://github.com/ochiengvincent-tech/background-job-monitor",
  },
];



const timelineItems = [
  {
    year: "SEP 2025–SEP 2026",
    title: "REDUZER TRAINING INSTITUTE / TRAINEE",
    copy: "Contributed to the Reduzer School landing page from research, positioning, copy, and responsive implementation through deployment readiness, QA, and conversion-focused iteration. Integrated PostHog analytics and a TallyForm webhook pipeline to enrich submission data for funnel tracking and analysis.",
  },
  {
    year: "BEFORE 2025",
    title: "SELF-DIRECTED SOFTWARE DEVELOPMENT",
    copy: "Built a foundation through self-directed study and hands-on experiments in web development, databases, APIs, and production-minded software systems before joining Reduzer in September 2025.",
  },
];

const certificationItems = [
  ["Software Engineering Certificate", "REDUZER TRAINING INSTITUTE / 2026"],
  ["Digital Marketing Certificate", "ALEPH DIGITAL ACADEMY / 2023"],
  ["CyberOps Associate", "CISCO NETWORKING ACADEMY / 2024"],
];

const toolingItems = [
  ["Vitest", "UNIT + INTEGRATION TESTING"],
  ["Git / GitHub", "VERSION CONTROL"],
  ["Figma", "DESIGN + PROTOTYPING"],
  ["Vercel", "DEPLOYMENT"],
  ["Firebase", "AUTH + BACKEND SERVICES"],
  ["Redux / Redux Toolkit", "STATE MANAGEMENT"],
  ["Framer Motion", "UI ANIMATION"],
  ["GSAP", "ADVANCED MOTION"],
  ["Zustand", "LIGHTWEIGHT STATE"],
  ["Bash Scripting", "AUTOMATION + CLI"],
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.47.09.65-.2.65-.46v-1.63c-2.65.58-3.21-1.12-3.21-1.12-.43-1.1-1.05-1.4-1.05-1.4-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.22 1.03 2.76.79.09-.61.33-1.03.6-1.27-2.12-.24-4.35-1.06-4.35-4.7 0-1.04.37-1.89.98-2.56-.1-.24-.42-1.21.09-2.52 0 0 .8-.26 2.62.98A9.1 9.1 0 0 1 12 7.2c.81 0 1.63.11 2.39.32 1.82-1.24 2.62-.98 2.62-.98.51 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.65-2.23 4.46-4.36 4.7.34.29.65.85.65 1.72v2.55c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.2 8.4H2.7V21h2.5V8.4ZM4 3A1.5 1.5 0 1 0 4 6a1.5 1.5 0 0 0 0-3ZM9 8.4H6.6V21H9v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21h2.5v-6.9c0-3.4-.7-6-4.5-6A4.4 4.4 0 0 0 9 9.8v-1.4Z" />
    </svg>
  );
}

type LinkItem = {
  label: string;
  href: string;
  icon: ReactNode;
  ariaLabel?: string;
  external?: boolean;
  download?: string;
  className?: string;
};

const directChannelLinks: LinkItem[] = [
  {
    label: "Email",
    href: emailLink,
    icon: <Mail size={14} strokeWidth={1.8} />,
    ariaLabel: "Email Vincent",
    external: true,
  },
  {
    label: "07276664787",
    href: "tel:07276664787",
    icon: <Phone size={14} strokeWidth={1.8} />,
    ariaLabel: "Call Vincent",
    className: "contact-phone",
  },
  {
    label: "WhatsApp",
    href: whatsappLink,
    icon: <MessageCircle size={14} strokeWidth={1.8} />,
    ariaLabel: "Message Vincent on WhatsApp",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/ochiengvincent-tech",
    icon: <GithubIcon />,
    ariaLabel: "Visit Vincent on GitHub",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vincent-ochieng-406076257/",
    icon: <LinkedInIcon />,
    ariaLabel: "Connect with Vincent on LinkedIn",
    external: true,
  },
];

const footerLinks: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/ochiengvincent-tech",
    icon: <GithubIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vincent-ochieng-406076257/",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "Download Resume",
    href: resumeHref,
    icon: <FileText size={14} strokeWidth={1.8} />,
    download: "Vincent-Ooko-Ochieng-CV.pdf",
  },
  {
    label: "Email",
    href: emailLink,
    icon: <Mail size={14} strokeWidth={1.8} />,
    external: true,
  },
  {
    label: "WhatsApp",
    href: whatsappLink,
    icon: <MessageCircle size={14} strokeWidth={1.8} />,
    ariaLabel: "Message Vincent on WhatsApp",
    external: true,
  },
];

export default function Home() {
  return (
    <div className="system-shell">
      <SectionRail />
      <BackToTop />

      <header className="nav-wrap">
        <nav className="nav-inner" aria-label="Primary navigation">
          <a className="nav-brand" href="#top">
            <Image
              className="brand-logo"
              src="/favicon-32x32.png"
              alt=""
              width={18}
              height={18}
            />
            <span>vin.systems</span>
          </a>
          <SectionNav />
          <div className="nav-status mono text-[10px] flex items-center">
            <span className="status-dot"></span>
            <span>status: running</span>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="hero-top reveal">
            <div className="eyebrow">SOFTWARE ENGINEER · KENYA</div>
            <div className="build-meta mono text-[10px] text-(--muted)">
              BUILD: {currentYear}
            </div>
          </div>
          <div className="reveal delay-1">
            <div className="hero-brand">vin.systems</div>
            <h1 className="hero-name">
              VINCENT<span>OOKO OCHIENG</span>
            </h1>
            <p className="eyebrow mb-6">BACKEND-FOCUSED FULL-STACK SOFTWARE ENGINEER</p>
            <p className="hero-statement">
              I build reliable web applications, APIs, and data-driven systems.
            </p>
            <p className="hero-supporting-copy">
              Full-stack engineer with a backend focus. Node.js, Express,
              PostgreSQL, React, and Next.js.
            </p>
          </div>
          <div className="hero-bottom reveal delay-2">
            <div className="tech-line">
              TypeScript &middot; React &middot; Next.js &middot; Node.js
              &middot; PostgreSQL
            </div>
            <a className="action hero-action" href="#work">
              VIEW SELECTED PROJECTS &rarr;
            </a>
            <a className="action hero-action" href="#contact">
              CONTACT ME &rarr;
            </a>
            <TrackedLink
              className="action hero-action"
              href={resumeHref}
              download="Vincent-Ooko-Ochieng-CV.pdf"
              event="resume_downloaded"
              properties={{ placement: "hero" }}
            >
              DOWNLOAD RESUME &darr;
            </TrackedLink>
            <div className="diagnostics">
              <span className="section-status">
                <span className="section-status-dot"></span>
                open to software engineering opportunities
              </span>
              <br />
              location: KE
            </div>
          </div>
        </section>

        <section id="about">
          <div className="eyebrow">01 / ABOUT</div>
          <h2 className="section-title">
            ABOUT ME.
          </h2>
          <div className="about-grid">
            <div className="portrait-wrap">
              <Image
                className="portrait"
                src="/vincent-ochieng.png"
                alt="Portrait of Vincent Ooko Ochieng"
                width={800}
                height={600}
                sizes="(max-width: 800px) 100vw, 55vw"
                loading="lazy"
              />
              <div className="subject-tag">
                SUBJECT_001
                <br />
                VINCENT OOKO OCHIENG
                <br />
                FULL-STACK ENGINEER
                <br />
                KENYA
              </div>
            </div>
            <div>
              <div className="about-copy">
                <p>
                  I’m a Kenya-based software engineer focused on backend and
                  full-stack development.
                </p>
                <p>
                  I’ve built web experiences and backend projects using
                  TypeScript, Node.js, PostgreSQL, React, and Next.js. My work
                  spans understanding a product need, implementing the system,
                  and refining it through testing and feedback. I’m especially
                  interested in reliable APIs, data flows, and software that is
                  straightforward to operate and maintain.
                </p>
              </div>
              <div className="metadata-list">
                {metadataItems.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="eyebrow">02 / EXPERIENCE & EDUCATION</div>
          <h2 className="section-title">
            EXPERIENCE.
          </h2>
          <div className="timeline">
            {timelineItems.map(({ year, title, copy }) => (
              <article className="timeline-row" key={title}>
                <div className="timeline-year">{year}</div>
                <div className="timeline-dot"></div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="eyebrow mt-24 mb-7">CERTIFICATIONS</div>
          <div className="certs">
            {certificationItems.map(([title, issuer]) => (
              <div className="cert" key={title}>
                <h3>{title}</h3>
                <p>{issuer}</p>
              </div>
            ))}
          </div>

          <div className="eyebrow mt-24 mb-7">ADDITIONAL TOOLS</div>
          <div className="tooling">
            {toolingItems.map(([name, description]) => (
              <div className="tool" key={name}>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work">
          <div className="eyebrow">03 / SELECTED PROJECTS</div>
          <h2 className="section-title">PROJECTS.</h2>
          <article className="featured capstone-featured">
            <div className="featured-copy">
              <div>
                <div className="project-num">01 / CAPSTONE PROJECT</div>
                <h3 className="project-title">MERCHANDISING MANAGEMENT SYSTEM</h3>
                <p className="project-copy">
                  A distributed retail platform built with independent domain
                  services, PostgreSQL, and RabbitMQ. The capstone project is
                  complete; there is no live demo yet.
                </p>
              </div>
              <div className="featured-actions capstone-actions">
                <TrackedLink
                  className="action"
                  href="https://github.com/ochiengvincent-tech/merchandise-management-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  event="project_source_opened"
                  properties={{ project: "merchandise_management_system" }}
                >
                  VIEW SOURCE &uarr;
                </TrackedLink>
              </div>
            </div>
            <div className="system-preview capstone-preview">
              <div className="preview-head">
                <span>SYSTEM MAP / MMS ARCHITECTURE</span>
                <span className="capstone-status">STATUS: COMPLETE</span>
              </div>
              <div className="capstone-flow">
                <div className="flow-box">WEB APP</div>
                <div className="flow-line"></div>
                <div className="flow-box">OIDC BFF</div>
                <div className="flow-line"></div>
                <div className="flow-box">DOMAIN SERVICES</div>
              </div>
              <div className="capstone-infrastructure">
                <span>POSTGRESQL</span>
                <span>RABBITMQ EVENTS</span>
                <span>REDIS SESSIONS</span>
              </div>
              <p className="capstone-note">
                Separate service-owned databases · same-origin authenticated API gateway
              </p>
            </div>
          </article>

          <article className="featured">
            <div className="featured-copy">
              <div>
                <div className="project-num">02 / BACKEND PROJECT</div>
                <h3 className="project-title">LOG INGESTION ENGINE</h3>
                <p className="project-copy">
                  A Node.js service that accepts bursts of log events, queues
                  work, and writes events to a database through background
                  workers. The project explores rate limiting, retries, and
                  reliable delivery under load.
                </p>
              </div>
              <div>
                <div className="metrics">
                  <div className="metric">
                    <b>1,385</b>
                    <span>REQUESTS / SECOND*</span>
                  </div>
                  <div className="metric">
                    <b>0</b>
                    <span>FAILED DELIVERIES*</span>
                  </div>
                  <div className="metric">
                    <b>1101ms</b>
                    <span>P95 LATENCY*</span>
                  </div>
                </div>
                <div className="featured-actions">
                  <CaseStudy />
                  <TrackedLink
                    className="action"
                    href="https://github.com/ochiengvincent-tech/log-ingestion-engine"
                    target="_blank"
                    rel="noopener noreferrer"
                    event="project_source_opened"
                    properties={{ project: "log_ingestion_engine" }}
                  >
                    VIEW ON GITHUB &uarr;
                  </TrackedLink>
                </div>
              </div>
              <p className="project-footnote">*Reported from the project’s load test; see the README for test setup and conditions.</p>
            </div>
            <div
              className="system-preview"
              aria-label="Log ingestion engine diagram"
            >
              <div className="preview-head">
                <span>SYSTEM MAP / INGESTION PIPELINE</span>
                <span className="capstone-status">STATUS: COMPLETE</span>
              </div>
              <div className="flow">
                <div className="flow-box">CLIENT</div>
                <div className="flow-line"></div>
                <div className="flow-box">LIMITER</div>
                <div className="flow-line"></div>
                <div className="flow-box">QUEUE</div>
                <div className="flow-line"></div>
                <div className="flow-box">WORKER</div>
                <div className="flow-line"></div>
                <div className="flow-box">DATABASE</div>
              </div>
            </div>
          </article>

          <div className="work-list">
            {workItems.map(({ num, title, copy, href }) => (
              <article className="work-row" key={num}>
                <div className="eyebrow">{num}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <TrackedLink
                  className="project-link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  event="project_source_opened"
                  properties={{ project: title.toLowerCase().replaceAll("-", "_").replaceAll(" ", "_") }}
                >
                  GITHUB &uarr;
                </TrackedLink>
              </article>
            ))}
          </div>
        </section>

        <section id="system">
          <div className="eyebrow">04 / ENGINEERING APPROACH</div>
          <h2 className="section-title">
            TOOLS FOR THE JOB.
          </h2>
          <ArchitectureDiagram />
        </section>

        <section id="contact" className="contact">
          <div className="eyebrow">05 / CONTACT</div>
          <h2>
            LET’S TALK ABOUT <span>YOUR TEAM.</span>
          </h2>
          <div className="contact-grid">
            <ContactForm />
            <aside className="contact-details">
              <div className="eyebrow">DIRECT CHANNELS</div>
              {directChannelLinks.map((link) => (
                <TrackedLink
                  className={link.className}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={link.ariaLabel}
                  event="contact_channel_opened"
                  properties={{
                    contact_method: link.label === "07276664787" ? "phone" : link.label.toLowerCase(),
                    placement: "contact_section",
                  }}
                  key={link.label}
                >
                  <span className="link-icon" aria-hidden="true">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </TrackedLink>
              ))}
            </aside>
          </div>
        </section>

      </main>

      <footer>
        <div className="footer-brand">
          <Image
            className="brand-logo"
            src="/favicon-32x32.png"
            alt=""
            width={16}
            height={16}
          />
          <span>vin.systems &middot; {currentYear}</span>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <TrackedLink
              href={link.href}
              download={link.download}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.ariaLabel}
              event={link.download ? "resume_downloaded" : "contact_channel_opened"}
              properties={
                link.download
                  ? { placement: "footer" }
                  : { contact_method: link.label.toLowerCase(), placement: "footer" }
              }
              key={link.label}
            >
              <span className="link-icon" aria-hidden="true">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </TrackedLink>
          ))}
          <Link href="/privacy">
            <span className="link-icon" aria-hidden="true">
              <Shield size={14} strokeWidth={1.8} />
            </span>
            <span>PRIVACY</span>
          </Link>
        </div>
        <div className="section-status">
          <span className="section-status-dot"></span>
          operational / build: {currentYear} / location: KE
        </div>
      </footer>
    </div>
  );
}
