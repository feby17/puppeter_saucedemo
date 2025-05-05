const puppeteer = require('puppeteer');

async function launchBrowser() {
  const browser = await puppeteer.launch({
    headless: false, // headful mode
    defaultViewport: null,
    args: ['--start-maximized']
  });
  const page = await browser.newPage();
  return { browser, page };
}

module.exports = launchBrowser;
