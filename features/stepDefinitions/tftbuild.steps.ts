import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsHasagi } from "../pageObjects/tftbuild.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let tftBuild = new mobalyticsHasagi

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics League of Legends page$/, async () => {
        await tftBuild.Open();
    });

    this.Then(/^I press DDL located top left$/, async () => {
        await tftBuild.Click();
    
    });

    this.Then(/^I select a Teamfight Tactics from the list$/, async () => {
        await tftBuild.SelectTFT();
    });

    this.Then(/^I press Hasagi build on the page$/, async () => {
        await tftBuild.SelectBuildPage();
    });

    this.Then(/^page for selected build is shown$/, async () => {
        await tftBuild.BuildPage();
    });
}
