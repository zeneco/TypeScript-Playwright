import { test, expect } from '@playwright/test';

test("Переход на всплывающую вкладку 'Осень' ", async ({page}) => {
  await page.goto("https://www.bspb.ru/", {waitUntil: 'domcontentloaded'});

  //const depositsLocator = page.getByRole('group', {name: 'Вклады'});

  const nav = page.locator('nav').nth(1); // навигация с категориями продуктов
  const depositsLocator = page.getByText('Вклады', { exact: true });
  const autumnDeposits = page.getByRole('link', {name: 'Осень'}) ;

  await depositsLocator.hover();
  //await autumnDeposits.waitFor({state: 'visible'});
  //await autumnDeposits.click();

  await expect(page).toHaveURL('/osen/')
  
})
// import { test, expect } from '@playwright/test';

// test('Успешный переход в раздел кредитов с главной страницы', async ({ page }) => {

//   await page.goto('https://www.bspb.ru/', { waitUntil: 'domcontentloaded' });

//   const creditsNavLink = page.getByRole('link', { name: /^кредиты$/i }).first();
//   await expect(creditsNavLink).toBeVisible();
//   await creditsNavLink.click();

//   await expect(page).toHaveURL(/.*(credit|loan).*/);
// });