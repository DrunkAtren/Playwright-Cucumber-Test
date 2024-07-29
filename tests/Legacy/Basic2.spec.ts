// @ts-check
import { test, expect } from '@playwright/test';


test('Webtables', async ({ page }) => {
    await page.goto('https://demoqa.com/webtables');

    await page.getByRole('button', { name: 'Add' }).click();
  
    await page.locator('#firstName').fill('Stefan');

    await page.locator('#lastName').fill('Batory');

    await page.locator('#userEmail').fill('stefanbatory@gmail.com');

    await page.locator('#age').fill('45');

    await page.locator('#salary').fill('10000');

    await page.locator('#department').fill('South');

    await page.getByRole('button', { name: 'Submit' }).click();

    await page.evaluate(() => {
        window.scrollBy(0, 100);
    });
  });

  test('Modal Dialogs', async ({ page }) => {
    
    await page.goto('https://demoqa.com/modal-dialogs');

    await page.getByRole('button', { name: 'Small modal' }).click();

    await page.locator('#closeSmallModal').click();

    await page.getByRole('button', { name: 'Large modal' }).click();

    await expect(page.getByText('Lorem ipsum')).toBeVisible();

    await page.locator('#closeLargeModal').click();
  });

  test('Droppable', async ({ page }) => {
    
    await page.goto('https://demoqa.com/droppable');

    await page.locator('#draggable.drag-box').dragTo(page.getByLabel('Simple').locator('#droppable'));

  });

  test('Download', async ({ page }) => {
    
    await page.goto('https://demoqa.com/upload-download');

    await page.locator('#downloadButton').click();
  });

  test('Upload', async ({ page }) => {
    
    await page.goto('https://demoqa.com/upload-download');
    
    const [fileChooser] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        page.waitForEvent('filechooser'),
        // Opens the file chooser.
        page.locator('#uploadFile').click(),
      ])
      await fileChooser.setFiles([
        '/Apple/apple.jfif',
      ])

    await expect(page.getByText('apple.jfif')).toBeVisible()
  });

  test('Alerts', async ({ page }) => {
    
    await page.goto('https://demoqa.com/alerts');


    page.on('dialog', async (d)=> {

        await d.accept('Jakub');
    });

    await page.locator('#promtButton').click();


    page.on('dialog', async (d2)=> {

        await d2.accept;
    });

    await page.locator('#confirmButton').click();

    page.on('dialog', async (d3)=> {

        const text = d3.message();
        console.log(text);

        await expect(d3.message()).toContain('This alert appeared after 5 seconds')
    });

    await page.locator('#timerAlertButton').click();

    await page.waitForTimeout(5001);
    
  });