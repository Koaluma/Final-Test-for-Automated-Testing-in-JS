const Page = require('./page');

class LoginPage extends Page {
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('#login-button'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async login(username, password) {
        if (username) await this.inputUsername.setValue(username);
        if (password) await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();