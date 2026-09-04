# Enrol & Payment Finalization — Plan & Progress Tracker

> **Goal:** Make enrol + payment dead-simple. Keep **Book a Free Consultation Call** (`https://calendly.com/markazulbayaan`) as strongest CTA, keep `Enrol Now` secondary. Replace fragile Paystack-only flow with easy provider abstraction. Ship with TDD (red → green → refactor) + Matt Pocock Total-TypeScript guardrails.

- **Owner:** Lukman10a / LUXA
- **Branches:** `main` (now at `73548b4` — includes `history`/`ai`/`english` western courses), `cleanups` (source)
- **Stack:** Next.js 16, `next-intl`, `zod`, `zustand`, `axios` → `/api` proxy → `https://rawdoh.pxxl.click/api`, `vitest` + `msw` (new), `playwright` (e2e)
- **Method:** `mattpocock/skills@tdd` (822k installs) — `red → green → refactor`, `expectTypeOf`, branded types, never write prod without failing test.

---

## Current Flow (Audited 2026-09-02)

**Fees (`app/[locale]/fees/page.tsx:1`, `BundlesSection.tsx:34`, `AlaCarteSection.tsx:29`, `FeesModals.tsx:91`, `fees/types.ts:1`)**
- 3 bundles hard-coded: Islamic `4500/7500`, Western `6000/15000`, Dual `8925/19125` (15% off baked in, not computed). AlaCarte 12 courses `$800`/`$1500` info-only (no `onSelectPlan`).
- `handleSelectPlan → FeesModals register_required → verify getRegisteredEmails() → saveSelectedPlanInDraft() → router.push("/enrol#registration-form")` vs `?resume=payment`.

**Enrol (`app/[locale]/enrol/page.tsx:10`, duplicate `page_clean.tsx`, `hooks/useEnrolFlow.ts:26` 336 lines, `EnrolmentModals.tsx:90`, `sections/*`, `types.ts:3`)**
- Hydrates `getDraft()` + `?resume=payment` + `getRecordByEmail(currentUserEmail)` → `modalState details_summary` else `idle`. Auto-saves draft on every keystroke `76`.
- `validateForm()` `122` only checks required + email regex + phone `^[\d\s-]*$`, blocks `one-on-one` hard-string `150`, no age range, no courses required, `isFormValid` dead code `(!isFormValid && false)`.
- `handleSubmit` `180` → `mapFormDataToRegisterPayload` `registration/types.ts:118` (ignores `parentCountry`, `cityCountry=parentCity`) → `POST /api/register` → `saveRegisteredEmail` → `success` → `details_summary` → `payment_config` (`PaymentConfig frequency/students` `fees/types.ts:14`) → `payment_overview` (`calculatePaymentTotals` `enrolmentStorage.ts:203` `annual:base*students`, `semester:base/3`, `monthly:base/12`, `Math.round`, **discount always `0%`**) → `handleFinalizePayment` `234` `amount=Math.round(totals.total)` → `POST /api/payment/initialize {email,amount}` → `getPaymentRedirectUrl` `73` → `window.location.assign` (Paystack) + `upsertRecord(true)` optimistic before redirect.

**Storage (`lib/enrolmentStorage.ts:34` 4 keys) & API (`lib/api/http.ts:8` axios 15s, `payment/types.ts:1`, `registration/types.ts:3`, `app/api/{register,payment/initialize}/route.ts:10` 502 proxy)**

**Gaps:** duplicate page, AlaCarte dead-end, discounts not wired, `phoneNumber` ignores country, `cityCountry` lossy, age 0 fallback, no server amount validation, optimistic `paymentCompleted`, no webhook, no rate-limit, `failureReason === t(...)` fragile, no focus trap, `isFormValid` misleading.

---

## Target Simplified Flow

```
Fees: [Book a Free Consultation Call (gold, calendly)]  [Pay Now (Stripe/Flutterwave Link)]  [Enrol for Discount (ghost)]
         ↓                                       ↓                          ↓
     Calendly → human close → manual invoice   Direct Stripe Link → success → WhatsApp group   Enrol form → registerStudent → optional Pay Now
```
- **Book** is strongest everywhere (hero, navbar, floating, footer, Fees banner, programme heroes).
- **Pay Now** = Stripe Payment Links (or Flutterwave if Nigeria-only) — 0 code, `?prefilled_email=`, no backend for MVP.
- **Enrol** kept for sibling/payment discounts, but not required before pay. `localStorage` draft only, not source-of-truth.

**Payment abstraction:** `lib/api/payment/types.ts:1` → `type PaymentProvider = "paystack"|"stripe"|"flutterwave"`; `initializePayment` branches, `getPaymentRedirectUrl` handles `url` for all.

---

## Phases & Checklists

### Phase 0 — Clarify (1h, needs owner input) — **DONE 2026-09-02**
- [x] Confirm: **Both options** — one-time per term **and** recurring monthly (owner: “Both options”)
- [x] Paystack pain = **Setup & KYC** (owner: “Setup & KYC” → use Stripe/Flutterwave Payment Links, no KYC code, avoid Paystack API)
- [x] Keep `localStorage` draft or move to **DB (Supabase/Firebase)** for cross-device (owner: “Move to database”)
- [x] Require `parentCountry` dial concat for `phoneNumber` → **Yes full international** (owner: “Yes full international”)
- [x] **Decisions locked → proceed to Phase 1**

### Phase 1 — TDD Groundwork + Guardrails (1 day) — **RED + GUARDRAILS DONE 2026-09-02**
- [x] `npx skills add mattpocock/skills@tdd -g -y` → installed to 7 agents (universal) — `.agents/skills/tdd` (822k)
- [x] `npm i -D vitest@2.1.8 → jest@30 + ts-jest + jest-environment-jsdom + @testing-library/* + msw + jsdom + expect-type + husky` — vitest fails on Windows Node 24 `compileSourceTextModule` empty `client-only` ESM, **switched to jest** as primary (`jest.config.js` `preset: ts-jest`, `jsdom`, `moduleNameMapper @/*`, `testMatch`, `coverageThreshold` 80% + `lib/enrolmentStorage.ts:80%` per-file)
- [x] `jest.config.js` hardened: `collectCoverageFrom`, per-file `lib/enrolmentStorage.ts` 80%, `package.json:10` scripts → `typecheck: tsc --noEmit`, `lint: eslint --max-warnings 0`, `test: jest --runInBand`, `test:ci: jest --runInBand --coverage`, `prepare: husky install`
- [x] `vitest.setup.ts` + `jest.setup.ts` (minimal, no `aria-query` — `eslint` ignores `scripts/**`), `types.d.ts:5` `declare module "lucide-react"` (fixes `tsc` with `skipLibCheck`), `eslint.config.mjs:9` `globalIgnores` adds `coverage/**`, `scripts/**`
- [x] Branded types: `lib/types/branded.ts:3` `Email`, `Cents`, `PlanId`, `toEmail`, `toCents`, `isValidEmail` + `expectTypeOf` via `expect-type` (Matt Pocock `not.toEqualTypeOf`)
- [x] **Red tests (20 total, 10 fail as intended, `tsc` 0, `jest` RED):**
  - [x] `lib/enrolmentStorage.test.ts:17` annual 10% (`4500→4050` got `4500`), semester 5% (`1500→1425`), sibling — RED
  - [x] `lib/api/registration/types.test.ts:33` phone `234` / city `NG` — RED
  - [x] `lib/enrolmentStorage.validation.test.ts:38` age 3/25/abc + individual — RED
  - [x] `lib/api/http.test.ts:6` `toApiError` — 3 passed
- [x] **Guardrails enforced:** `npx tsc --noEmit` **0**, `npm run lint` **0 warnings** (fixed `knowledge-hub/[id]/page.tsx:19` `fallbackPost`/`let→const`, `lib/admin/types.ts:13` `any→unknown`, `lib/api/http.test.ts:6` unused `err`), `npx jest --runInBand` **10 fail / 10 pass**, `.github/workflows/ci.yml:1` (typecheck + lint + test:ci + tracker + Closes + build), `.husky/pre-commit` (`typecheck && lint && test:ci`) + `pre-push` (`scripts/check-tracker.js`), `docs/SPEC.md:1` (80-line how-we-write-code)
- [x] Next **GREEN** will fix `lib/enrolmentStorage.ts:203` discounts, `registration/types.ts:118` phone/city, `useEnrolFlow.ts:122` age/courses

### Phase 2 — Payment Abstraction (1 day)
- [ ] Refactor `lib/api/payment/types.ts` to provider union, keep Paystack legacy
- [ ] Add `lib/api/payment/stripe.ts` (`createCheckoutSession` or `getStripePaymentLink`) + `flutterwave.ts`
- [ ] `app/api/checkout/route.ts` proxy (if Checkout Sessions) or just static links
- [ ] **TDD:** `getPaymentRedirectUrl` handles `stripe url` + `paystack authorization_url`, `initializePayment` mock with `msw`, `toApiError` edge
- [ ] Keep `app/api/payment/initialize` for Paystack until Stripe links proven

### Phase 3 — Simplify UI (1 day)
- [ ] Delete `app/[locale]/enrol/page_clean.tsx` (duplicate)
- [ ] Wire `calculatePaymentTotals` discounts (Green), update `PaymentConfigModal`/`PaymentOverviewModal` to show discount
- [ ] `FeesPage` AlaCarte: add `onSelectPlan` or remove dead pricing, add `Book` + `Pay Now` to `BundlesSection` (keep 3 CTAs per card: Book gold, Pay Now secondary, Enrol ghost)
- [ ] `RegistrationFormSection` fix `isFormValid` disable, `StudentDetailsSection` age 5-18 validation, `ParentDetailsSection` phone concat
- [ ] `EnrolmentModals` remove optimistic `upsertRecord(true)` before redirect, add `reference` handling, fix `selectedPlanName` blank guard, fix `failureReason` regex fragility
- [ ] `Discount` UI actually wired to engine

### Phase 4 — Always-Book CTA (already done 2026-09-02)
- [x] Hero: Book primary gold + Explore ghost (`app/[locale]/page.tsx:108`)
- [x] Navbar dual: Book gold + Enrol ghost (`components/Navbar.tsx:131`)
- [x] Floating `BookCallFloating.tsx` mounted in `app/[locale]/layout.tsx:69`
- [x] Footer, Fees banner, Programme heroes, About CTA, Contact header, Enrol form banner
- [ ] Verify RTL + dark mode

### Phase 5 — Hardening & Ship (0.5 day)
- [ ] E2E Playwright `fees → enrol → pay` stubbed + Calendly link click
- [ ] Add `SECURITY` rate-limit to `app/api/*`, add webhook stub `app/api/payment/webhook/route.ts` (log `reference`)
- [ ] CI: `npm run test:ci` fails if coverage <80% on `lib/enrolmentStorage`
- [ ] Merge `cleanups` → `main` (already done `73548b4`), push, Vercel preview

---

## How This Doc Stays Updated

- **After each step:** check the box above, append dated entry to `## Log` below, `git commit -m "docs: update ENROL_PAYMENT_FINALIZATION"` and `git push`.
- **GitHub Issues:** This doc is source; run `gh issue create --title "..." --body "..."` for each unchecked box (see `## Issues`).
- **Source of truth:** This file + `git log --oneline --grep="TDD\|payment"` + Vitest coverage report.

---

## Log

- **2026-09-02 — Audited fees/enrol flows, merged `cleanups` western courses (`history`/`ai`/`english`) into `main` (`73548b4`), fixed Arabic UTF-8 mojibake (`152k` vs `304k`), hydration `suppressHydrationWarning`, and initial Book CTA mounting. Created this tracker.**
- **2026-09-02 — Created tracking doc `docs/ENROL_PAYMENT_FINALIZATION.md` and pushed to `main` (`0294bca`) + `cleanups` (`ce29902`). Generated 5 GitHub issues from phases.**
- **2026-09-02 — Issues created: #14 Phase 0 Clarify, #15 Phase 1 TDD Groundwork, #16 Phase 2 Payment abstraction, #17 Phase 3 Simplify UI, #18 Phase 5 Hardening. Doc will be updated after each phase (check boxes + dated log).**
- **2026-09-02 — Phase 0 DONE: Owner clarified — Both (one-time + recurring), Paystack pain = Setup & KYC → choose Flutterwave/Stripe Payment Links (no-code) + Calendly close, Move to DB (Supabase), Full international phone (`+countryDial + phone`). See #14.**
- **2026-09-02 — Phase 1 RED DONE: Installed `mattpocock/skills@tdd`, vitest 2/3 + jest 30 + jsdom + msw (vitest broken on Windows Node 24 `compileSourceTextModule` empty `client-only`, switched to jest). Created `jest.config.js` + `vitest.config.*` + `lib/types/branded.ts` + 4 RED test suites (20 tests, 10 fail as intended). `npx tsc --noEmit` passes, `npx jest --runInBand` shows RED. Next: Phase 1 GREEN (fix discounts, phone, age). See #15.**
- **2026-09-02 — Guardrails hardened: `package.json:10` `typecheck`/`lint --max-warnings 0`/`test:ci`, `jest.config.js:12` per-file `lib/enrolmentStorage.ts` 80%, `types.d.ts:5` `lucide-react`, `eslint.config.mjs:9` ignores `scripts/**`, `.github/workflows/ci.yml:1` (typecheck+lint+test+tracker+Closes+build), `.husky/pre-commit` + `pre-push` + `scripts/check-tracker.js`, `docs/SPEC.md:1` (80 lines). `npx tsc --noEmit` 0, `npm run lint` 0, `npx jest --runInBand` 10 fail RED. Closes #15 will be on GREEN.**
- **2026-09-03 — Registration repository (Supabase) DONE: choices Supabase + dual-write + Resend, scope registrations only, B) 409 duplicate + B2 resend, R1 throw, D1 upstream non-blocking. Added `@supabase/supabase-js`, `resend`, `@react-email/components`, `.env.example`, `lib/supabase/server.ts`, `lib/repositories/{errors,registration.repository}.ts`, `lib/validation/registration.ts`, `lib/services/registration.service.ts`, `lib/email/{resend,templates/registration-confirm}.tsx`, `supabase/migrations/001_registrations.sql`, rewrote `app/api/register/route.ts:1` with fallback proxy when Supabase env missing, fixed `lib/api/registration/types.ts:118` phone E.164 + cityCountry. Docs `docs/REGISTRATION_REPOSITORY.md`. Pending Supabase project creation + migration.**

---

## Issues

Created via `gh` on `Lukman10a/rawdahkid`:
- **#14** `Phase 0 — Clarify enrol & payment requirements` — https://github.com/Lukman10a/rawdahkid/issues/14
- **#15** `Phase 1 — TDD Groundwork + Matt Pocock guardrails` — https://github.com/Lukman10a/rawdahkid/issues/15
- **#16** `Phase 2 — Payment abstraction (Paystack → Stripe/Flutterwave Links)` — https://github.com/Lukman10a/rawdahkid/issues/16
- **#17** `Phase 3 — Simplify UI: fees/enrol wiring + discounts` — https://github.com/Lukman10a/rawdahkid/issues/17
- **#18** `Phase 5 — Hardening & Ship (E2E, rate-limit, CI)` — https://github.com/Lukman10a/rawdahkid/issues/18

Track via `gh issue list` or `docs/ENROL_PAYMENT_FINALIZATION.md`. After each step: `check box → append Log → git commit → git push`.

---

## References

- Matt Pocock TDD: `mattpocock/skills@tdd` (822k installs) + `grill-me`
- Current API: `https://rawdoh.pxxl.click/api` (`lib/api/http.ts:8`)
- Calendly: `https://calendly.com/markazulbayaan` (strongest CTA)
