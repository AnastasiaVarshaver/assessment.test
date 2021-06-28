import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsDDL } from "../pageObjects/lol.ddl.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let drodown = new mobalyticsDDL

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics page$/, async () => {
        await drodown.Open();
    });

    this.Then(/^I have a DDL displayed top left$/, async () => {
        await drodown.Dropdownlist();
    
    });

    this.Then(/^I click on drop-down list$/, async () => {
        await drodown.Click();
    });

    this.Then(/^select Teamfight Tactics$/, async () => {
        await drodown.Select();
    });

    this.Then(/^page for Teamfight Tactics is shown$/, async () => {
        await drodown.Result();
    });
}
