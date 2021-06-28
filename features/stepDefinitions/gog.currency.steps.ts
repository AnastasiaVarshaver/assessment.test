import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { gogCurrency } from "../pageObjects/gog.currency.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let gogCurrencyUSD = new gogCurrency

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on GOG page$/, async () => {
        await gogCurrencyUSD.Open();
    });

    this.Then(/^I click USD on the page footer$/, async () => {
        await gogCurrencyUSD.USDButton();
    
    });

    this.Then(/^all price tags are displayed as USD$/, async () => {
        await gogCurrencyUSD.CurrencyChange();
    });

}
