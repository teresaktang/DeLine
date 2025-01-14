import puppeteer  from "puppeteer";
//web scrape open source dictionary Wiktionary

 const getWords = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.goto("https://en.wiktionary.org/w/index.php?title=word&printable=yes", {
        waitUntil: "domcontentloaded",
    });

    const words = await page.evaluate(() => {
        const word = document.querySelector(".mw-page-container");
        for (const word of words) {
            const text = word.querySelector("#text").innerText;
            wordsArray.push(text)
        }
        //const phonetic = word.querySelector("AHD enPR").innerText;

        return {text, /*phonetic*/};
    });
    console.log(words);

    await browser.close();
    
 };


 getWords();
