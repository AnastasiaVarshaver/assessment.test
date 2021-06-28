import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsPage } from "../pageObjects/mobalytics.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let MobalyticsPage = new mobalyticsPage

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics page$/, async () => {
        await MobalyticsPage.Open();
    });

    this.Then(/^the page is opened$/, async () => {
        await MobalyticsPage.Logo();
    
    });

    this.Then(/^I can see title 'Win more in League of Legends'$/, async () => {
        await MobalyticsPage.Title();
    });
}