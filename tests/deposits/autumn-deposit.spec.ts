import { test, expect } from '@playwright/test';

test("Переход на всплывающую вкладку 'Осень' ", async ({page}) => {
  await page.goto('/', {waitUntil: 'domcontentloaded'});
  
  const depositsLocator = page.locator('nav').nth(1).getByText('Вклады', { exact: true });
  
  const autumnDeposits = page.getByRole('link', {name: 'Осень'}).and(page.locator('[href*="osen"]'));
 
  await depositsLocator.hover(); 
  await autumnDeposits.hover();
 
  await autumnDeposits.waitFor({state: 'visible'});
  await autumnDeposits.click();

  await expect(page).toHaveURL(/osen/);
  
})