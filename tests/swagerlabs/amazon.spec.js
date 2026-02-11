import { test, expect } from '@playwright/test';

test('order a product from amazon',async ({page}) => {

await page.goto('https://www.amazon.in/ref=nav_logo');
await page.locator("input[dir='auto']").click();
await page.locator("input[dir='auto']").fill('aatomic habits by james clear book');
await page.locator("input#nav-search-submit-button").click();
await page.locator("#a-autoid-4-announce").click();
await page.locator("span.nav-cart-icon.nav-sprite").click();
//await page.expect(page.locator("(//span[@data-a-updated='true']//span)[2]")).toBeVisible();
await expect(page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
await page.locator("input[aria-labelledby='sc-buy-box-ptc-button-announce']").click();

    
})