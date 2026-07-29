# Deploying to Hostinger

The site builds to a folder of plain HTML, CSS, JS and media. There is no Node
process in production — Hostinger's shared hosting serves the files directly.

## Build

```bash
npm install
npm run build
```

Output lands in `dist/client/`. Every route is prerendered to its own
`index.html`, so each page is real HTML for search engines, and the app hydrates
into a client-side router after load.

By default `sitemap.xml` is generated against `https://fortunersgroup.com`. To
build for a different origin:

```bash
SITE_URL=https://staging.example.com npm run build
```

## Upload

1. hPanel → **Files** → **File Manager**
2. Open `public_html` and delete whatever is already in it
3. Upload `fortunersgroup-hostinger.zip`
4. Right-click the zip → **Extract** → extract into `public_html`
5. Delete the zip

Files must land at the top level of `public_html` — `public_html/index.html`,
not `public_html/dist/client/index.html`.

To regenerate the zip after a rebuild, from the project root:

```powershell
powershell -Command "Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem; \
  $src=(Resolve-Path 'dist\client').Path; $zip=Join-Path (Get-Location) 'fortunersgroup-hostinger.zip'; \
  if (Test-Path $zip) { Remove-Item $zip -Force }; \
  $z=[System.IO.Compression.ZipFile]::Open($zip,'Create'); \
  Get-ChildItem $src -Recurse -File -Force | ForEach-Object { \
    $rel=$_.FullName.Substring($src.Length+1).Replace('\','/'); \
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($z,$_.FullName,$rel,'Optimal') | Out-Null }; \
  $z.Dispose()"
```

Don't use `Compress-Archive` — on Windows PowerShell 5.1 it writes backslash
path separators, and Hostinger's Linux unzip then creates files literally named
`about\index.html` instead of an `about/` folder.

## .htaccess

`public/.htaccess` is copied into every build. It handles the HTTPS redirect,
gzip, cache headers, security headers and the 404 fallback.

**If you upload before Hostinger's free SSL certificate is active, comment out
the HTTPS redirect block** or the site will redirect-loop.

Hashed files under `/assets/` are cached for a year (safe — a change produces a
new filename). HTML is never cached hard, so a redeploy is visible immediately.

## Lead capture

Contact, Enquire Now and Channel Partner forms post from the browser to
FormSubmit, which emails `hello@fortunersgroup.com`.

**FormSubmit needs a one-time activation.** The first submission after going
live sends a confirmation email to that inbox — someone must click the link in
it. Until then submissions are accepted but never delivered. Send one test
enquiry after the first upload and confirm it arrives.

To change the recipient, edit `LEAD_INBOX` in `src/lib/submit-lead.ts` (the new
address needs its own activation).

## What is not in the static build

The AI chatbot was removed. It needed a server route (`/api/chat`) plus a
Lovable AI gateway key, and shared hosting cannot run either. Restoring it means
hosting that endpoint elsewhere — a Supabase Edge Function or a Cloudflare
Worker — and pointing the client at its URL.
