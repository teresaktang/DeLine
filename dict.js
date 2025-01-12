import puppeteer  from "puppeteer";
//web scrape open source dictionary Wiktionary

 const getWord = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await Browser.newPage();

    await page.gotto("https://en.wiktionary.org/w/index.php?title=word&printable=yes", {
        waitUntil: "domcontentloaded",
    });
    
    
 };

 getWord();

