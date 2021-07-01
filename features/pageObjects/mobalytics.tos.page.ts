import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsTOSRepository } from "../objectRepository/mobalytics.tos.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class mobalyticsTOS {
    mobalyticsTOS: mobalyticsTOSRepository;

    constructor(){
        this.mobalyticsTOS = new mobalyticsTOSRepository;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol");
    }

    public async TOSButton (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsTOS.mobalyticsTOSButton), defaultTimeout, "Icon didn't load or has incorrect locator");
        await browser.actions().mouseMove(this.mobalyticsTOS.mobalyticsTOSButton).perform();
    }


    public async TOSHighlight (){
        let baraholkaButton:string = await this.mobalyticsTOS.mobalyticsTOSButton.getCssValue("color");
        await console.log('CSS Value - ${dropdonlistColor}')
    }

    public async ButtonClick (){
        await browser.actions().click(this.mobalyticsTOS.mobalyticsTOSButton).perform();
    }

    public async TOSRedirection (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.mobalyticsTOS.mobalyticsTOSRedirection), defaultTimeout, "Save button has incorrect locator");
    }
    
}
