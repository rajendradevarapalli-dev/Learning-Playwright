import { test, expect } from '@playwright/test';

test('User can login with credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('//input[@placeholder="Username"]').fill('Admin')
  await page.locator('//input[@placeholder="Password"]').fill('admin123')
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
  })


  //input[@name="username"]