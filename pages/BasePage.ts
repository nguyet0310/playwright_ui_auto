import { Page } from "@playwright/test";
import * as elements from "../utils/elements.json"

export default class BasePage {
    constructor(public page: Page) { }
    async removeAllItems() {
        let numberItems = await this.page.locator(elements.trash_icon).count()
        console.log(numberItems)
        for (let i = 0; i < numberItems; i++) {
            await this.page.locator(elements.trash_icon).nth(i).click()
        }
    }
}