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
