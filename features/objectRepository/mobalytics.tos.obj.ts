import { by, element, ElementFinder } from "protractor";

export class mobalyticsTOSRepository {
    readonly mobalyticsTOSButton:ElementFinder = element(by.xpath("//*[@class='css-16yxfgi elyzpsx0' and contains(text(), 'Terms of Service')]"));
    readonly mobalyticsTOSRedirection:ElementFinder = element(by.xpath("//*[@class='entry-title' and contains(text(), 'Mobalytics (Gamers Net) Terms of Service')]"));
}