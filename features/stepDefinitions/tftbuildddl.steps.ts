import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { tftDDL } from "../pageObjects/tftbuildddl.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let dropdownlist = new tftDDL

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics Teamfight Tactics page$/, async () => {
        await dropdownlist.Open();
    });

    this.Then(/^I open DDL with build classes$/, async () => {
        await dropdownlist.Dropdownlist();
    
    });

    this.Then(/^select Dawnbringer class$/, async () => {
        await dropdownlist.Select();
    });

    this.Then(/^builds containing Dawnbringers are shown$/, async () => {
        await dropdownlist.Result();
    });
}
