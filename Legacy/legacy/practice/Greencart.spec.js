import { test, expect } from '@playwright/test';

test('Verify cart price', async ({ page }) => {

await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

const veg1 = `Corn - 1 Kg`
const veg2 = `Pomegranate - 1 Kg` 

await page.locator(`//h4[text()='${veg1}']/../div[3]/button`).click();
await page.locator(`//h4[text()='${veg2}']/../div[3]/button`).click();

const priceveg1 = await page.locator(`//h4[text()='${veg1}']/../p`).textContent();
const priceveg2 = await page.locator(`//h4[text()='${veg2}']/../p`).textContent();
const totalprice = Number(priceveg1)+ Number(priceveg2);

 totalprice === await page.locator('//table/tbody/tr[2]/td[3]/strong').textContent();

console.log(priceveg1);
console.log(priceveg2);
console.log(totalprice);

await expect(Number(priceveg1) + Number(priceveg2)).toBe(Number(totalprice))


})