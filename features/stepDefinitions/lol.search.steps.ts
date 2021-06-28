import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsSearch } from "../pageObjects/lol.search.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let search = new mobalyticsSearch

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics League of Legends page$/, async () => {
        await search.Open();
    });

    this.Then(/^I have a search field displayed on the page$/, async () => {
        await search.SearchfieldVisibility();
    
    });

    this.Then(/^enter hero name 'Diana'$/, async () => {
        await search.Search();
    });

    this.Then(/^page for the hero build is shown$/, async () => {
        await search.HeroPage();
    });
}
