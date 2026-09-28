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

    const faqApkNotSave = page.getByRole('heading', { name: 'Почему при скачивании файла в формате APK появляется сообщение о небезопасном источнике?'})
    await faqApkNotSave.click();

    const faqWhyUpdateApp = page.getByRole('heading', { name : 'Зачем обновлять приложение, если оно работает'})
    await faqWhyUpdateApp.click();

    const faqUpdateApp = page.getByRole('heading', {name : 'Как понять, что приложение обновилось?'})
    await faqUpdateApp.click();

    const faqFutureUpdate = page.getByRole('heading', { name :'Как узнавать об обновлениях в будущем?'})
    await faqFutureUpdate.click();

    const faqDownloadOrUpdate = page.getByRole('heading', {name : 'Что делать, если не получается самостоятельно скачать или обновить мобильное приложение?'})
    await faqDownloadOrUpdate.click();

})