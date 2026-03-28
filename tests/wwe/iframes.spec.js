import { test, expect } from '@playwright/test';

// test('Playwright Test Case - iframe', async ({ page }) => {


// await page.goto('https://jqueryui.com/checkboxradio/')

// await page.frameLocator('//iframe[@class="demo-frame"]').locator('//label[@for="checkbox-nested-1"]').click()


test('Playwright Test Case - iframe', async ({ page }) => {


await page.goto('https://jqueryui.com/checkboxradio/')

await page.frameLocator('//iframe[@class="demo-frame"]').getByRole('checkbox', { name: '2 Double' }).click();


})
