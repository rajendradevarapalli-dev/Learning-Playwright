
// import { test, expect } from '@playwright/test';



// test.describe("Gourp1",() => {


//            test.beforeAll(() => {
//     console.log(" This is the before all message")
// })
        

//     test.beforeEach(() => {
//     console.log(" This is the before each message")
// })

// test.afterEach(() => {
//     console.log(" This is the after each message")
// })



//     test("test1", () => {
//         console.log("This is test1")
//     })

//      test("test2", () => {
//         console.log("This is test2")
//     })

//      test("test3", () => {
//         console.log("This is test3")
//     })

//      test("test4", () => {
//         console.log("This is test4")
//     })
// })

// test.describe("Gourp2",() => {


//     test("test5", () => {
//         console.log("This is test5")
//     })

//       test("test6", () => {
//         console.log("This is test6")
//     })
// })


//======================================================================================



import { test, expect } from '@playwright/test';

test.describe("Verify the Add employee functionality", () => {

    test.beforeEach(async ({ page }) => {

        
        await page.goto('/web/index.php/auth/login');
        //await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        //await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('button', { name: ' Add' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).click();
        //await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
        await page.getByRole('textbox', { name: 'First Name' }).fill("Rajendra");
        //await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
        //await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
        //await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());
        await page.getByRole('textbox', { name: 'Last Name' }).fill("D");

        //let ranNum = Math.random()*10000
        //await page.getByRole('textbox', { name: 'Employee Id' }).fill(ranNum)
        //await page.waitForTimeout(4000);
        await page.getByRole('button', { name: 'Save' }).click();

    })


    test.afterEach(async ({page}) => {
     await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    })
   

    test('adimin able to login and add employee name', async ({ page }) => {

        
    });

    
    test('admin able upload JPG file as profile pic', async ({ page }) => {

        await page.locator('//input[@type="file"]').setInputFiles('testdata/hk.jpg');
        await page.getByRole('button', { name: 'Save' }).click();
     
    });


    test('admin able upload PNG file as profile pic', async ({ page }) => {

        await page.locator('//input[@type="file"]').setInputFiles('testdata/yash.png');
        await page.getByRole('button', { name: 'Save' }).click();
     
    });


       test('admin able upload GIF file as profile pic', async ({ page }) => {

        await page.locator('//input[@type="file"]').setInputFiles('testdata/vijaydevarakonda gif.gif');
        await page.getByRole('button', { name: 'Save' }).click();
     
    });





})
