const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const CartPage = require('../../pageobjects/cart.page');
const CheckoutPage = require('../../pageobjects/checkout.page');
const Menu = require('../../pageobjects/menu');
const log = require('../../utils/logger');

Given('I am on the login page', async () => {
    log.info('Opening the login page');
    await LoginPage.open();
});

Given('I am logged in as {string} with password {string}', async (username, password) => {
    log.info(`Logging in as "${username}"`);
    await LoginPage.open();
    await LoginPage.login(username, password);
    await InventoryPage.waitForLoaded();
});
When('I log in with username {string} and password {string}', async (username, password) => {
    log.info(`Attempting login with username="${username}"`);
    await LoginPage.login(username, password);
});

When('I add the first item to the cart', async () => {
    log.info('Adding the first item to the cart');
    await InventoryPage.addFirstItemToCart();
});

When('I proceed to checkout', async () => {
    log.info('Proceeding to checkout');
    await InventoryPage.goToCart();
    await CartPage.checkout();
});

When('I continue without entering a postal code', async () => {
    log.info('Submitting checkout with the postal code left blank');
    await CheckoutPage.fillInfo('John', 'Doe', '');
    await CheckoutPage.submit();
});

When('I reset the app state from the menu', async () => {
    log.info('Resetting the app state via the burger menu');
    await Menu.resetAppState();
});

When('I log out from the menu', async () => {
    log.info('Logging out via the burger menu');
    await Menu.logout();
});

Then('I should see the error {string}', async (message) => {
    log.info(`Expecting error message to contain: "${message}"`);
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveText(message, { containing: true });
});

Then('the products page should be displayed', async () => {
    await expect(InventoryPage.inventoryList).toBeExisting();
    await expect(InventoryPage.title).toHaveText('Products');
});

Then('the cart badge should not be displayed', async () => {
    await InventoryPage.cartBadge.waitForExist({ reverse: true, timeout: 10000 });
    await expect(InventoryPage.cartBadge).not.toBeExisting();
});

Then('the login button should be displayed', async () => {
    await expect(LoginPage.btnSubmit).toBeDisplayed();
});