import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { gogSearchRepository } from "../objectRepository/gog.search.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class gogSearch {
    gogSearch: gogSearchRepository;

    constructor(){
        this.gogSearch = new gogSearchRepository;
    }
    public async Open (){
        await browser.navigate().to("https://www.gog.com/");
    }

    public async SearchButtonVisibility (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.gogSearch.searchButton), defaultTimeout, "Searching button didn't load or has incorrect locator");
        await browser.actions().click(this.gogSearch.searchButton).perform();
    }


    public async SearchField (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.gogSearch.searchField), defaultTimeout, "Search field didn't load or has incorrect locator");
        await this.gogSearch.searchField.sendKeys('Bioshock');
        await browser.sleep(3000);
    }
    public async GameResults (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.gogSearch.searchResult), defaultTimeout, "Results didn't load");
    }
}