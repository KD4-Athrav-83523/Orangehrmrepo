const {test,chromium} = require('@playwright/test');

test("OrangeHRM",async() =>{

    const browser = await chromium.launch({headless : false});

    const page = await browser.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(4000);
    
    await page.getByRole("textbox",{name : "Username"}).fill("Admin");

    await page.getByRole("textbox",{name : "Password"}).fill("admin123");

    await page.getByRole("button",{name : 'Login'}).click();

    await page.getByRole('link', { name: 'Admin' }).click();

    await page.getByRole('button',{name : "Add"}).click();

    await page.waitForTimeout(4000);

});