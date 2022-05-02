import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js" },
  collectCoverage: true,
  coverageReporters: ["json-summary"],
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["lib"],
};

export default config;
