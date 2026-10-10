# North Side Coffee — landing page

One-page site for North Side Coffee (Morpeth, Northumberland). Built with Next.js 16 (App Router), React 19 and CSS Modules — no UI libraries, fully static.

Sections: hero · about · menu · opening hours · location with map · contact & Instagram.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
```

## Editing content

Text, prices, opening hours, address, phone, email and social links are all in **`src/data/site.ts`**.
Photos live in `public/images/` (`hero.jpg`, `about.jpg`, `logo.png`) — replace a file with one of the same name to swap it.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to <https://vercel.com/new>, import the repo and press **Deploy** (no settings needed).
3. The site is live at `https://<project>.vercel.app`.

## Domain

Live at **https://northsidecoffeeroasters.com** (Vercel project `northside-coffee`).

- The domain was bought through Vercel (registrar: Vercel, nameservers `ns1/ns2.vercel-dns.com`), so DNS is managed automatically — no records to edit.
- `www.northsidecoffeeroasters.com` permanently redirects to the apex domain (see `vercel.json`).
- HTTPS certificates are issued and renewed by Vercel.
- **Auto-renew is off.** The registration expires on **10 October 2027** — renew it in Vercel → Domains before then, or the site will go offline.
- If the domain ever changes, update `url` in `src/data/site.ts` (used for SEO, sitemap and link previews).

Deploy updates with `npm run deploy` (requires `npx vercel login` once).
