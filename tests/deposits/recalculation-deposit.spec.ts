import { test, expect } from '@playwright/test';

test('Пересчёт дохода при изменении суммы вклада', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  //лучше всегда идти вниз, начиная с родителя
  const amountInput = page.getByText('Сумма вклада').locator('..').getByRole('textbox');
  const incomeHeading = page.getByText('Доход').locator('..').getByRole('heading');

  await test.step('Получить значение дохода по-умолчанию', async () => {
    await expect(incomeHeading).toBeVisible();
  });

  const initialIncome = await incomeHeading.textContent();

  await test.step('Изменить сумму вклада', async () => {
    await amountInput.fill('501 000');
    
  });

  await test.step('Проверить пересчёт дохода', async () => {
    await expect(incomeHeading).not.toHaveText(initialIncome ?? ''); //проверяем, что сумма отличается от изначальной
  });
}); 