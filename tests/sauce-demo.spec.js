import { test, expect } from '@playwright/test';

test('Sauce Demo Test', async ({ page }) => {
    // Launch the URL
    await page.goto('https://sauce-demo.myshopify.com/');

    // Verify items are showing
    const productLinks = page.locator('a[href*="/products/"]');
    await expect(productLinks.first()).toBeVisible();

    // Select any one item (first product)
    await productLinks.first().click();

    // Add to cart
    await page.getByRole('button', { name: 'Add to Cart' }).click();

    // Wait for cart to update
    await page.waitForTimeout(2000);
    await expect(page.locator('#cart-target-desktop').filter({ hasText: '(1)' })).toBeVisible();

    // Verify the cart whether selected item is added
    await page.getByRole('link', { name: 'Check Out' }).click();
    await expect(page.locator('h3').filter({ hasText: 'Grey jacket' })).toBeVisible();
});