
import { test, expect } from '@playwright/test';


test("add employee get request", async({request}) => {

     const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC'

     const employeedetails = await request.get(url, {headers : { cookie : "orangehrm=8iqu7oj8aqhle3h6fc9v7n97hq"}} )

     console.log(await employeedetails.json())
})


test("add employee POST request", async({request}) => {

     const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'

     const employeedetails1 = await request.post(url, {
         headers: { cookie: "orangehrm=m1lkfhrjses970mren3ma1ljbs" },
         data: {
             "firstName": "rajefndra", 
             "middleName": "", 
             "lastName": "d", 
             "empPicture": null, 
             "employeeId": "03712"
         }
     })

     expect(employeedetails1.status()).toBe(200); 
     console.log(await employeedetails.json())
})
