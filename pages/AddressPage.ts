import { Page } from "@playwright/test";
import * as elements from "../utils/elements.json"

export default class AddressPage {
    constructor(public page: Page) { }
    async addNewAddress() {
        await this.page.locator("'Add New Address'").click()
    }
    // create a new address from address page
    async createNewAddress(country: string, name: string, mobile_number: string, zip_code: string, address: string, city: string,): Promise<void> {
        await this.page.locator(elements.address_country_txt).type(country)
        await this.page.locator(elements.address_name_txt).type(name)
        await this.page.locator(elements.address_mobile_txt).type(mobile_number)
        await this.page.locator(elements.address_zipcode_txt).type(zip_code)
        await this.page.locator(elements.address_add_txt).type(address)
        await this.page.locator(elements.address_city_txt).type(city)
        Promise.all([this.page.waitForNavigation({ waitUntil: "networkidle" }), this.page.locator(elements.submit_btn).click()])
    }
}