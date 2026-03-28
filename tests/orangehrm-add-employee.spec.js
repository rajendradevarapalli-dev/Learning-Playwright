import { test, expect } from '@playwright/test';

// This test automates adding an employee in the OrangeHRM demo app without using POM or codegen.
// It uses the credentials shown on the login page (Admin / admin123).

test('Add employee and verify in employee list', async ({ page }) => {
  // 1) Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // 2) Navigate to PIM > Add Employee
  await expect(page).toHaveURL(/.*\/dashboard\/index/);
  await page.locator('a[href*="/pim"]', { hasText: 'PIM' }).click();
  await page.locator('//a[text()="Add Employee"]').click();

  // 3) Fill employee details
  await page.locator('input[name="firstName"]').fill('Rajendra');
  await page.locator('input[name="lastName"]').fill('Devarapalli');
  await page.locator('button[type="submit"]').click();

  // 4) Verify the new employee exists in the employee list
  await page.locator('a[href*="/pim/viewEmployeeList"]').click();
  await page.locator('input[placeholder="Type for hints..."]', { has: page.locator('label', { hasText: 'Employee Name' }) }).fill('Rajendra Devarapalli');
  await page.locator('button[type="submit"]').click();

  // The table row should contain the full name
  const row = page.locator('div[role="rowgroup"] >> text=Rajendra Devarapalli');
  await expect(row.first()).toBeVisible();
});