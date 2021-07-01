import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { tftFiltersRep } from "../objectRepository/tft.filtlersrefresh.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class tftFiltersRefresh {
    tftFiltersRefresh: tftFiltersRep;

    constructor(){
        this.tftFiltersRefresh = new tftFiltersRep;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/tft/team-comps");
    }

    public async SelectSFilter (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftFiltersRefresh.filterS), defaultTimeout, "Filter for S tiers didn't load or has incorrect locator");
        await browser.actions().click(this.tftFiltersRefresh.filterS).perform();
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftFiltersRefresh.resultsforFilter), defaultTimeout, "Results for selected filter didn't load");
    }


    public async RefreshAllFilters (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftFiltersRefresh.refreshFilersButton), defaultTimeout, "Clear button didn't load or has incorrect locator");
        await browser.actions().click(this.tftFiltersRefresh.refreshFilersButton).perform();
    }

    public async FiltersRefreshed (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.tftFiltersRefresh.allResults), defaultTimeout, "Filters didn't clear");

    }
}
