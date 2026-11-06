# Noah Owen — Portfolio (first pass)

A responsive, static developer-style portfolio designed for Cloudflare Pages. No build step required.

## Local development and preview

Install Node.js LTS (including npm), then run these commands from the repository directory:

```powershell
npm ci
npm run dev
```

Open http://localhost:3000 in your browser. BrowserSync watches HTML, CSS, and JavaScript: saving HTML or JavaScript reloads the page, while CSS changes are injected automatically. Keep the terminal running during iteration; press Ctrl+C to stop it. Run `npm ci` on initial setup or after dependencies change, not before every preview.

The preview server binds to localhost only. It does not deploy anything or open a public tunnel. BrowserSync is a development dependency; the production website still requires no Node runtime or build step. Fonts, Typed.js, and Lucide still load from their existing public CDNs.

For visual changes, check desktop and mobile browser layouts, keyboard navigation, and reduced motion before approval. Use browser responsive mode to check narrow screens and the existing 1000px, 760px, and 430px breakpoints.

## Git review and Cloudflare Pages deployment

- `main` is the production branch. Work on a separate `codex/<descriptive-name>` feature branch for each reviewable change.
- Iterate locally, preview, request refinements, and review the diff before publication.
- No branch is pushed, no pull request is merged, and no deployment is initiated without explicit user approval for that action.
- After approval to push, publish the feature branch to `Nowen99/nowen-portfolio` and open a pull request targeting `main`. Cloudflare may create a hosted preview on branch pushes if preview deployments are enabled.
- After explicit approval to merge, merge the pull request into `main`. The existing Cloudflare Pages Git integration should then deploy production automatically; check the deployment result before calling it published.

Keep Cloudflare's framework preset as `None`, the build command empty, and the output directory at the repository root (`/`). Adding local npm tooling does not require a production build. In the Cloudflare dashboard, verify that the production branch is `main` and check preview-branch settings; these account-side settings are not recorded in this repository.

See [AGENTS.md](AGENTS.md) for the project standards and approval boundaries.

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
