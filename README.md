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

## Connecting your domain

1. In Vercel: **Project → Settings → Domains → Add**, enter `northsidecoffee.co` and also add `www.northsidecoffee.co` (Vercel will offer to redirect one to the other).
2. At your domain registrar (GoDaddy, Namecheap, 123-reg, Wix, etc.) open the DNS settings and set:

   | Type  | Name  | Value                  |
   |-------|-------|------------------------|
   | A     | `@`   | `76.76.21.21`          |
   | CNAME | `www` | `cname.vercel-dns.com` |

   Remove any other `A`/`AAAA` records for `@` and any old `CNAME` for `www` — they would conflict.
   Vercel shows the exact values for your project on the Domains page; if they differ, use Vercel's.
3. Wait for DNS to update (usually minutes, up to 48 h). Vercel issues the HTTPS certificate automatically.
4. If the domain is different from `northsidecoffee.co`, update `url` in `src/data/site.ts` (used for SEO, sitemap and link previews).

> **Domain currently on Wix?** Leave the domain registered where it is and only change the DNS records above. Moving the domain points it away from the Wix site and online shop, so first decide whether the shop should stay on a subdomain (e.g. `shop.northsidecoffee.co`).
