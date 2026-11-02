# Security dependency update

- [x] Inspect dependency declarations and the active Bun lockfile.
- [x] Upgrade only the affected TanStack dependency graph.
- [x] Verify patched Start resolutions and compatibility (three regression tests and frozen-lockfile installation passed).
- [x] Check automatic production-build diagnostics and the existing website flow (latest build OK; navigation, blog, and populated enquiry form verified).
- [x] Report exact changed files and Vercel deployment readiness, including verification limits (security fix ready for redeployment; hosted Vercel production build not available to verify here).