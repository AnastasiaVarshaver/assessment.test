import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { checkboxRepository } from "../objectRepository/nng.checkbox.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class nngGroupCheckbox {
    nngGroupCheckbox: checkboxRepository;

    constructor(){
        this.nngGroupCheckbox = new checkboxRepository;
    }


    public async Open (){
        await browser.navigate().to("https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/");
    }

    public async Checkbox (){

        await browser.wait(ExpectedConditions.visibilityOf(await this.nngGroupCheckbox.checkbox), defaultTimeout, "Checkbox has incorrect locator");
        await browser.actions().mouseMove(this.nngGroupCheckbox.checkbox).perform();
    }


    public async Click (){
        await browser.actions().click(this.nngGroupCheckbox.checkbox).perform();
        await this.nngGroupCheckbox.checkbox.isSelected();
    }


}
