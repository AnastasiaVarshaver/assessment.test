import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { tftBuildInfo } from "../pageObjects/tftbuildinfo.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let buildInfo = new tftBuildInfo

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Mobalytics Teamfight Tactics page$/, async () => {
        await buildInfo.Open();
    });

    this.Then(/^I see build 'Dawnbringer Karma' in the list$/, async () => {
        await buildInfo.TftBuild();
    
    });

    this.Then(/^I press arrow icon on Dawnbringers build$/, async () => {
        await buildInfo.Expand();
    
    });

    this.Then(/^General info for the build is shown$/, async () => {
        await buildInfo.Result();
    });

}
