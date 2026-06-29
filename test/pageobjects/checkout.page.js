const Page = require('./page');

class CheckoutPage extends Page {
    get inputFirstName() { return $('#first-name'); }
    get inputLastName() { return $('#last-name'); }
    get inputPostalCode() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async fillInfo(firstName, lastName, postalCode) {
        if (firstName) await this.inputFirstName.setValue(firstName);
        if (lastName) await this.inputLastName.setValue(lastName);
        if (postalCode) await this.inputPostalCode.setValue(postalCode);
    }

    async submit() {
        await this.continueButton.click();
    }
}

module.exports = new CheckoutPage();