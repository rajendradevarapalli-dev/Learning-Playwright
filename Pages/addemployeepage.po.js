import { expect } from '@playwright/test';

export class addEmployeePage {

    constructor(page){
        this.page = page;
        this.pimMenu = page.locator('(//a[@class="oxd-main-menu-item"])[2]');
        this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.uploadImage = page.locator('//input[@type="file"]');
        this.employeeIDInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.personalDetails = page.getByRole('heading', { name: 'Personal Details' });

        this.firstnameErrorMsg = page.locator("(//span[text()='Required'])[1]")
        this.lastnameErrorMsg = page.locator("(//span[text()='Required'])[2]")

        this.employeeListLink = page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[1]')
        this.employeeNameSearchInput = page.locator('(//input[@placeholder="Type for hints..."])[1]')
        this.SearchButton  = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
        this.employeeNameSearchValidation = page.locator('(//div[@class="oxd-table-cell oxd-padding-cell"])[3]')
        this.employeeDetailsEditBtn = page.locator('(//button[@class="oxd-icon-button oxd-table-cell-action-space"])[1]')
        this.employeeDetailsDeleteBtn = page.locator('(//button[@class="oxd-icon-button oxd-table-cell-action-space"])[2]')

    }


    async navigateToAddEmployee(){
        await this.pimMenu.click();
        await this.addEmployeeLink.click();
    }

    async addEmployee(firstname, lastname, empid, filePath){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.employeeIDInput.fill(empid)
        await this.uploadImage.setInputFiles(filePath);
        await this.saveBtn.click();
    }

    async clickOnSave(){

        await this.saveBtn.click();
    }

    async verifyErrorMessages(){

       await expect(this.firstnameErrorMsg).toBeVisible()
       await expect(this.lastnameErrorMsg).toBeVisible()
    }

    async verifyEmployeeCreated(){
        await expect(this.personalDetails).toBeVisible({timeout: 35000});

    }

    async ValidatingEmployeeNameBySearch(firstname){

       await this.employeeListLink.click()
       await this.employeeNameSearchInput.fill(firstname)
       await this.SearchButton.click()
       //await this.ValidatingEmployeeNameBySearch.toBeVisible(firstname)

    }

    
    async employeeDetailsEdit(firstname){

    await this.employeeDetailsEditBtn.click();

    }


    
    async employeeDetailsDelete(firstname){

    await this.employeeDetailsDeleteBtn.click();

    }

}