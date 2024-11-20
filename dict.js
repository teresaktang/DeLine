import puppeteer  from "puppeteer";


 const getWord = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await Browser.newPage();

    await page.gotto("", {
        waitUntil: "",
    });
 };

 getWord();

 