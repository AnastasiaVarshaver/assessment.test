import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { nngGroupCheckbox } from "../pageObjects/nng.checkbox.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let mdnWebDocsC = new nngGroupCheckbox

  
    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on NNg group page$/, async () => {
        await mdnWebDocsC.Open();
    });

    this.Then(/^I click checkbox next to Yes, please use e-mail to send me information about other offerings$/, async () => {
        await mdnWebDocsC.Checkbox();
     });

     this.Then(/^checkbox is selected$/, async () => {
        await mdnWebDocsC.Click();
     });


}
