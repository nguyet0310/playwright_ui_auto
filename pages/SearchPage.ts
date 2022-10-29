import { Page } from "@playwright/test";
import * as elements from "../utils/elements.json"
export default class SearchPage {
    constructor(public page: Page) { }
    async addAItemToCart(numberItems: number) {
        for (let i = 1; i <= numberItems; i++) {
            await this.page.locator("//span[contains(text(),'Add to Basket')]").nth(i).click()
        }

    }
    async gotoBasket() {
        await this.page.locator(elements.ur_basket_btn).click()
    }
    async searchItemByATerm(search_string: string) {
        await this.page.locator(elements.search_ico).click()
        await this.page.locator(elements.search_txt).type(search_string)
        await this.page.keyboard.press('Enter');
    }
}