// @ts-check
import { test, expect } from '@playwright/test';


test('Open site and fill form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.getByPlaceholder('Full Name').fill('Jakub Banas');

  await page.getByPlaceholder('name@example.com').fill('examplemail@gmail.com');

  await page.getByPlaceholder('Current Address').fill('Poland Paderewskiego 7B');

  await page.locator('#permanentAddress.form-control').fill('Poland Paderewskiego 7B');
});

test('Slider Test', async ({ page }) => {
  await page.goto('https://demoqa.com/slider');

  await page.getByRole('slider').fill('50');

});


test('Wait for bar (using timeout)', async ({ page }) => {
  await page.goto('https://demoqa.com/progress-bar');

  await page.getByRole('button', { name: 'Start' }).click();

  await page.waitForTimeout(10000)

  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
});





//npx playwright codegen <link strony>