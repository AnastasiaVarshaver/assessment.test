import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsRegion } from "../pageObjects/lol.regions.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let search = new mobalyticsRegion

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics League of Legends page$/, async () => {
        await search.Open();
    });

    this.Then(/^I press RU button located on the search field$/, async () => {
        await search.RegionButton();
    
    });

    this.Then(/^select EU West region from the pop-up$/, async () => {
        await search.RegionEUW();
    });

    this.Then(/^region is changed$/, async () => {
        await search.Result();
    });
}
