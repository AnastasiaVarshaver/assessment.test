import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { esportsSwitch } from "../pageObjects/esports.switch.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let mobalyticsSwitch = new esportsSwitch

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics Esports page$/, async () => {
        await mobalyticsSwitch.Open();
    });

    this.Then(/^I click switch in page header to switch it from Spoilers off to Spoilers on state$/, async () => {
        await mobalyticsSwitch.SwitchOff();
    
    });

    this.Then(/^I can see match results on top of the page$/, async () => {
        await mobalyticsSwitch.SwitchOn();
    });

}
