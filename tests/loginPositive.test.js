const launchBrowser = require('../utils/browserSetup');
const LoginPage = require('../pages/LoginPage');

(async () => {
  const { browser, page } = await launchBrowser();
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await loginPage.takeScreenshot('./screenshots/login-success.png');
  await loginPage.savePDF('./pdfs/login-success.pdf');

  const loggedIn = await loginPage.isLoggedIn();
  console.log('Login berhasil?', loggedIn);

  await browser.close();
})();
