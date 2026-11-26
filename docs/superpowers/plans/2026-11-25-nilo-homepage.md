# NILO Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace NILO's placeholder with the approved welcome page and a manually selectable, remembered light/dark theme.

**Architecture:** Keep the page content server-rendered and isolate theme preference/toggling in a small client component. Use CSS custom properties with light as the default and a `data-theme="dark"` override on the root document; persist the choice in local storage without adding UI dependencies.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS Modules/global CSS, browser automation, npm.

**Spec:** `docs/superpowers/specs/2026-11-25-nilo-homepage-design.md`

## Global Constraints

- “Usar el tema claro como apariencia inicial y ofrecer un control manual para alternar entre claro y oscuro.”
- “Recordar la última preferencia de tema en el navegador de la persona.”
- “No crear un dashboard administrativo, catálogo, CTA de inicio, chat, búsqueda, recomendaciones, integraciones comerciales, WhatsApp, pagos/CoDi ni funciones de IA.”
- “No añadir Radix ni dependencias de interfaz externas para esta página.”
- “Mantener una composición responsive, legible y accesible por teclado.”
- Claro palette: `#153A43`, `#EDF5F2`, `#DDF277`, `#F27B5E`, `#48646A`.
- Oscuro palette: `#173A35`, `#F0F3DF`, `#C5D6C6`, `#D8EF77`.
- Keep `lang="es-MX"` and Node.js `>=20.9.0`.

## Review Focus

- An invalid stored preference should fall back to light rather than produce an unknown theme.
- If local storage is unavailable or throws, changing the theme should still work for the current page view.
- The native theme button should expose the next action and retain a visible focus outline; browser keyboard events could not be dispatched by the integrated test tool, so rely on native button keyboard semantics.
- A previously stored dark preference should apply after reload, and changing themes repeatedly should update the document and storage consistently.
- Dark-mode illustration colors should retain contrast, and the welcome composition should remain readable without horizontal overflow on narrow mobile screens.

---

### Task 1: Build the welcome page and remembered theme switch

**Files:**
- Create: `src/app/theme-toggle.tsx` — client-only theme state, accessible button, local-storage preference.
- Modify: `src/app/page.tsx` — server-render the approved welcome content and compose the theme control.
- Modify: `src/app/globals.css` — define light defaults, dark document variables, responsive reset and focus treatment; remove automatic OS dark override.
- Modify: `src/app/page.module.css` — replace generated starter styles with welcome layout, shopping-bag illustration, and mobile adaptations.
- Modify: `src/app/layout.tsx` — set NILO description metadata if needed, retaining `lang="es-MX"`.

**Interfaces:**
- Consumes: `docs/superpowers/specs/2026-11-25-nilo-homepage-design.md`.
- Produces: `ThemeToggle` React component in `src/app/theme-toggle.tsx`, mounting a native button that switches the root `data-theme` between `light` and `dark`, persists valid user choices under local-storage key `nilo-theme`, and uses light when no valid preference is available.
- Produces: Root route content with heading “Hola, soy Nilo.” and supporting text “Te ayudo a encontrar lo que buscas y elegir con más confianza.”; no CTA, secondary navigation, or chat.

- [x] **Step 1: Observe the welcome-route acceptance checks fail before implementation**

Start the dev server and use the browser on `/` to assert the current route does not yet contain “Hola, soy Nilo.” or the accessible theme-toggle action “Cambiar a modo oscuro”. Record both expected failures before editing production files.

- [x] **Step 2: Implement the theme-toggle client component**

Create `ThemeToggle` using React state and effects. Set the root document's `data-theme` to `light` initially; on mount, read only `light` or `dark` from `localStorage` key `nilo-theme`, otherwise keep light. On activation, update the current document and state regardless of storage availability; persist the selected valid value when storage is available. The native button's accessible name must describe the next action: `Cambiar a modo oscuro` in light mode and `Cambiar a modo claro` in dark mode. Do not follow `prefers-color-scheme`.

- [x] **Step 3: Implement the approved welcome page and styles**

Render the wordmark `nilo`, theme control, heading and supporting copy. Recreate the bag illustration with CSS (no external image or library); use the exact palette from the spec. Place greeting first and illustration beneath it on mobile. Keep the text left-aligned, omit all CTA/navigation/chat UI, and give the theme button a visible keyboard focus style. Define dark colors only under the root `data-theme="dark"` selector, so first visit is light.

- [x] **Step 4: Verify behavior in the browser, including Review Focus cases**

On `/`, verify light is the initial theme even when the OS prefers dark, the greeting is present, and no CTA/chat is rendered. Verify the native button's accessible name and focus outline; use browser interaction to verify dark colors, updated accessible name, and `localStorage["nilo-theme"] === "dark"`; reload and verify dark is restored; switch back to light and verify it is persisted. In browser storage, verify an invalid value falls back to light. Verify the dark bag fill is `#D8EF77` with a contrasting `#F0F3DF` handle, toggling still works when storage access is unavailable, and the page has no horizontal overflow at a narrow mobile viewport. Do not claim a direct key-event test: the integrated browser tool did not deliver key events, but the control is a native HTML button with standard keyboard semantics.

- [x] **Step 5: Run lint and production build**

Run: `npm run lint && npm run build`

Expected: ESLint exits successfully and Next.js completes production compilation and TypeScript checks.
