const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "." });
const customJestConfig = {
    testEnvironment: "jsdom",
    clearMocks: true,
    moduleDirectories: ["node_modules"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
};

module.exports = createJestConfig(customJestConfig);
