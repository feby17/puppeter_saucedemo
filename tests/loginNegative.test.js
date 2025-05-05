const launchBrowser = require('../utils/browserSetup');
const LoginPage = require('../pages/LoginPage');

(async () => {
  const { browser, page } = await launchBrowser();
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('invalid_user', 'wrong_password');

  await loginPage.takeScreenshot('./screenshots/login-failure.png');
  await loginPage.savePDF('./pdfs/login-failure.pdf');

  const errorMsg = await loginPage.getErrorMessage();
  console.log('Pesan error:', errorMsg);

  await browser.close();
})
