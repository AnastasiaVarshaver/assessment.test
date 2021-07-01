import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { dropdownRepository } from "../objectRepository/semantic.dropdown.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class semanticDDL {
    semanticDDL: dropdownRepository;

    constructor(){
        this.semanticDDL = new dropdownRepository;
    }
    public async Open (){
        await browser.navigate().to("https://semantic-ui.com/modules/dropdown.html");
    }

    public async Dropdownlist (){

        await browser.wait(ExpectedConditions.visibilityOf(await this.semanticDDL.dropdown), defaultTimeout, "Drop-down list didn't load or has incorrect locator");
    }


    public async Click (){
        await browser.actions().click(this.semanticDDL.dropdown).perform();
    }

    public async PickFemale (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.semanticDDL.dropdownFemale), defaultTimeout, "Female DDL option has incorrect locator");
        await browser.actions().click(this.semanticDDL.dropdownFemale).perform();
    }
    public async Result (){

        await browser.wait(ExpectedConditions.visibilityOf(await this.semanticDDL.dropdown), defaultTimeout, "Drop-down list didn't load or has incorrect locator");
    }
}
