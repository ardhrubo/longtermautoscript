import puppeteer from "puppeteer";






const browser = await puppeteer.launch({ headless: false,
    defaultViewport: {width:1920,height:1080},
    userDataDir: "temporary" 
    
    });
    
    
        
        const page = await browser.newPage();
        await page.goto("https://www.duckduckgo.com", { waitUntil: "networkidle2" });
    
        const searchBarHandle =  await page.waitForSelector('#searchbox_homepage');


        await searchBarHandle.type('Who is AR Dhrubo')

        await page.keyboard.press('Enter')


        const firstResult = await page.waitForSelector('[data-testid="result-title-a"]')

        await firstResult.click()

        const profile = await page.waitForSelector('.profile')

        await page.screenshot({ path: "example.png" });

        const element = await page.waitForSelector('.core-section-container__content');

        const pTag = await element.$('p');

        const textContent = await page.evaluate(pTag => pTag.textContent, pTag);

        console.log(textContent.trim());

        await browser.close();
      

        

    