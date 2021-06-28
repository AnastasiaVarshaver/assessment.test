import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsHasagiBuildRepository } from "../objectRepository/tftbuild.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsHasagi {
    mobalyticsHasagi: mobalyticsHasagiBuildRepository;

    constructor(){
        this.mobalyticsHasagi = new mobalyticsHasagiBuildRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async Dropdownlist (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsHasagi.dropdownlist), defaultTimeout, "Drop-down list didn't load or has incorrect locator");
    }


    public async Click (){
        await browser.actions().click(this.mobalyticsHasagi.dropdownlist).perform();
        await browser.sleep(2000);
    }

    public async SelectTFT (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsHasagi.teamfighttactics), defaultTimeout, "TFT DDL option has incorrect locator");
        await browser.actions().click(this.mobalyticsHasagi.teamfighttactics).perform();
        await browser.sleep(2000);
    }
    public async SelectBuildPage (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsHasagi.teamfighttacticsHasagiBuild), defaultTimeout, "Chosen build didn't load on the list or has incorrect locator");
        await browser.actions().click(this.mobalyticsHasagi.teamfighttactics).perform();
        await browser.sleep(2000);
    }
    public async BuildPage (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsHasagi.teamfighttacticsHasagiPage), defaultTimeout, "Page didn't load or has incorrect locator");
    }

}