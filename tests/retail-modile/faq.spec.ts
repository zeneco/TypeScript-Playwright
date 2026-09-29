import {test, expect } from '@playwright/test';

const faqQuestions = [
  'Как восстановить доступ для входа в мобильное приложение?',
  'Что такое RuStore и зачем его скачивать?',
  'Почему при скачивании файла в формате APK появляется сообщение о небезопасном источнике?',
  'Зачем обновлять приложение, если оно работает?',
  'Как понять, что приложение обновилось?',
  'Как узнавать об обновлениях в будущем?',
  'Что делать, если не получается самостоятельно скачать или обновить мобильное приложение?',
];

test("Проверка раскрытия элементов аккордеона в блоке FAQ", async ({page}) => {
    await page.goto('/', {waitUntil: 'domcontentloaded'});

    const mobileAppLink = page.getByRole('heading', { name : 'Мобильное приложение БСПБ'}).click();

    for (const question of faqQuestions) {
        await test.step(question, async () => {
        const button = page.getByRole('button', { name: question });
        const panel = page.getByRole('region', { name: question });

        await expect.soft(button).toHaveAttribute('aria-expanded', 'false');
        await button.click();
        await expect.soft(button).toHaveAttribute('aria-expanded', 'true');
        await expect.soft(panel).toBeVisible();
        });
    }
});