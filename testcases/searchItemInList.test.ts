import { expect, test } from "../base/pomFixture"

test.describe("search for a term", () => {
    test("search for apple test 01", async ({ page, searchPage, baseURL }) => {
        await page.goto(`${baseURL}#/search`)
        await page.locator("'Dismiss'").click()
        await searchPage.searchItemByATerm("apple")
        const results = page.locator("app-search-result")
        await expect(results).toContainText("Apple Juice (1000ml)")
        await expect(results).toContainText("Apple Pomace")
        await expect(results).not.toContainText("Banana")
    })
})

