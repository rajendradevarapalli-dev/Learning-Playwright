/*=================================================================================
import { test, expect } from '@playwright/test';

import data from "./../testdata/login.json";

let empstatuses = {

    empstatus1: 'Village Surveyor Gr3',
    empstatus2: 'Village Surveyor Gr2',
    empstatus3: 'Village Surveyor Gr1'
     
}

 for (let statuses in empstatuses){

test(`User can update employement status-${statuses}`, async ({ page }) => {

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
    
   
     await page.locator("//label[normalize-space(text())='Name']/following::input").fill(empstatuses[statuses]);



   
    // Click on Save button
    await page.locator("button[type='submit']").click()
    //Dashboard URL check for employemnt satus
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus");


    //await page.close()
     

})
 }
=================================================================================*/

// Add JOB TITLE 

/*
import { test, expect } from '@playwright/test';

let jobtitles ={
    Jobtitle1: 'Developer',
    Jobtitle2: 'Tester',
    Jobtitle3: 'Project Manager'

}

for (let jobtitle in jobtitles){

test(`Creating job title by using data driven testing- ${jobtitle}`, async ({ page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
    await page.locator('//a[contains(.,"Admin")]').click();
    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click();
    await page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[1]').click();
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    //await page.expect(page.locator('//h6[text()="Add Job Title"]')).toBeVisible();
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobtitles[jobtitle]);
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click();





})
}           

=========================================================================================*/


// Add Employee 

import { test, expect } from '@playwright/test';

let empdetails = {
     
    emp1: {firstname: 'Bill', Lastname: 'Gates'},
    emp2: {firstname: 'Elon', Lastname: 'Musk'},
    emp3: {firstname: 'Steve', Lastname: 'Jobs'},

}

for (let empdata in empdetails){

test(`Adding new employee by using data driven testing- ${empdata}`, async ({ page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
    await page.locator('//a[contains(.,"PIM")]').click();
    await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click();
    await page.locator('//input[@placeholder="First Name"]').fill(empdetails[empdata].firstname);
    await page.locator('//input[@placeholder="Last Name"]').fill(empdetails[empdata].Lastname);
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible();




});

}
