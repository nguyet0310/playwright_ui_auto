import { expect, test } from "../base/pomFixture"
import * as data from "../test-data/test-data.json"

test.describe("add to cart test suite", () => {
    test.beforeEach(async ({ page, baseURL, loginPage }) => {
        await page.goto(`${baseURL}#/login`)
        await loginPage.login(data.email, data.password)
        await page.locator("'Dismiss'").click()
    })
    test.afterEach(async ({ page, baseURL, basePage }) => {
        await page.goto(`${baseURL}#/basket`)
        await page.waitForTimeout(5000)
        await basePage.removeAllItems()
        await page.goto(`${baseURL}#/address/saved`)
        await page.waitForTimeout(2000)
        await basePage.removeAllItems()
    })
    test("add 1 item to cart test 01", async ({ page, searchPage, basketPage, addressPage }) => {
        await searchPage.addAItemToCart(1)
        await searchPage.gotoBasket()
        await page.waitForTimeout(2000)
        await basketPage.checkoutItem()
        await addressPage.addNewAddress()
        await addressPage.createNewAddress(data.address_country, data.address_name, data.address_mobile_no, data.address_zipcode, data.address_add, data.address_city)
        await expect(page.locator("//h1").nth(0)).toHaveText("Select an address")
    })
    test("add 2 item to cart test 02", async ({ page, searchPage, basketPage, addressPage }) => {
        await searchPage.addAItemToCart(2)
        await searchPage.gotoBasket()
        await page.waitForTimeout(2000)
        await basketPage.checkoutItem()
        await addressPage.addNewAddress()
        await addressPage.createNewAddress(data.address_country, data.address_name, data.address_mobile_no, data.address_zipcode, data.address_add, data.address_city)
        await expect(page.locator("//h1").nth(0)).toHaveText("Select an address")
    })
})
