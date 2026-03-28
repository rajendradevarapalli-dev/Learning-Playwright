import { test, expect } from '@playwright/test';

test('handle Drag and Drop', async ({ page }) => {

  await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')

  //const items = await page.locator('')
  
  await page.locator('//li[@id="menu-fried-chicken"]').dragTo(page.locator('//ul[@id="plate-items"]'))


})



test('handle Drag and Drop-', async ({ page }) => {

  await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')

 const items = await page.locator('//ul[@id="menu-items"]')

 for(let item of items){
 
await item.dragTo(page.locator('//ul[@id="plate-items"]'))
 }
  
  


})