import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { esportsSwitchObj } from "../objectRepository/esports.switch.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class esportsSwitch {
    esportsSwitch: esportsSwitchObj;

    constructor(){
        this.esportsSwitch = new esportsSwitchObj;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/esports/home");
    }

    public async SwitchOff (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.esportsSwitch.switchModeOff), defaultTimeout, "Switch didn't load or has incorrect locator");
        await browser.actions().click(this.esportsSwitch.switchModeOff).perform();
        await browser.sleep(2000);
    }

    public async SwitchOn (){
        await browser.wait(ExpectedConditions.presenceOf(await this.esportsSwitch.switchModeOn), defaultTimeout, "Switch is not turned on, results are not shown");
    }
    
}