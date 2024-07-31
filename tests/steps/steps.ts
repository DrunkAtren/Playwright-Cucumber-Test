const { Given, When, Then} = require('@cucumber/cucumber');
import { Page, chromium, Browser, expect } from '@playwright/test';

let page:Page
let browser:Browser



Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto("https://www.google.com/");
  });

Given('User accepts cookies', async function () {
  await page.getByRole('button', { name: 'Acceptă tot' }).click();
});

Given('User enter search term {string}', async function (string: string) {
  await page.getByLabel('Caută', { exact: true }).fill(string);
});

When('User click on search button', async function () {
  await page.getByRole('button', { name: 'Căutare Google' }).click();
});

Then('Browser will show results', async function () {
  
});
