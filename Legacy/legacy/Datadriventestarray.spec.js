

import { test, expect } from '@playwright/test';


// const jobtitles = ["Suveyor Gr1","Suveyor Gr2","Surveyor Gr3"]

// jobtitles.forEach(element => {
    
// test(`Creating job title by using data driven testing- ${element}`, async ({ page}) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.locator('//input[@placeholder="Username"]').fill('Admin');
//     await page.locator('//input[@placeholder="Password"]').fill('admin123');
//     await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
//     await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
//     await page.locator('//a[contains(.,"Admin")]').click();
//     await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click();
//     await page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[1]').click();
//     await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
//     await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(element);
//     await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click();

// })


// });


const Addemployees = [{firstname: 'Devarapalli', Lastname: 'Rajendra'},
                   {firstname: 'Devrapalli', Lastname: 'Swetha'},
                   {firstname: 'Devarapalli', Lastname: 'Aadya'}]

Addemployees.forEach(element => {
    
test(`Adding new employee by using data driven testing- ${element.Lastname}`, async ({ page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
    await page.locator('//a[contains(.,"PIM")]').click();
    await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click();
    await page.locator('//input[@placeholder="First Name"]').fill(element.firstname);
    await page.locator('//input[@placeholder="Last Name"]').fill(element.Lastname);
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible();


})


});