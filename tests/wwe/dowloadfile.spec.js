
import { test, expect } from '@playwright/test';


test('Download example', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadPromise = page.waitForEvent('download');

  await page.click('text=sample.txt');

  const download = await downloadPromise;

  await download.saveAs('downloads/sample.txt');

});