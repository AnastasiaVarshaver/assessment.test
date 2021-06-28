import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { gogSearch } from "../pageObjects/gog.search.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let gameSearch = new gogSearch

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on GOG page$/, async () => {
        await gameSearch.Open();
    });

    this.Then(/^I press searching icon$/, async () => {
        await gameSearch.SearchButtonVisibility();
    
    });

    this.Then(/^I type 'Bioshock'$/, async () => {
        await gameSearch.SearchField();
    });

    this.Then(/^all matching results for Bioshock are shown$/, async () => {
        await gameSearch.GameResults();
    });
}
