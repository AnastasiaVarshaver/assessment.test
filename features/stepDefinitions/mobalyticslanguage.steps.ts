import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsLanguageRU } from "../pageObjects/mobalyticslanguage.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let languageRU = new mobalyticsLanguageRU

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics page$/, async () => {
        await languageRU.Open();
    });

    this.Then(/^I click language icon top right$/, async () => {
        await languageRU.LanguagePopup();
    
    });

    this.Then(/^select 'Русский' language$/, async () => {
        await languageRU.Select();
    });

    this.Then(/^save changes in the pop-up$/, async () => {
        await languageRU.Save();
    });

    this.Then(/^page language is changed to Russian$/, async () => {
        await languageRU.Result();
    });
}
