const pageScraper= require('./pageScraper');

async function scrapeAll(browserInstance){
    let browser;

    try{
        browser=await browserInstance;
        await pageScraper.scrape(browser);
    }
    catch(err){
        console.error("There's a problem with browser Instance => ", err)
    }
}

module.exports=(browserInstance) => scrapeAll(browserInstance)