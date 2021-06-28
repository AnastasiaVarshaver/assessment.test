import { by, element, ElementFinder } from "protractor";

export class gogCurrencyObj {
    readonly usdButton:ElementFinder = element(by.xpath("/html/body/div[2]/footer/div[2]/div/div[1]/div[2]/ul/li[2]"));
    readonly currencyChange:ElementFinder = element(by.css("currentCurrencyCode: 'USD'"));
}