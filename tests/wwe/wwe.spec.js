//.element/buttons

import { test, expect } from '@playwright/test';

// test('user can login with valid credentials', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').dblclick();
//   await expect(page.locator('[data-test="title"]')).toBeVisible();
//   await page.locator('//a[@id="item_4_title_link"]').dblclick()
// });

//2.Text   --------------------------------------------------------------------


// test('user can login with valid credentials', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   //.pressSequentially   - letter will be filled sequentially
//   await page.locator('[data-test="username"]').pressSequentially('standard_user',{delay : 2000});
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').dblclick();
//   await expect(page.locator('[data-test="title"]')).toBeVisible();
//   await page.locator('//a[@id="item_4_title_link"]').dblclick()
// });

//3. checkbox   --------------------------------------------------------------------------

// test('user can login with valid credentials', async ({ page }) => {
//  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//  await page.locator('//input[@id="checkBoxOption1"]').check()

//  await page.waitForTimeout(2000)

//  await page.locator('//input[@id="checkBoxOption1"]').uncheck()

// })


// test('user can login with valid credentials', async ({ page }) => {
//  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


// const checkboxes = ['#checkBoxOption1','#checkBoxOption2','#checkBoxOption3']

// for ( let checkbox of checkboxes){

//  await page.locator(checkbox).check()

//  await page.waitForTimeout(2000)

//  await page.locator(checkbox).uncheck()
// }

//5.Dropdown -------------------------------------------------------------------

// test('user can login with valid credentials', async ({ page }) => {

//  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//  await page.locator('//select[@id="dropdown-class-example"]').selectOption('Option1')


// })




// 6.Alert

test('handle simple alert', async ({ page }) => {

  await page.goto('https://demoqa.com/alerts');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.click('#alertButton');

});
