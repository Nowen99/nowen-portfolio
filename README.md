# Noah Owen — Engineering Portfolio

Personal portfolio focused on technical support engineering, enterprise SaaS, identity and access management, Linux, Docker, APIs, and automation.

My work connects customer support, systems administration, and engineering: investigating complex issues, finding root causes, and communicating clear solutions.

[LinkedIn](https://www.linkedin.com/in/nowen99/) · [GitHub](https://github.com/Nowen99) · [Email](mailto:noahpowen@gmail.com)

## What you'll find

- Professional experience across enterprise software support and IT operations.
- Projects exploring self-hosted infrastructure, Linux administration, and workflow automation.
- Technical skills and certifications with concise coverage summaries.
- Recommendations from managers and colleagues, with expandable full text.
- A little about me outside work: Brazilian Jiu-Jitsu, chess, and gaming.

## Built with

Static HTML, CSS, and JavaScript, hosted on Cloudflare Pages. The design uses dark slate surfaces, muted teal accents, DM Sans, and IBM Plex Mono.

- **Typed.js 2.1.0** for the hero typewriter effect.
- **Lucide 0.468.0** for SVG icons.
- **BrowserSync** for local development and live reload.

The site has no framework or production build requirement. It includes responsive layouts, keyboard focus styles, a skip link, and reduced-motion support. Fonts and browser libraries load from public CDNs; core page content remains available if those services are unavailable.

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

## Branding and interaction

- Deep slate background: `#0b1219`
- Mint/teal accent: `#9bdcc9`; secondary teal: `#74aa9c`
- Headline font: DM Sans; terminal UI: IBM Plex Mono
- Typed.js 2.1.0 for hero typewriter effect
- Lucide 0.468.0 for icons
- Hover-character highlighting on the hero headline
- Responsive navigation, motion-reduction support, and no framework/build dependencies

Dependencies are loaded from public CDNs. An active internet connection is required for those effects/fonts; the content remains visible if they are unavailable.

## Project documentation

Project cards currently provide overviews; detailed case studies will be added as they are ready. Professional examples are kept sanitized and non-confidential.
