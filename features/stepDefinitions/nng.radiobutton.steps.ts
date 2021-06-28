import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { nngGroupRadiobutton } from "../pageObjects/nng.radiobutton.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let mdnWebDocsR = new nngGroupRadiobutton

  
    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on NNg group page$/, async () => {
        await mdnWebDocsR.Open();
    });

    this.Then(/^I click radiobutton next to Two$/, async () => {
        await mdnWebDocsR.Radiobutton();
     });

     this.Then(/^the button is checked$/, async () => {
        await mdnWebDocsR.Click();
     });


}
