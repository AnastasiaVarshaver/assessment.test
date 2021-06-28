import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsRegionhRepository } from "../objectRepository/lol.regions.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsRegion {
    mobalyticsRegion: mobalyticsRegionhRepository;

    constructor(){
        this.mobalyticsRegion = new mobalyticsRegionhRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async RegionButton (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsRegion.regionsRU), defaultTimeout, "Pop-up didn't load or has incorrect locator");
        await browser.actions().click(this.mobalyticsRegion.regionsRU).perform();
        await browser.sleep(2000);
    }


    public async RegionEUW (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsRegion.regionsPopup), defaultTimeout, "EUW option didn't load or has incorrect locator");
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsRegion.regionEUW), defaultTimeout, "EUW option didn't load or has incorrect locator");
        await browser.actions().click(this.mobalyticsRegion.regionEUW).perform();
        await browser.sleep(2000);
    }
    public async Result (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsRegion.regionEUW2), defaultTimeout, "Changes weren't applied");
    }
}