# Noah Owen — Portfolio (first pass)

A responsive, static developer-style portfolio designed for Cloudflare Pages. No build step required.

## Deploy on your existing Cloudflare Pages project

1. Download and extract the ZIP.
2. Open your GitHub repository `Nowen99/nowen-portfolio`.
3. Use **Add file → Upload files** to upload `index.html`, `styles.css`, and `script.js` at the repository **root** (not inside a subfolder).
4. Commit changes to `main`. Cloudflare Pages automatically redeploys.
5. Keep `Framework preset: None`; a build step is not required for these static files. Output directory: repository root (`/`).

If GitHub's upload screen is inconvenient, clone the repository locally, copy the three files into it, then `git add . && git commit -m "Launch portfolio" && git push`.

## Important personalization before sharing with recruiters

- Replace `YOUR_EMAIL@example.com` in `index.html` with your real professional contact email.
- Replace the generic LinkedIn URL `https://www.linkedin.com/` with your profile link.
- Add your PDF resume as `resume.pdf` and create a download link in the header or contact section.
- Review all descriptions and certifications for accuracy, particularly LinkedIn details and Linux+ status.
- Project cards intentionally contain **no invented GitHub repo links**. Add case-study pages as your write-ups are ready.
- Customer details from NetX and Scenthound should stay sanitized and non-confidential.

## Branding and interaction

- Deep slate background: `#0b1219`
- Mint/teal accent: `#9bdcc9`; old nowen.io accent reference: `#74aa9c`
- Headline font: DM Sans; terminal UI: IBM Plex Mono
- Typed.js 2.1.0 for hero typewriter effect
- Lucide 0.468.0 for icons
- Hover-character highlighting on the hero headline
- Responsive navigation, motion-reduction support, and no framework/build dependencies

Dependencies are loaded from public CDNs. An active internet connection is required for those effects/fonts; the content remains visible if they are unavailable.

## Notes

This is a visual and content **first pass**, designed as an engineer's personal brand and not a confidential corporate case-study repository. It deliberately uses truthful, broad project summaries instead of unverified performance metrics.
