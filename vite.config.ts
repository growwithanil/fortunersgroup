// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Public origin of the deployed site. Used to build absolute URLs in sitemap.xml.
const SITE_URL = process.env.SITE_URL ?? "https://fortunersgroup.com";

export default defineConfig({
  // Nitro is off: its output layout (.output/) hides dist/server/server.js from
  // Start's prerender preview server, and its `static` preset fights Start's SSR
  // entry. Without it, Start builds its native dist/{client,server} layout and
  // the prerenderer writes finished HTML into dist/client — which is exactly what
  // uploads to Hostinger. dist/server is a build-time artifact, never deployed.
  nitro: false,

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },

    prerender: {
      enabled: true,
      // Follow in-page links so dynamic routes (/blog/$slug) get rendered too.
      crawlLinks: true,
      // Write /about as /about/index.html so Apache serves it without rewrite rules.
      autoSubfolderIndex: true,
      failOnError: true,
    },

    sitemap: {
      enabled: true,
      host: SITE_URL,
    },
  },
});
