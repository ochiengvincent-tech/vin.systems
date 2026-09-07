# vin.systems

Personal portfolio of Vincent Ochieng, a full-stack software engineer based in
Kenya. The site presents selected work in backend systems, web applications,
software architecture, performance, and developer tooling.

## Built With

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Formspree for the contact form
- Lucide React for interface icons

## Getting Started

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
directives, and structured data. The app falls back to `https://vin.systems`
when the variable is not set.

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

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
