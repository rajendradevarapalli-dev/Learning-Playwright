

import { test, expect } from '@playwright/test';

test('Clicking on Gallery or Portfolio', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    if (await page.locator('//li/a[text()="Gallery"]').isVisible()){


        await page.locator('//li/a[text()="Gallery"]').click()
        console.log('Clicked on Gallery')
    }else{
        //await page.locator("//a[@href="/portfolio/"]").click()
        await page.locator('//li/a[text()="Portfolio"]').click()

        console.log('Clicked on Porfolio')
    }





})