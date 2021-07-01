import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { tftDDLRepository } from "../objectRepository/tftbuildddl.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class tftDDL {
    tftDDL: tftDDLRepository;

    constructor(){
        this.tftDDL = new tftDDLRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/tft/team-comps");
    }

    public async Dropdownlist (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftDDL.dropdownlist), defaultTimeout, "Drop-down list didn't load or has incorrect locator");
        await browser.actions().click(this.tftDDL.dropdownlist).perform();
    }

    public async Select (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftDDL.dropdownlistDawnbringers), defaultTimeout, "TFT DDL option has incorrect locator");
        await browser.actions().click(this.tftDDL.dropdownlistDawnbringers).perform();
    }
    public async Result (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftDDL.dropdownlistDawnbringers2), defaultTimeout, "Page didn't load or has incorrect locator");
    }
}
