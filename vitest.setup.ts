import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Matt Pocock guardrail: ensure DOM cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock next-intl minimal for tests that import components with useTranslations
// Individual tests can override via vi.mock if needed
