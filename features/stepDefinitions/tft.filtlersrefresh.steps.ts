import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { tftFiltersRefresh } from "../pageObjects/tft.filtlersrefresh.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let tftFilters = new tftFiltersRefresh

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on TFT Team Comps page$/, async () => {
        await tftFilters.Open();
    });

    this.Then(/^I select an 'S' filter in builds list header$/, async () => {
        await tftFilters.SelectSFilter();
    
    });

    this.Then(/^press Clear all button$/, async () => {
        await tftFilters.RefreshAllFilters();
    });

    this.Then(/^all selected filters are cleared$/, async () => {
        await tftFilters.FiltersRefreshed();
    });

}
