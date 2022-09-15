const pupt= require('puppeteer');

async function startBrowser(){
    let browser
    try{
        browser = await pupt.launch({
            headless:true, // 
            'ignoreHTTPSErrors':true
        })
    }
    catch(err){
        console.error(err)
    }

    return browser;
}

module.exports = {
    startBrowser
};