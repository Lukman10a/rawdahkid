# Registration Repository — Supabase + Dual-Write + Resend

> Scope: `registrations` only (payments/students later). Server is source of truth, `localStorage` draft is UX cache only.
> Route: `POST /api/register` (`app/api/register/route.ts:1`, `runtime="nodejs"`)

## 0. Prerequisites (you have no Supabase project yet)

1. Create project: https://supabase.com -> New Project -> copy **URL**, **anon key**, **service_role key**
2. Env: copy `.env.example:1` to `.env.local` and fill `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (server-only, never `NEXT_PUBLIC_`), `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_REPLY_TO`, `LEGACY_UPSTREAM_SYNC=true`
3. Install: `npm i` (already added `@supabase/supabase-js`, `resend`, `@react-email/components`)
4. Migrate: Supabase Dashboard -> SQL Editor -> run `supabase/migrations/001_registrations.sql:1` **or** `npx supabase link --project-ref <ref>` then `npx supabase db push`
5. Resend: https://resend.com -> API Keys -> add domain `rawdahkids.org` DNS TXT, verify `EMAIL_FROM=noreply@rawdahkids.org`; dev fallback `onboarding@resend.dev` works without verification but only to verified recipients

## 1. Schema

`supabase/migrations/001_registrations.sql:1`

```sql
registrations(
  id uuid pk gen_random_uuid(),
  email text unique not null, -- normalizeEmail() lower/trim
  full_name text not null,
  phone_e164 text not null,   -- +dial+phone via lib/countries.ts + lib/api/registration/types.ts:118 fix
  city text, country_code text, -- parsed from cityCountry "Lagos, NG"
  child_name text not null, child_age int check (5..18),
  programme_interest text, class_format text,
  selected_courses jsonb default '[]',
  additional_info text, plan_id text,
  created_at/updated_at timestamptz, trigger set_updated_at()
)
```

RLS enabled, no anon access; `service_role` bypasses (admin dashboard later adds policies).

## 2. Repository Layer

```
lib/supabase/server.ts:1          createServiceClient() singleton, service_role, no session
lib/repositories/errors.ts:1      DuplicateEmailError(409), ValidationError(400), DbError(500) — R1 throw
lib/repositories/registration.repository.ts:1  RegistrationRepository { findByEmail, exists, create } — normalizeEmail, 23505 -> DuplicateEmailError
lib/validation/registration.ts:1  zod registrationSchema (age 5-18, phone E.164, individual requires courses)
lib/services/registration.service.ts:1 toE164(), dualWriteLegacy() D1, registerWithSideEffects() B2 helper
lib/email/resend.ts:1             sendRegistrationConfirmation() via Resend, EMAIL_FROM/REPLY_TO, escapeHtml, warns if key missing
lib/email/templates/registration-confirm.tsx:1 React email template (gold #C9A86A, Calendly CTA)
```

**Decisions locked:** `B) Reject duplicate 409`, `B2) Resend email on duplicate`, `R1) Throw typed`, `D1) Upstream non-blocking`

## 3. HTTP Contract

`POST /api/register` body (accepts both legacy `fullName/email/phoneNumber/cityCountry` and direct `parentName/parentEmail`):

```json
{ "fullName":"...", "email":"a@b.com", "phoneNumber":"080...", "parentCountry":"NG", "cityCountry":"Lagos, NG", "childName":"...", "childAge":10, "programmeInterest":"Dual Curriculum", "classFormat":"Group Class", "selectedCourses":[], "additionalInfo":"", "planId":null }
```

Responses:
- `201 {success:true, data: RegistrationRow, emailSent: boolean}` — created
- `409 {success:false, message:"Email already registered", emailSent, code:"DUPLICATE_EMAIL"}` — B/B2, also resends email
- `400 {success:false, message:"Age must be between 5 and 18"}` / missing fields / individual without courses
- `500 {success:false, message:"Database error"}` — DbError
- If `NEXT_PUBLIC_SUPABASE_URL` missing: warns and proxies to `API_SERVER_BASE_URL/register` legacy (so dev works before Supabase setup), preserves prior `502` on catch

Phone: `lib/api/registration/types.ts:118` `mapFormDataToRegisterPayload` now does `toE164` + `cityCountry: "city, countryCode"`. Route also normalizes `toE164(rawPhone, countryCode)` for direct callers.

## 4. Sequence

```
Form -> useEnrolFlow.handleSubmit -> POST /api/register (legacy payload via mapFormDataToRegisterPayload)
  -> validate (400) -> repo.create (409 on 23505) -> void dualWriteLegacy (D1 catch+log)
  -> await sendRegistrationConfirmation (false if RESEND_API_KEY missing, never throws) -> 201/409
  -> FailureModal continueExisting vs Success -> details_summary
```

Email failures never block `201`; duplicate still returns `409` but with `emailSent` flag for reminder.

## 5. Testing

- `jest.config.js:9` `**/lib/**/*.test.ts`
- Add `lib/repositories/registration.repository.test.ts` mock `@supabase/supabase-js` -> 23505 throws DuplicateEmailError
- Add `app/api/register/route.test.ts` (msw or jest.mock supabase/resend) -> 400 age, 409+tries email, 201+emailSent, legacy fallback when env missing, D1 still 201 on upstream failure

## 6. How to extend

Payments/students later: add `supabase/migrations/002_*`, `lib/repositories/payment.repository.ts` extending same `createServiceClient()` + `errors.ts` pattern. Keep repository free of email/dual-write; those stay in `lib/services/*`.

## 7. Tracker

Updated via `docs/ENROL_PAYMENT_FINALIZATION.md:105` Log. Run `npm run typecheck && npm run lint && npm run test:ci`.
