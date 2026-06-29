class Menu {
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get closeButton() { return $('#react-burger-cross-btn'); }
    get resetLink() { return $('#reset_sidebar_link'); }
    get logoutLink() { return $('#logout_sidebar_link'); }

    async open() {
        await this.burgerButton.click();
        await this.logoutLink.waitForClickable({ timeout: 10000 });
    }

    async resetAppState() {
        await this.open();
        await this.resetLink.click();
        await this.closeButton.click();
    }

    async logout() {
        await this.open();
        await this.logoutLink.click();
    }
}

module.exports = new Menu();