import { Page } from "@playwright/test";
import * as elements from "../utils/elements.json"
export default class LoginPage {
    constructor(public page: Page) { }
    async enterEmail(email: string) {
        await this.page.locator(elements.email).type(email)
    }
    async enterPassword(password: string) {
        await this.page.locator(elements.password).type(password)
    }
    async clickLogin() {
        await this.page.locator("'Log in'").click()
    }

    async login(email: string, password: string) {
        await this.page.locator(elements.email).type(email)
        await this.page.locator(elements.password).type(password)
        await Promise.all([this.page.waitForNavigation({ waitUntil: "networkidle" }), this.page.locator("'Log in'").click()])
    }
}