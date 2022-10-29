# Guide how to setup UI test of OWASP Juice Shop 
- This tests are written using Playwright
- For more detail, please visit this link: `https://playwright.dev/docs/intro`
- These tests are configured to using Chrominiun, so it will open this browser
- Cmd to run this test is: `npm test`
- There are 3 tests to run in 1 worker
- The `html` test report is located in `playwright-report` folder
- Videos for tests are shown in test report too
- The first test is shown that it's fail but actually it's not due to in tear down part, I tried to delete item in basket but basket dat shows very slow, and test script can not find item to delete
- For code struture: for UI automation tests, I used POM (Page Object model), this model basic means every page test will consider a model and UI tests will interacti with it. This model will help to avoid duplicate code as well
- The reason why I'm using Playwright not other automation tools: compare with Selenium, Playwright is faster, it provides auto wait so it will support automation better. Compare with Cypress, Playwright is also better because Cypress is not good when handle new tab, but Playwright can. Another limitation of Cypress is it can not run in Safari but Playwright can.
- There are some trade off when using Playwright: it can not open maximun windows automatically, we need to set width and height manually. Another big issue is it's new to the market so it takes time to be mature, compare to Selenium this tool is very 'young', so it may contain issues that we are still not aware of

# Guide to run API testing of OWASP Juice Shop 
- API testings are Postman collection with description as below:
    + There is env file call juice env. contained base_URL, token shared among requests
    + For 1st case: Script will signin -> get the token -> add item to basket -> get item from this basket and verify that item is in the basket
    + Case 2 and 3 are mixed together and the flow as below:
        * Login -> add 1st item to basket -> add 2nd item to basket -> get items in baskets and verify that there are 2 items in basket -> delete 1 item in basket -> get basket item again and verify there is only 1 item in basket -> delete item to tear down test
        * The Postman collection is stored in folder: `postman_testscript`
        * This Postman collection includes its environment called juice env. to run script



