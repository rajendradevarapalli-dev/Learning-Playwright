import { test, expect } from '@playwright/test';
//import { faker } from '@faker-js/faker';
import ExcelJS from 'exceljs';
import path from 'path'
test('adimin able to login and add employee name', async ({ page }) => {

  const filePath = path.join(process.cwd(), 'testdata', 'addemp.xlsx');

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet(1); // first sheet

  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const firstName = worksheet.getCell('B1').value?.toString();
  const lastName = worksheet.getCell('B2').value?.toString();

  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);


  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  //await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  //await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});