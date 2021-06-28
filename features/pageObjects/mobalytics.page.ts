import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsRepository } from "../objectRepository/mobalytics.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsPage {
    mobalyticsPage: mobalyticsRepository;

    constructor(){
        this.mobalyticsPage = new mobalyticsRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async Logo (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsPage.mobalyticsLogo), defaultTimeout, "Page title didn't load or has incorrect locator");
    }


    public async Title (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsPage.mobalyticsTitle), defaultTimeout, "Page title didn't load or has incorrect locator");
    }
}