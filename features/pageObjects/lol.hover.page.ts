import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsHoverRepository } from "../objectRepository/lol.hover.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsHover {
    mobalyticsHover: mobalyticsHoverRepository;

    constructor(){
        this.mobalyticsHover = new mobalyticsHoverRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async Dropdownlist (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsHover.dropdownlist), defaultTimeout, "Drop-down list didn't load or has incorrect locator");
    }


    public async Hover (){
        await browser.actions().mouseMove(this.mobalyticsHover.dropdownlist).perform();
        await browser.sleep(2000);
    }

    public async HoverHighlighted (){
        let baraholkaButton:string = await this.mobalyticsHover.dropdownlist.getCssValue("color");
        await console.log('CSS Value - ${dropdonlistColor}')
    }
}