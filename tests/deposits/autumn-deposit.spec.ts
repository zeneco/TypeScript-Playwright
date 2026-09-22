import { test, expect } from '@playwright/test';

test("Переход на всплывающую вкладку 'Осень'", async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const depositsLocator = page.locator('nav').nth(1).getByText('Вклады', { exact: true });
  const autumnDeposits = page.getByRole('link', { name: 'Осень' }).and(page.locator('[href*="osen"]'));

  await test.step('Открыть меню "Вклады"', async () => {
    await depositsLocator.hover();
  });

  await test.step('Навести на пункт "Осень" в выпадающем меню', async () => {
    await autumnDeposits.hover();
    await autumnDeposits.waitFor({ state: 'visible' });
  });

  await test.step('Кликнуть по пункту "Осень" и проверить переход', async () => {
    await autumnDeposits.click();
    await expect(page).toHaveURL(/osen/);
  });
});
