// @ts-check

import { test, expect } from '@playwright/test';
const baseUrl = 'https://demoqa.com/swagger/#/'

test('Authorize', async ({ page }) => {
    await page.goto('https://demoqa.com/swagger/#/');

    await page.getByRole('button', { name: 'Authorize', exact: true }).click();

    await page.locator('input[name="username"]').fill('Stefan');

    await page.locator('input[name="password"]').fill('Vinetu10!');

    await page.locator('form').filter({ hasText: 'Basic authorizationBook Store' }).getByLabel('Apply credentials').click();

    await page.locator('div').filter({ hasText: /^Available authorizations$/ }).getByRole('button').click();

  });
