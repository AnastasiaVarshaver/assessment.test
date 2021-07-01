import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsLanguage } from "../objectRepository/mobalyticslanguage.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsLanguageRU {
    mobalyticsLanguageRU: mobalyticsLanguage;

    constructor(){
        this.mobalyticsLanguageRU = new mobalyticsLanguage;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async LanguagePopup (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsLanguageRU.languageIcon), defaultTimeout, "Icon didn't load or has incorrect locator");
        await browser.actions().click(this.mobalyticsLanguageRU.languageIcon).perform();
    }


    public async Select (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsLanguageRU.languageRussian), defaultTimeout, "Russian language option has incorrect locator");
        await browser.actions().click(this.mobalyticsLanguageRU.languageRussian).perform();
    }

    public async Save (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsLanguageRU.languageSave), defaultTimeout, "Save button has incorrect locator");
        await browser.actions().click(this.mobalyticsLanguageRU.languageSave).perform();
    }
    public async Result (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsLanguageRU.languagePage), defaultTimeout, "Page language didn't change");
    }
}
