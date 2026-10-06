# MIDO Productions website

Marketing site for [MIDO Productions Ltd](https://www.midoproductions.com), a sound, audio and video production company in Oyibi, Accra.

Built with React, Vite, Tailwind CSS and React Router (hash routing, so it works on GitHub Pages).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run lint     # oxlint
npm run build    # production build in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Phone numbers, email, address, socials, services, videos, gallery | `src/data/site.js` |
| Pages | `src/pages/` |
| Header, footer, shared sections | `src/components/` |
| Brand colours and fonts | `tailwind.config.js` |
| Photos (each as `name.webp` 1800px + `name-sm.webp` 800px) | `public/photos/` |
| Client logos | `public/images/clients/` |

To add a YouTube video, add an entry to `videos` in `src/data/site.js` with the video ID from its URL.

## Enquiry form

There is no backend. The contact form composes the enquiry into a WhatsApp message (to the sales line) or an email to `info@midoproductions.com`, and the visitor sends it from their own app.

## Security

GitHub Pages cannot send custom HTTP headers, so protections live in the page itself:

- **Content Security Policy**: injected as a `<meta>` tag into production builds only (see `vite.config.js`). Scripts may only load from the site itself. Styles and fonts may only come from Google Fonts, images from YouTube thumbnails, and frames from the privacy-enhanced YouTube player. Forms cannot post anywhere. If you add a new third-party resource, add its domain there or the browser will block it.
- **Referrer policy**: `strict-origin-when-cross-origin`, so full page URLs aren't sent to other sites.
- **YouTube embeds**: sandboxed `youtube-nocookie.com` iframes, loaded only when a visitor clicks play.
- **External links**: all open with `rel="noopener noreferrer"`.
- **Enquiry form**: values are trimmed, length-capped and URL-encoded; the phone field only accepts digits, spaces and `+`. No data is stored or sent by the site itself.
- **Dependencies**: `npm audit` is clean, and Dependabot (`.github/dependabot.yml`) opens weekly update PRs.

Headers such as `X-Frame-Options` and HSTS need a host that supports them (e.g. Cloudflare or Netlify) if the site moves to a custom domain.

## Deploy

The site is served by GitHub Pages from the `gh-pages` branch. Build, then publish the contents of `dist/` to that branch.
