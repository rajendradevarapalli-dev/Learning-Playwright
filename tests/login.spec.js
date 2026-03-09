

import dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '@playwright/test';
import {loginPage} from '../Pages/loginpage.po';

import data from '../testdata/login.json'


test.describe("Longin Functionalities", () => {  




test('User can login with credentials', async ({ page }) => {
        
    const login = new loginPage(page)

    await login.launchURL()
    await login.verifyLogo()
    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccess()

  
});

test('User can login with Inavalid username and valid password', async ({ page }) => {
    const login = new loginPage(page)
   await login.launchURL()
   await login.verifyLogo()
   await login.loginwithCreds(data.username,process.env.APP_PASSWORD)
   await login.loginFailure()

})

test('User can login invalid username and invalid password', async ({ page }) => {
   const login = new loginPage(page)
   await login.launchURL()
   await login.verifyLogo()
   await login.loginwithCreds(data.username,data.password)
   await login.loginFailure()
})


})
