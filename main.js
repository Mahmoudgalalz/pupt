const browser= require('./bowser')
const scraperController= require('./pageController'); // we will make it later

let browserInstance = browser.startBrowser();

// we want to to controle this browser, so we will do a function to do that
// so we have to pass it there

scraperController(browserInstance);