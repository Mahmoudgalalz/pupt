const scrapeObject={
    url:'http://book.toscrape.com',
    async scraper(browser){
        let page= await browser.newPage();
        console.log(`navigating to ${this.url}..`)
        await page.goto(this.url);
    }
}
module.exports=scrapeObject