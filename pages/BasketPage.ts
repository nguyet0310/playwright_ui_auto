import { Page } from "@playwright/test";
import * as elements from "../utils/elements.json"
export default class BasketPage {
    constructor(public page: Page) { }
    async checkoutItem() {
        this.page.locator("'Checkout'").click()
    }
}