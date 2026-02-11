import { test, expect } from '@playwright/test';

import data from "./../testdata/login.json";
test('User can update employement status', async ({ page }) => {

    //Lauching URL
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     // Enter Username
     await page.locator("input[name='username']").fill(data.username);
    //Enter Password
     await page.locator("input[name='password']").fill(data.password);
     // Click the login button
     await page.locator("button[type='submit']").click();   
    // Dashboard URL verification
     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // Click on Admin button 
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[1]").click();
    // Click on Job menu 
    await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item']//i)[2]").click();
    //Click on employement status
    await page.locator("(//a[@role='menuitem'])[3]").click();
    //Click on Add button
    await page.locator("button.oxd-button.oxd-button--medium").click();
    //enter any employee status
    let random = (Math.random() + 1).toString(36).substring(7);
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill('Village Surveyor Gr3'+random);
    // Click on Save button
    await page.locator("button[type='submit']").click()
    //Dashboard URL check for employemnt satus
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus");


    await page.close()
     


})