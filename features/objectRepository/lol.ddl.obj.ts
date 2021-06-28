import { by, element, ElementFinder } from "protractor";

export class mobalyticsDDLRepository {
    readonly dropdownlist:ElementFinder = element(by.xpath("//*[@class='css-1639zhu ezgi2wg1']"));
    readonly teamfighttactics:ElementFinder = element(by.xpath("//*[@class='ezgi2wg4 css-1xbk00v elyzpsx1']"));
    readonly teamfighttacticsPageName:ElementFinder = element(by.xpath("//*[@class='css-jegidi ei3cxbd1' and contains(text(), 'TFT Team comps')]"));
}