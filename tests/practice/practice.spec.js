import { test, expect } from '@playwright/test';
import data from "../../testdata/login.json";
// test('Order samsung A55 from Amazon', async ({ page }) => {
//   await page.goto('https://www.amazon.in/ref=nav_logo');
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('samsung A55');
//   await page.getByRole('button', { name: 'Go', exact: true }).click({timeout :  60000});
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Galaxy A55 5G (Awesome Navy, 8GB RAM, 256GB Storage) | AI Mobile | 50MP Main' }).click();
//   const page1 = await page1Promise;
//   await page1.goto('https://www.amazon.in/Samsung-Awesome-Storage-Nightography-Corning/dp/B0CWPBBQ3M/ref=sr_1_1?crid=290611OFOUA0D&dib=eyJ2IjoiMSJ9.VX4cxGhWurW-XzBZia7-pVh9oMAjzF02ZuMVE3A11m_Q9JjRRc0FabNu1DExZsBw2xeZ_FxvIXdNWIRNifI5HRMAiDBpYKYpKOZwYF9ykHbEou-OgvudcalvO5KLD3RDANrwideUr1ulDbB8Xx8Szrx90HVBpFlK_P4sZ1HJm4V9V3zOX6Y6rONW3Nt9lXFXeGWVf95moPzNhAm8zSIpKwjg_NzTXzbb1RtNt0nfAN8.fDOz9963LsRwORvcZ4RK62RqvPLMNjGEbYs7ny4DnTc&dib_tag=se&keywords=samsung%2BA55&qid=1770963264&sprefix=samsung%2Ba55%2Caps%2C442&sr=8-1&th=1');
//   await page1.getByRole('button', { name: 'Add to cart' }).click();
//   await page1.goto('https://www.amazon.in/cart/smart-wagon?newItems=f3f594ab-ae20-4214-af3c-b5c95de4a38a,1&ref_=sw_refresh');
//   await page1.getByRole('link', { name: 'item in cart' }).click();
//   await expect(page1.locator('a').filter({ hasText: 'Opens in a new tab' }).nth(4)).toBeVisible();

// });

//   test('User can login with valid username and valid password', async ({ page }) => {
//   await page.goto('/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
//   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Invalid credentials' )).toBeVisible();
// });


//Manual scripting Practice


// test('Manual scripting for Crickbuzz', async({page}) =>{

//     await page.goto('https://www.cricbuzz.com');
//     await page.locator('//a[@title="T20 WC"]').click();
//     await page.locator('//a[@title="Table"]').click();
//     await page.waitForTimeout(40000);
//     await page.locator("(//div[contains(@class,'flex justify-center')]//button)[1]").click();
//     await expect(page.getByText('Opponent')).toBeVisible();
// })



test ( 'Practicing Locators',async({page}) =>{

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('//input[@placeholder="Username"]').fill('Admin')
  await page.locator('//input[@placeholder="Password"]').fill('admin123');
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  await expect(page.locator('//span [text()="Dashboard"]')).toBeVisible();
  //await page.locator('//span[text()="Admin"]').click();
  await page.locator('(//a[@class="oxd-main-menu-item"])[1]').click();
})





