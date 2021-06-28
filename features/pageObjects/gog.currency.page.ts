import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { gogCurrencyObj } from "../objectRepository/gog.currency.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class gogCurrency {
    gogCurrency: gogCurrencyObj;

    constructor(){
        this.gogCurrency = new gogCurrencyObj;
    }
    public async Open (){
        await browser.navigate().to("https://www.gog.com/");
    }

    public async USDButton (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.gogCurrency.usdButton), defaultTimeout, "USD button didn't load or has incorrect locator");
        await browser.actions().click(this.gogCurrency.usdButton).perform();
    }

    public async CurrencyChange (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.gogCurrency.currencyChange), defaultTimeout, "Currency didn't change");
    }
}