# Alaura Creates website
Next.js 15, React 19, TypeScript, Tailwind CSS 4.

## Run locally
`npm install` then `npm run dev` (http://localhost:3000). Check production with `npm run build && npm start`.

## Edit content
- `src/data/site.ts`: email, WhatsApp, Behance profile URL, social links (empty = hidden or marked "to be added").
- `src/data/projects.ts`: add one object per project. Put images in `public/work/`. Set `concept: true` for self-initiated work. `behanceUrl` adds a "View full project on Behance" button. The portfolio works without Behance.
- `src/data/content.ts`: services, process steps, FAQs.
- Logo: `public/logo.png`. Favicon: `src/app/icon.png`.

## Contact form (needs setup)
The form posts to `/api/contact`, which sends email through Resend. Until these variables are set, the form tells visitors it is not connected and sends nothing:
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (a sender on a domain verified in Resend), `NEXT_PUBLIC_SITE_URL` (your real domain, used for sitemap and metadata).

## GitHub and Vercel
1. `git init && git add . && git commit -m "Initial site"`; create an empty GitHub repo and push.
2. On vercel.com choose Add New, Project, import the repo (Next.js is auto-detected).
3. Add the four environment variables above, then Deploy.
4. Domain: Project, Settings, Domains, add your domain and set the DNS records Vercel shows.
