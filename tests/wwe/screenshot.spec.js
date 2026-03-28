const { test, expect } = require('@playwright/test');

test('page screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')

    await page.waitForTimeout(3000)
    //await page.screenshot({ path: 'tests/screenshots/HomePage.png' })

    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png'})
});


test('page element screenshot 2 ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    await page.waitForTimeout(3000)

    //await page.screenshot({ path: 'tests/screenshots/HomePage.png' })

    await page.locator('//img[@src="./images/broccoli.jpg"]').screenshot({ path:'tests/screenshots/'+Date.now()+'Brokoli.jpg'})
});


test('page element screenshot 3 ', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.locator('(//img[@src="/web/images/ohrm_logo.png"])[2]').screenshot({path: 'testdata/screenshots'+'orangeHRMlog.png'  })

})
