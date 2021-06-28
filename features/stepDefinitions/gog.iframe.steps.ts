import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { gogIFrame } from "../pageObjects/gog.iframe.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let gogIframeVid = new gogIFrame

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Horizon Zero Dawn game page$/, async () => {
        await gogIframeVid.Open();
    });

    this.Then(/^I click play button$/, async () => {
        await gogIframeVid.Playbutton();
    
    });

    this.Then(/^iframe with a videoplayer is opened$/, async () => {
        await gogIframeVid.IFrame();
    });

}
