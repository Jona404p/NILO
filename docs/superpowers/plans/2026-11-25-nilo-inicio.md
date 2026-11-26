# NILO Initial Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a minimal, runnable NILO project using Node.js, Next.js App Router, React, and TypeScript.

**Architecture:** Scaffold a standard Next.js application in the workspace root, preserving the approved design document already in `docs/`. Replace the generated sample page with a neutral NILO-ready placeholder; keep Turbopack bounded to the project root and do not add product flows or UI libraries.

**Tech Stack:** Node.js, Next.js (stable), React, TypeScript, npm, ESLint.

**Spec:** `docs/superpowers/specs/2026-11-25-nilo-inicio-design.md`

## Global Constraints

- Use Node.js, Next.js, React, and the App Router, with TypeScript and the values recommended by Next.js for a new application.
- Keep the initial structure simple and provide scripts for development, build, and execution.
- Do not create the presentation page, chat, WhatsApp integration, merchants, CoDi/payments, authentication, or AI logic.
- Do not add Radix components or a theme library in this stage; add Radix when concrete interface components are defined.
- Use the stable Next.js version compatible with the project's Node.js requirement.
- Keep the local startup verifiable using the project's scripts.

## Review Focus

- The declared Node.js minimum must be compatible with the generated Next.js version; verify the `engines.node` value and local Node version.
- A clean install must reproduce dependencies from the lockfile; run `npm ci`.
- The root route must render the intended minimal NILO placeholder; request it from the running development server.
- TypeScript and ESLint errors must not be hidden; run the generated lint script.
- Production compilation must succeed; run the generated build script.

---

### Task 1: Scaffold the minimal NILO application

**Files:**
- Create: `package.json` and `package-lock.json`
- Create: Next.js configuration, TypeScript configuration, ESLint configuration, and `.gitignore`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, and the default public assets
- Modify: `README.md` with the actual Node.js and npm startup instructions
- Preserve: `docs/superpowers/specs/2026-11-25-nilo-inicio-design.md`

**Interfaces:**
- Consumes: The approved design at `docs/superpowers/specs/2026-11-25-nilo-inicio-design.md`.
- Produces: An npm application with `dev`, `build`, `start`, and `lint` scripts; a Next.js App Router root route at `/`; and a declared Node.js engine compatible with the generated Next.js version.

- [x] **Step 1: Scaffold Next.js in the project root without removing the approved design**

The workspace directory is named `NILO`, which is not a valid npm package name. Run the stable `create-next-app` generator in a temporary lowercase `nilo/` subdirectory with TypeScript, ESLint, App Router, `src/`, npm, no Tailwind setup, and `--disable-git`; then merge its generated contents into the workspace root and remove only that generated subdirectory. Preserve the existing `docs/` tree and do not overwrite or delete the approved spec.

- [x] **Step 2: Replace the generated sample route with a minimal NILO placeholder**

Before editing the generated page, run a root-route smoke assertion for `Base inicial lista.` and observe it fail. Then in `src/app/page.tsx`, render only the heading `NILO` and the short status text `Base inicial lista.`. Set the document title to `NILO` and the document language to `es-MX` in `src/app/layout.tsx`; use the existing system font rather than the generated remote Google fonts. Keep the generated app structure and avoid product copy, chat controls, or Radix imports.

- [x] **Step 3: Declare the compatible Node.js requirement**

In `package.json`, set `engines.node` to the minimum supported by the generated stable Next.js version. Confirm the local Node version satisfies it, then update `README.md` to document that requirement and the npm development, lint, build, and start commands.

- [x] **Step 4: Verify a clean dependency install and lint**

Run: `npm ci && npm run lint`

Expected: dependencies install from `package-lock.json`, and ESLint exits successfully.

- [x] **Step 5: Verify the production build**

Run: `npm run build`

Expected: Next.js completes the production build and TypeScript checks successfully.

- [x] **Step 6: Verify the local start and root route**

Run: `npm run dev`, then request `http://localhost:3000/`.

Expected: the response succeeds and contains `NILO` and `Base inicial lista.`. Stop the development server after verification.
