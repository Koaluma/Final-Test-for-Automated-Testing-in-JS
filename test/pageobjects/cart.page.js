const Page = require('./page');

class CartPage extends Page {
    get cartList() { return $('.cart_list'); }
    get checkoutButton() { return $('#checkout'); }

    async checkout() {
        await this.checkoutButton.waitForClickable();
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();