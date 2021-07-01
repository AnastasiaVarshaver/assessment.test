import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsDDLRepository } from "../objectRepository/lol.ddl.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsDDL {
    mobalyticsDDL: mobalyticsDDLRepository;

    constructor(){
        this.mobalyticsDDL = new mobalyticsDDLRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async Dropdownlist (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsDDL.dropdownlist), defaultTimeout, "Drop-down list didn't load or has incorrect locator");
    }


    public async Click (){
        await browser.actions().click(this.mobalyticsDDL.dropdownlist).perform();
    }

    public async Select (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsDDL.teamfighttactics), defaultTimeout, "TFT DDL option has incorrect locator");
        await browser.actions().click(this.mobalyticsDDL.teamfighttactics).perform();
    }
    public async Result (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsDDL.teamfighttacticsPageName), defaultTimeout, "Page didn't load or has incorrect locator");
    }
}
