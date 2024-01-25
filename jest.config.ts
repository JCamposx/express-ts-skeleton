import type { Config } from "jest";

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: "v8",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  verbose: true,
  silent: true,
  testEnvironment: "node",
  detectOpenHandles: true,
};

export default config;
