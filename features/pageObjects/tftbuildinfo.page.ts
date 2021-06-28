import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { buildRepository } from "../objectRepository/tftbuildinfo.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class tftBuildInfo {
    tftBuildInfo: buildRepository;

    constructor(){
        this.tftBuildInfo = new buildRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/tft/team-comps");
    }

    public async TftBuild (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftBuildInfo.buildName), defaultTimeout, "Build didn't load or has incorrect locator");
    }

    public async Expand (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftBuildInfo.buildExpandArrow), defaultTimeout, "Expand arrow button has incorrect locator");
        await browser.actions().click(this.tftBuildInfo.buildExpandArrow).perform();
        await browser.sleep(2000);
    }
    public async Result (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftBuildInfo.buildExpandWindow), defaultTimeout, "Page didn't load or has incorrect locator");
    }
}