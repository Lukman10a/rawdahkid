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

### Phase 0 — Clarify (1h, needs owner input)
- [ ] Confirm: one-time per term or recurring monthly subscription?
- [ ] Paystack pain = KYC/payout vs code? (determines Stripe vs Flutterwave)
- [ ] Keep `localStorage` draft or move to DB (e.g., Supabase) for cross-device?
- [ ] Require `parentCountry` dial concat for `phoneNumber`?
- [ ] **Owner answers before P1**

### Phase 1 — TDD Groundwork + Guardrails (1 day)
- [ ] `npx skills add mattpocock/skills@tdd -g -y`
- [ ] `npm i -D vitest @testing-library/react @testing-library/jest-dom msw zod`
- [ ] `vitest.config.ts` (`environment: jsdom`, `setupFiles: ./vitest.setup.ts`), `package.json` scripts `test`, `test:watch`, `test:ci`
- [ ] Branded types: `type Email = string & {__brand:"Email"}`, `type Cents = number & {__brand:"Cents"}`, `expectTypeOf` in tests
- [ ] **Red tests (fail):**
  - [ ] `calculatePaymentTotals` with annual 10%/semester 5%/sibling 10-30%/Dual 15% → currently `0%`
  - [ ] `mapFormDataToRegisterPayload` phone + country concat, `cityCountry` includes country
  - [ ] `validateForm` age 5-18, `individual` requires ≥1 course
  - [ ] `normalizeEmail` trims/lower
- [ ] **Guardrail:** `tsc --noEmit --strict` + `eslint --max-warnings 0` in CI

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
- _Next: P0 clarify with owner, then P1 TDD groundwork._

---

## Issues

Track in GitHub via `gh issue create`. Example:
```bash
gh issue create --title "TDD: calculatePaymentTotals discounts" --body "Red test for annual 10% etc. See docs/ENROL_PAYMENT_FINALIZATION.md Phase 1" --label "tdd,phase-1"
```

---

## References

- Matt Pocock TDD: `mattpocock/skills@tdd` (822k installs) + `grill-me`
- Current API: `https://rawdoh.pxxl.click/api` (`lib/api/http.ts:8`)
- Calendly: `https://calendly.com/markazulbayaan` (strongest CTA)
