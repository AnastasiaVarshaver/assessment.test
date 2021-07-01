import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsSearchRepository } from "../objectRepository/lol.search.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsSearch {
    mobalyticsSearch: mobalyticsSearchRepository;

    constructor(){
        this.mobalyticsSearch = new mobalyticsSearchRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async SearchfieldVisibility (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsSearch.searchField), defaultTimeout, "Search field didn't load or has incorrect locator");
    }


    public async Search (){
        await this.mobalyticsSearch.searchField.sendKeys('Diana');
    }
    public async HeroPage (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsSearch.heroBuild), defaultTimeout, "Page didn't load");
    }
}
