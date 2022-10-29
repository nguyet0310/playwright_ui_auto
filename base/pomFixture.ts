import { test as baseTest } from "@playwright/test"
import AddressPage from "../pages/AddressPage";
import BasketPage from "../pages/BasketPage";
import LoginPage from "../pages/LoginPage"
import SearchPage from "../pages/SearchPage"
import BasePage from "../pages/BasePage"
type pages = {
    loginPage: LoginPage;
    searchPage: SearchPage
    basketPage: BasketPage
    addressPage: AddressPage
    basePage: BasePage
}
const testPages = baseTest.extend<pages>({
    loginPage: async ({ page }, use) => { await use(new LoginPage(page)) },
    searchPage: async ({ page }, use) => { await use(new SearchPage(page)) },
    basketPage: async ({ page }, use) => { await use(new BasketPage(page)) },
    addressPage: async ({ page }, use) => { await use(new AddressPage(page)) },
    basePage: async ({ page }, use) => { await use(new BasePage(page)) }
})
export const test = testPages
export const expect = testPages.expect