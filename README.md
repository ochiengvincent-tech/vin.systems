# vin.systems

Personal portfolio of Vincent Ooko Ochieng, a full-stack software engineer based in
Kenya. The site presents selected work in backend systems, web applications,
software architecture, performance, and developer tooling.

## Built With

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Formspree for the contact form
- Lucide React for interface icons

## Getting Started

Clone the repository and move into the project directory:

```bash
git clone git@github.com:ochiengvincent-tech/vin.systems.git
cd vin.systems
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Purpose                      |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run lint`  | Run ESLint                   |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |

## SEO Configuration

The site generates metadata, Open Graph tags, structured data, `robots.txt`,
and `sitemap.xml` through the Next.js App Router.

Set the public site URL when deploying:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

This value is used for canonical URLs, social previews, the sitemap, robots
directives, and structured data. The app falls back to
`https://vin-systems.vercel.app` when the variable is not set.

The root `app/opengraph-image.tsx` provides a branded 1200×630 preview for link
shares.

## Analytics and Privacy

PostHog is required. Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and
`NEXT_PUBLIC_POSTHOG_HOST` in `.env.local` and in the deployment environment;
the app fails early when either is missing. Use the host for the region selected
in the PostHog project and replace both placeholders in `.env.example` before
running the app. Because these are `NEXT_PUBLIC_` values, configure them in the
build environment as well as the runtime environment.

Enable **Cookieless server hash mode** in the PostHog project settings before
deploying. The client uses cookieless mode, disables autocapture, session
recording, exception capture, and person profiles, and strips query strings
from page URLs. It sends a small set of explicit interaction events; it does not
send contact form fields or message text. See the site's `/privacy` page for
the visitor notice.

Before launch, document the legitimate-interests assessment and verify the
appropriate safeguards for the PostHog processing region. PostHog Cloud event
retention is determined by the organization plan and is not a project-level
setting; check the active plan and make the `/privacy` notice match its actual
retention period. Current PostHog pricing lists one year on Free and seven years
on paid plans. Cookieless tracking still processes request metadata such as IP
address and browser type to calculate rotating visit counts; it does not make
the processing anonymous at collection.

## Deployment

Vercel is the recommended deployment platform because this project uses
Next.js. Import the repository into Vercel and add `NEXT_PUBLIC_SITE_URL` to
the project environment variables before deploying.

The project can also be deployed to other platforms that support Next.js.

## Project Structure

```text
app/          Pages, global styles, metadata, sitemap, and robots rules
components/   Interactive portfolio components
public/       Images, icons, and downloadable assets
```
