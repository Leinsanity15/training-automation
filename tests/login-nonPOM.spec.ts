import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';


// This test was converted to POM
test('Login Using Correct Email and Incorrect Password', async ({ page }) => {
    const login2 = new LoginPage(page);
    const tempEmail = 'c10-normal@mailinator.com'
    const tempPass = 'thisIsIncorrectPassword123';

    await page.goto('https://accounts.inriver-dsa-dev.com/login');
    // await expect(page).toHaveTitle('inriver | Product Visibility Online');
    
    //Start POM
    await login2.inputEmail(tempEmail);
    await login2.inputPassword(tempPass);
    await login2.clickSeeker(tempPass);
    await login2.clickLogin();
    await page.close();
});

// This test was converted to POM
test ('Login Using Incorrect Email and Correct Password', async ({ page }) => {
    const login2 = new LoginPage(page);
    const tempEmail = 'c10-normal10@mailinator.com'
    const tempPass = 't154z2aMoB';

    await page.goto('https://accounts.inriver-dsa.com/login');
    // await expect(page).toHaveTitle('inriver | CMS Admin');

    await login2.inputEmail(tempEmail);
    await login2.inputPassword(tempPass);
    await login2.clickSeeker(tempPass);
    await login2.clickLogin();

    await page.close();
});
3
// This test in not implementing POM
test ('Login Using Incorrect Email and Incorrect Password', async ({ page }) => {
    
    await page.goto('https://accounts.inriver-dsa-dev.com/login');
    // await expect(page).toHaveTitle('inriver | Product Visibility Online');

    // Input Email
    const email = page.locator('[placeholder="Email"]');
    const tempEmail = 'c10-normalator@mailinator.com'
    await email.fill(tempEmail);

    // Input Password
    const password = page.locator('[placeholder="Password"]');
    const tempPass = 'thisIsIncorrectPassword123';
    await password.fill(tempPass);

    // Click Password Seeker
    const seeker = page.locator('form i');

    await seeker.click();
    await expect(password).toHaveValue(tempPass);
    await seeker.first().click();

    // Click Login Button
    await page.locator('[class="el-button btn-login el-button--primary"]').click();

    const alert = page.getByRole('alert').locator('div');
    await expect(alert).toHaveText('Invalid email or password​');

    await page.close();
});

// This test in not implementing POM
test ('Login Using Correct Email and Correct Password', async ({ page }) => {
    
    await page.goto('https://accounts.inriver-dsa-dev.com/login');
    // await expect(page).toHaveTitle('inriver | Product Visibility Online');

    // Input Email
    const email = page.locator('[placeholder="Email"]');
    const tempEmail = 'c10-normal@mailinator.com'
    await email.fill(tempEmail);

    // Input Password
    const password = page.locator('[placeholder="Password"]');
    const tempPass = 't154z2aMoB';
    await password.fill(tempPass);

    // Click Password Seeker
    const seeker = page.locator('form i');

    await seeker.click();
    await expect(password).toHaveValue(tempPass);
    await seeker.first().click();

    // Click Login Button
    await page.locator('[class="el-button btn-login el-button--primary"]').click();

    const alert = page.getByRole('alert').locator('div');
    // await expect(alert).toHaveText('Your email/password combination does not match.');

    await page.close();
});


