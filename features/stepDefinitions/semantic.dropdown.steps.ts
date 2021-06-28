import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { semanticDDL } from "../pageObjects/semantic.dropdown.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let dropdown = new semanticDDL

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on SemanticUI page$/, async () => {
        await dropdown.Open();
    });

    this.Then(/^I click Gender DDL$/, async () => {
        await dropdown.Dropdownlist();
    
    });

    this.Then(/^select Female in the list below$/, async () => {
        await dropdown.Click();
    });

    this.Then(/^value is selected and shown in the DDL$/, async () => {
        await dropdown.Result();
    });
}
