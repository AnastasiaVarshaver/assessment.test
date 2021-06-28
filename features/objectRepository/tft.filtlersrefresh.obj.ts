import { by, element, ElementFinder } from "protractor";

export class tftFiltersRep {
    readonly filterS:ElementFinder = element(by.xpath("//*[@class='css-t3635x' and contains(text(), 'S')]"));
    readonly resultsforFilter:ElementFinder = element(by.xpath("//*[@class='css-jmbqhr']"));
    readonly refreshFilersButton:ElementFinder = element(by.xpath("//*[@stroke-linejoin='round']"));
    readonly allResults:ElementFinder = element(by.xpath("//*[@alt='All Tiers']"));
}