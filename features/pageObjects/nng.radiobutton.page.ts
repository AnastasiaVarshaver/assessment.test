import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { radiobuttonRepository } from "../objectRepository/nng.radiobutton.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class nngGroupRadiobutton {
    nngGroupRadiobutton: radiobuttonRepository;

    constructor(){
        this.nngGroupRadiobutton = new radiobuttonRepository;
    }
    public async Open (){
        await browser.navigate().to("https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/");
    }

    public async Radiobutton (){

        await browser.wait(ExpectedConditions.visibilityOf(await this.nngGroupRadiobutton.radiobutton), defaultTimeout, "Radiobutton has incorrect locator");
        await browser.actions().mouseMove(this.nngGroupRadiobutton.radiobutton).perform();
    }

    public async Click (){
        await browser.actions().click(this.nngGroupRadiobutton.radiobutton).perform();
        await browser.sleep(2000);
        await this.nngGroupRadiobutton.radiobutton.isSelected();
    }


}