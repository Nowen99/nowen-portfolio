# Portfolio project guidelines

## Scope and branding

- Preserve the Version 1 visual identity and all existing content unless the user explicitly requests a change.
- Keep the dark slate background (#0b1219), muted teal/mint accents (#9bdcc9 and #74aa9c), DM Sans typography, and IBM Plex Mono technical details.
- Maintain a clean, modern, developer-focused aesthetic and a lightweight, responsive site.
- Keep project and professional examples accurate, sanitized, and non-confidential.

## Implementation standards

- Make targeted edits; avoid unnecessary whole-file rewrites and unrelated cleanup.
- Retain the static HTML/CSS/JavaScript architecture. Do not introduce a framework or production build requirement without a demonstrated need.
- Reuse established libraries where appropriate, including the existing Typed.js and Lucide integrations.
- Preserve existing animations and functionality unless explicitly asked to change them.
- Prefer existing design tokens and component patterns. Keep new dependencies minimal and distinguish development tools from browser dependencies.
- Commit package-lock.json with dependency changes; never commit node_modules, credentials, or secrets.

## Accessibility and validation

- Preserve semantic landmarks, heading hierarchy, the skip link, visible keyboard focus, meaningful link names, and navigation ARIA state.
- Support keyboard and touch operation and prefers-reduced-motion. Keep essential content available when animation libraries fail.
- Check text contrast, readable type, zoom behavior, and horizontal overflow when changing visuals.
- Before proposing visual changes as ready, inspect rendered desktop and mobile layouts, including navigation, and test affected interactions. Check near the 1000px, 760px, and 430px breakpoints where relevant.
- Clearly report any browser verification limits; do not describe source inspection as rendered testing.
- Use checks appropriate to the change; avoid unnecessary tests for low-impact edits.

## Local development

- Use Node.js and npm. Run npm ci after cloning, then npm run dev.
- Preview at http://localhost:3000 over HTTP. BrowserSync reloads HTML/JavaScript changes and injects CSS updates when files are saved.
- Keep the server local to this computer; do not enable external tunnels or publish previews without the user's approval.
- Stop the server with Ctrl+C. The development server is not part of production hosting.
- The production site remains buildless, served from the repository root.

## Git and deployment

- main is the production branch for the GitHub-connected Cloudflare Pages project.
- Create a separate codex/<descriptive-name> branch from the appropriate current main baseline for each reviewable change. Never implement changes directly on main.
- Keep diffs focused and summarize changes and validation before requesting publication approval.
- Do not push any branch, merge a pull request, push to main, or deploy manually without explicit user approval for that action. Approval to edit locally is not approval to publish.
- After approval to push a feature branch, open a pull request targeting main. A feature-branch push can trigger Cloudflare preview deployments if enabled.
- Merge only after explicit merge approval. A merge to main triggers production deployment when the Cloudflare Git integration is configured accordingly.
- Do not change Cloudflare settings or assume account-side settings have been verified from repository files alone.
