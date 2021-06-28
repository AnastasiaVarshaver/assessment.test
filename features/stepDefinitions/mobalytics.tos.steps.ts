import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsTOS } from "../pageObjects/mobalytics.tos.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let redirectionTOS = new mobalyticsTOS

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics page$/, async () => {
        await redirectionTOS.Open();
    });

    this.Then(/^I hover over 'Terms of Service' button in page footer$/, async () => {
        await redirectionTOS.TOSButton();
    
    });

    this.Then(/^the button is highlighted$/, async () => {
        await redirectionTOS.TOSHighlight();
    });

    this.Then(/^I click 'Terms of Service' button$/, async () => {
        await redirectionTOS.ButtonClick();
    });

    this.Then(/^I am redirected to Mobalytics Terms of Service page$/, async () => {
        await redirectionTOS.TOSRedirection();
    });
}
