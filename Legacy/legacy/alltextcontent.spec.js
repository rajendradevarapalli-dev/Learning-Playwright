

import { test, expect } from '@playwright/test';

const credentials = [ "Admin","admin123"]

test('User can login with credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill(credentials[0]);

  await page.getByRole('textbox', { name: 'Password' }).fill(credentials[1]);

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(5000);

   const modules = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents();

   console.log(modules);

    expect(modules.length).toBe(12)

    expect(modules).toContain("Buzz")

})