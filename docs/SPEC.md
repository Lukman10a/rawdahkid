# Spec — How We Write Code (Rawdah)

> **One page.** Follow this when you touch any file. Violations fail CI.

---

## 1. TDD — Red → Green → Refactor

- **Never write prod without a failing test.** Use `mattpocock/skills@tdd` (`.agents/skills/tdd`).
- **Red:** `npm run test -- <file>` must show `FAIL` with the exact expectation for the fix (e.g., `calculatePaymentTotals annual 4500→4050`).
- **Green:** Minimal prod change to make test pass. No extra logic.
- **Refactor:** Clean up *after* green, keep tests green. Commit as `test: ...` + `fix: ...`.

**Run:**
```bash
npm run typecheck   # tsc --noEmit --strict (must pass)
npm run lint        # eslint --max-warnings 0 (must pass)
npm run test        # jest --runInBand (10 fail / 10 pass = RED)
npm run test:ci     # jest --runInBand --coverage (80% on lib/enrolmentStorage.ts)
```

---

## 2. Types — Total TypeScript Guardrails

- **Branded types** `lib/types/branded.ts:9` — `Email`, `Cents`, `PlanId` are `string & {__brand}`. Never pass raw `string` where `Email` expected.
- **Guard:** `expectTypeOf<Cents>().not.toEqualTypeOf<number>()` in `lib/enrolmentStorage.test.ts:8` — must stay.
- **Runtime:** `zod` for validation (`studentAge` 5-18, `programme` must have `selectedCourses` if `individual`). Types are `z.infer` sources, not manual.

---

## 3. Flow — Fees → Enrol → Pay

- **Fees** (`app/[locale]/fees/page.tsx:9`) owns `Plan` (`fees/types.ts:1`) + `saveSelectedPlanInDraft()` → `lib/enrolmentStorage.ts:158`.
- **Enrol** (`hooks/useEnrolFlow.ts:26`) hydrates `getDraft()` + `?resume=payment`, validates via `validateForm()` (`122`), submits via `mapFormDataToRegisterPayload()` (`registration/types.ts:118` must concat `parentCountry` dial + `phone`, `cityCountry` must include country), then `initializePayment()` (`payment/types.ts:1` → `PaymentProvider` union).
- **Payment:** `lib/api/payment` is the only place that knows Paystack vs Stripe/Flutterwave. UI never computes `amount` — use `calculatePaymentTotals()` (`enrolmentStorage.ts:203`) which must apply `annual 10%`, `semester 5%`, sibling 10/20/30%.

---

## 4. CTA — Book Always Wins

- **Strongest:** `https://calendly.com/markazulbayaan` — `Navigation.bookCall` (`messages/en.json:9`, `ar.json:9`). Hero primary gold, Navbar dual (Book gold + Enrol ghost), `BookCallFloating.tsx` (`app/[locale]/layout.tsx:69`) always visible, Footer/Fees/Programme/About/Contact/Enrol banners.

---

## 5. Commits & Issues — Auto-Close

- **Message:** `type: short subject Closes #X` — e.g., `fix: apply 10% annual discount Closes #15`. **No parentheses:** `( #15 )` does NOT close.
- **Tracker:** Always update `docs/ENROL_PAYMENT_FINALIZATION.md` Log + checkbox when `lib/**` changes. CI fails if `lib/` diff without tracker diff (`.github/workflows/ci.yml:24`).
- **Push:** `git push` must contain `Closes #X` on `main` to auto-close issue. Verify via `gh issue view X`.

---

## 6. File Rules

- **No duplicate** `page_clean.tsx` — delete, keep `page.tsx`.
- **No hard English** in `validateForm` — use `t("form.errors.*")`.
- **No optimistic** `upsertRecord(true)` before redirect — wait for webhook.
- **EOL:** `lf`, `utf-8`, `text` per `.gitattributes:2`, `.editorconfig`.

---

**References:** `mattpocock/skills@tdd` 822k, `lib/types/branded.ts:3`, `jest.config.js:12`, `.github/workflows/ci.yml:1`, `docs/ENROL_PAYMENT_FINALIZATION.md:1`
