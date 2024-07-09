import { Locator, Page, expect } from "@playwright/test";

export default class LoginPage {
    private page: Page;

    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly seeker: Locator;
    readonly loginBtn: Locator;
    readonly alert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('[placeholder="Email"]');
        this.passwordField = page.locator('[placeholder="Password"]');
        this.seeker = page.locator('form i').first();
        this.loginBtn = page.locator('[class="el-button btn-login el-button--primary"]');
        this.alert = page.getByRole('alert').locator('div');
    }

    // Methods
    async inputEmail(username: string) {
        await this.emailField.waitFor();
        await this.emailField.fill(username);
    }

    async inputPassword(password: string) {
        await this.passwordField.click();
        await this.passwordField.fill(password);
    }

    async clickSeeker(password: string){
        await this.seeker.click();
        await expect(this.passwordField).toHaveValue(password);
        await this.seeker.click();
    }

    async clickLogin() {
        await this.loginBtn.click();
        await expect(this.alert).toBeVisible();
        await expect(this.alert).toHaveText('Invalid email or password');
    }
}
