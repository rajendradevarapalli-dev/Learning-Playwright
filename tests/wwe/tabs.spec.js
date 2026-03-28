import { test, expect } from '@playwright/test';
  
// test('working with tabs', async ({ page }) => {

//     await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=8207562191423744198&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9184631&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1')

//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('airdopes atom 81')
     
//     await page.locator('//div[@class="nav-search-submit nav-sprite"]').click()

//     const [newtab]= await Promise.all([

//         page.waitForEvent('popup'),
//         await page.locator('(//div[@class="a-section a-spacing-small a-spacing-top-small"])[4]').click()
//     ])

//       await expect(newtab.locator('//input[@id="add-to-cart-button"]')).toBeVisible()




test('working with tabs', async ({ page }) => {

    await page.goto('https://www.amazon.in')

    await page.locator('#twotabsearchtextbox').fill('airdopes atom 81')

    await page.locator('#nav-search-submit-button').click()

    const [newtab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator('(//div[@class="a-section a-spacing-small a-spacing-top-small"])[4]').click()
    ])

    await expect(newtab.locator('#add-to-cart-button')).toBeVisible()

})


