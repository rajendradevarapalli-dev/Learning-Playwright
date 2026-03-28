

import{ test, expect} from '@playwright/test';


test("working with dates", async({page}) => {


    await page.goto ('https://www.globalsqa.com/demo-site/datepicker/')
    await page.frameLocator('(//iframe[@class="demo-frame"])[1]').locator('//input[@id="datepicker"]').fill('25/01/2024');





}) 