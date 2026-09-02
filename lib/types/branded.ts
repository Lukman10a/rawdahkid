/**
 * Matt Pocock Total TypeScript Guardrails — Branded Types
 * Never use raw string/number for domain values. Use branded types to catch misuse at compile time.
 */

declare const __brand: unique symbol;
type Brand<T, B> = T & { readonly [__brand]: B };

export type Email = Brand<string, "Email">;
export type Cents = Brand<number, "Cents">;
export type PlanId = Brand<string, "PlanId">;

export function toEmail(value: string): Email {
  const normalized = value.trim().toLowerCase();
  // Zod will validate, this is just brand assertion
  return normalized as Email;
}

export function toCents(amountDollars: number): Cents {
  return Math.round(amountDollars * 100) as Cents;
}

export function fromCents(cents: Cents): number {
  return cents / 100;
}

// Guardrail: expectTypeOf usage in tests ensures branded types are not assignable to plain string/number
// Example test: expectTypeOf<Email>().toEqualTypeOf<string>() should fail
// Correct: expectTypeOf<Email>().toMatchTypeOf<string>() but not equal

// Helper to assert at runtime that Email is valid (for TDD red tests)
export function isValidEmail(email: string): email is Email {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
