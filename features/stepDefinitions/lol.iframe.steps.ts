import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { lolIFrame } from "../pageObjects/lol.iframe.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let lolIframe = new lolIFrame

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on LoL Tier List page$/, async () => {
        await lolIframe.Open();
    });

    this.Then(/^I click on a videoplayer$/, async () => {
        await lolIframe.Player();
    
    });

    this.Then(/^iframe with a videoplayer is opened$/, async () => {
        await lolIframe.IFrame();
    });

}
