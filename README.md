"Negative & Edge Case" Flow
Focus: Error handling, form validation, and wait strategies.
Launch URL: https://www.saucedemo.com/

UC-1 Form Validation (Negative Testing):
Attempt to login with empty Username and Password. Verify error: "Username is required".
Attempt to login with Username only. Verify error: "Password is required".
Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.

UC-2 Handling Latency (Wait Strategies):
Login using performance_glitch_user (this user has a built-in delay).
Ensure the framework handles the page load delay gracefully without hard-coded pause() or sleep() commands.
Reset the App State via the Burger Menu.
Logout.

Technical Requirements:
Tool: WebDriverIO
Browsers: Firefox, Chrome (run in parallel)
Pattern: Page Object Model (POM)
Locators: CSS Selectors
Assertions: framework assertions (e.g. expect(elem).toBeExisting())
Documentation: README explaining how to run the tests and generate the report


Overview

Automated UI tests for the SauceDemo "Negative & Edge Case" flow.

Tool: WebdriverIO v8
Approach: BDD with Cucumber (Gherkin Given-When-Then feature files)
Browsers: Chrome + Firefox, in parallel
Pattern: Page Object Model
Locators: CSS selectors
Assertions: WebdriverIO's expect (toBeDisplayed, toBeExisting, toHaveText)
Waits:explicit waitForDisplayed / waitForExist — no pause()/sleep()
Reporting: Allure (screenshot attached on failure)




Setup for running the tests:
chrome and firefox navigators are required to be installed
then: npm install
To run the tests: npm test

to generate reports: npm run report
