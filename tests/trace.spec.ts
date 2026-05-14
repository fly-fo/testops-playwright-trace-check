import { test, expect } from '@playwright/test';

test('check Playwright Trace Viewer support in TestOps', async ({ page, context }, testInfo) => {
  const tracePath = testInfo.outputPath('trace.zip');

  await context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true
  });

  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);

  await context.tracing.stop({
    path: tracePath
  });

  await testInfo.attach('Playwright Trace', {
    path: tracePath,
    contentType: 'application/vnd.allure.playwright-trace'
  });
});
