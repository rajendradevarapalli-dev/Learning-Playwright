import { test, expect } from '@playwright/test';
  /*
test('working with tables', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables')

    const value = await page.locator('//table[1]/tbody/tr[3]/td[4]').textContent()

    console.log(value)



})

*/


test('working with tables', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables')

    const columns = await page.$$('//table[1]/tbody/tr')

    console.log(columns.length)
   

    })