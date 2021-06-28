import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { mobalyticsHover } from "../pageObjects/lol.hover.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let hover = new mobalyticsHover

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics page$/, async () => {
        await hover.Open();
    });

    this.Then(/^I have a DDL button displayed top left$/, async () => {
        await hover.Dropdownlist();
    
    });

    this.Then(/^I hover over DDL button$/, async () => {
        await hover.Hover();
    });

    this.Then(/^the button is highlighted$/, async () => {
        await hover.HoverHighlighted();
    });
}
