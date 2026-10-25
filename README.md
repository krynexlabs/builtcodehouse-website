# BUILTCODE HOUSE

> **Premium Digital Engineering Company Website**  
> Architecting and engineering high-scale SaaS platforms, distributed AI systems, and enterprise infrastructure for ambitious companies worldwide.

---

## ⚡ Tech Stack

- **React** (`^19.0.0`) — Component-driven declarative UI architecture
- **TypeScript** (`~5.7.2`) — Strict end-to-end type safety and interface definitions
- **Vite** (`^6.2.0`) — High-performance frontend build pipeline and local HMR runtime
- **Framer Motion** (`^12.4.7`) — Studio-grade micro-animations, scroll-spy, and spatial transitions
- **Three.js** (`^0.174.0`) — Custom WebGL particle networks and interactive 3D spatial canvas

---

## 🏛️ System Features & Architectural Modules

- **Homepage (`#hero`)** — Dynamic 3D particle canvas, precision telemetry badges, client social proof ticker, and interactive architectural navigation.
- **Capabilities (`#capabilities`)** — Comprehensive breakdown of digital product engineering, distributed AI systems, multi-tenant SaaS platforms, and enterprise modernization.
- **Why Us (`#trust`)** — Executive-grade differentiation matrix comparing BUILTCODE HOUSE vs. generalist web agencies and traditional consultancies.
- **Process (`#process`)** — 5-phase engineering methodology (Discovery & Specs, System Architecture, Iterative Sprints, Enterprise Hardening, Launch & Scale).
- **Work (`#work`)** — Interactive enterprise case studies with metric badges, technical stacks, architecture blueprints, and deliverable summaries.
- **Engagement Model (`#engagement`)** — Structured 4-pillar technical discovery framework (Discovery, Architecture Review, Scope Definition, Delivery Planning).
- **About (`#about`)** — Engineering culture, core operational philosophies, global delivery standards, and technical governance principles.
- **Insights (`#insights`)** — Magazine-grade editorial publications and whitepapers with an interactive, dedicated research paper reader modal (`WhitepaperModal`).
- **Contact (`#contact`)** — Ingestion pipeline with validation, client reference ID generation, direct mailto fallback, and API endpoint integration.
- **Security & Headers** — Zero-trust HTTP response headers, CSP configuration, SPA routing rewrites, and canonical technical SEO structure.

---

## 🚀 Installation & Local Development

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/krynexlabs/builtcodehouse-website.git
cd builtcodehouse-website
npm install
```

### 2. Start Local Development Server

```bash
npm run dev
```

The application will start locally at `http://localhost:5173/`.

---

## 🛠️ Production Build

To compile a minified, type-checked production bundle:

```bash
npm run build
```

This generates an optimized `dist/` directory with code splitting for Three.js, Framer Motion, and Lucide icons.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

### Option 1: Automatic Git Integration (Recommended)

1. Push your code to the GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/krynexlabs/builtcodehouse-website.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Select **"Add New..."** -> **"Project"**.
4. Import `krynexlabs/builtcodehouse-website`.
5. Framework Preset: **Vite** (auto-detected).
6. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

### Production Configurations Included

- `vercel.json` handles Single Page Application (SPA) rewrites to index.html and injects HTTP security headers:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `.vercelignore` prevents uploading development caches, git logs, and node_modules.

---

## 🌐 Custom Domain Setup (`builtcodehouse.com`)

1. In Vercel Project Settings, navigate to **Domains**.
2. Add your custom apex domain: `builtcodehouse.com` and subdomain: `www.builtcodehouse.com`.
3. Configure your DNS provider with the following records:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
4. SSL certificates are provisioned automatically via Let's Encrypt with automated renewal.

---

## 📄 License & Intellectual Property

© 2026 BUILTCODE HOUSE. All rights reserved. Confidential and proprietary software architecture.
