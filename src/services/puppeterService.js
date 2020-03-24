
const puppeteer = require('puppeteer');

var browser;


export const openBrowser = (async () => {

   browser = await puppeteer.launch({
    args: [
      '--dont-require-litepage-redirect-infobar',
      '--no-default-browser-check',
      '--disable-infobars',
      '--ignore-certificate-errors',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--start-fullscreen',
      '--disable-popup-blocking'
    ],
    headless: false,
	  executablePath: 'c:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
	});
  
  const page = await browser.newPage();
  await page.setViewport({
    width:1920,
    height:1080
  })
  await page.goto('http://localhost:3000/static/index.html');
  
  // await browser.close();
});

export const closeBrowser = (async () => {

    if(browser !== undefined){
        await browser.close();
    }
 });