// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Assets imported via `*.asset.json` (logos, gallery images, hero videos) are hosted by
// Lovable and served from `/__l5e/assets-v1/*`. The config's asset-proxy plugin forwards
// those requests upstream, but only when LOVABLE_PREVIEW_HOST is set — otherwise they 404
// and the images render broken on a local `vite dev`. Default it to this project's preview
// host so local dev works out of the box; the Lovable sandbox sets it itself, and `??=`
// leaves any externally provided value alone. Dev-only: the plugin is `apply: "serve"`.
process.env.LOVABLE_PREVIEW_HOST ??= "id-preview--57e8c16e-73f7-49cd-9c9a-4182fa3c9ad5.lovable.app";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
