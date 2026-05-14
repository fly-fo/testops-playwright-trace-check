import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['line'],
    ['allure-playwright', {
      resultsDir: 'allure-results'
    }]
  ],
  use: {
    browserName: 'chromium'
  }
});
