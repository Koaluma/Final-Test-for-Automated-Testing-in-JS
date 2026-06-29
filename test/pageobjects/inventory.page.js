const Page = require('./page');

class InventoryPage extends Page {
    get inventoryList() { return $('.inventory_list'); }
    get title() { return $('.title'); }
    get cartLink() { return $('.shopping_cart_link'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get firstAddToCartBtn() { return $('#add-to-cart-sauce-labs-backpack'); }

    async waitForLoaded() {
        await this.inventoryList.waitForDisplayed({ timeout: 20000 });
    }

    async addFirstItemToCart() {
        await this.firstAddToCartBtn.waitForClickable();
        await this.firstAddToCartBtn.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }
}

module.exports = new InventoryPage();