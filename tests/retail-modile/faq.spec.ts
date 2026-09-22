import {test, expect } from '@playwright/test';

test("Проверка раскрытия элементов аккордеона в блоке FAQ", async ({page}) => {
    await page.goto('/', {waitUntil: 'domcontentloaded'});

    const mobileAppLocator = page.getByRole('heading', { name : 'Мобильное приложение БСПБ'});
    
    await mobileAppLocator.hover();
    await mobileAppLocator.click();
    
    const faqPage = page.getByRole('heading', { name: 'Как восстановить доступ для входа в мобильное приложение?'});
    await faqPage.click();

    const faqPageRustore = page.getByRole('heading', { name: 'Что такое RuStore и зачем его скачивать?'});
    await faqPageRustore.click();

    

})