import { test, expect } from '@playwright/test';
import {loginPage} from '../Pages/loginpage.po';
import {addEmployeePage} from '../Pages/addemployeepage.po';

import data from '../testdata/addemp.json'

import dotenv from 'dotenv';
dotenv.config();


    let login
    let addemp 



    test.beforeEach( async ({page}) =>{

        login = new loginPage(page)
        addemp = new addEmployeePage(page)
        await login.launchURL()
        await login.verifyLogo()
        await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
        await addemp.navigateToAddEmployee()

    })

    test("verify User can create Employee", async () => {
        test.slow()
        let randomchars = (Math.random() + 1).toString(36).substring(7);
        await addemp.addEmployee(data.firstname, data.lastname, randomchars, 'testdata/yash.png')
        await addemp.verifyEmployeeCreated()
    })


    test("verify error Message for Mandatory fields", async () => {
       
        await addemp.clickOnSave()
        await addemp.verifyErrorMessages()

    })

    test("Validating saved employee details by search", async () => {
       
        await addemp.ValidatingEmployeeNameBySearch(data.firstname)

    })


     test("employee details edit", async () => {
        await addemp.ValidatingEmployeeNameBySearch(data.firstname)
        await addemp.employeeDetailsEdit()

    })

     test("employee details Delete", async () => {
        await addemp.ValidatingEmployeeNameBySearch(data.firstname)
        await addemp.employeeDetailsDelete()

    })
    
    
    