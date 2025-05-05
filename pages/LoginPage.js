class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameSelector = '#user-name';
      this.passwordSelector = '#password';
      this.loginButtonSelector = '#login-button';
      this.errorMessageSelector = '[data-test="error"]';
    }
  
    async navigate() {
      await this.page.goto('https://www.saucedemo.com');
    }
  
    async login(username, password) {
      await this.page.type(this.usernameSelector, username);
      await this.page.type(this.passwordSelector, password);
      await this.page.click(this.loginButtonSelector);
    }
  
    async isLoggedIn() {
      await this.page.waitForTimeout(1000);
      return this.page.url().includes('inventory.html');
    }
  
    async getErrorMessage() {
      const error = await this.page.$(this.errorMessageSelector);
      if (error) {
        return await this.page.$eval(this.errorMessageSelector, el => el.textContent);
      }
      return null;
    }
  
    async takeScreenshot(path) {
      await this.page.screenshot({ path });
    }
  
    async savePDF(path) {
      await this.page.pdf({ path, format: 'A4' });
    }
  }
  
  module.exports = LoginPage;
  