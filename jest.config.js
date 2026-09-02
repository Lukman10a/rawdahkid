/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["**/lib/**/*.test.ts", "**/hooks/**/*.test.*", "**/components/**/*.test.*"],
  collectCoverage: false,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "hooks/**/*.{ts,tsx}", "!lib/**/*.test.*", "!**/*.d.ts"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
    "./lib/enrolmentStorage.ts": {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
