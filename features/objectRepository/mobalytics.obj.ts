import { by, element, ElementFinder } from "protractor";

export class mobalyticsRepository {
    readonly mobalyticsTitle:ElementFinder = element(by.xpath("//*[@class='css-p0i13t' and contains(text(), 'win more in')]"));
    readonly mobalyticsLogo:ElementFinder = element(by.xpath("//*[@class='css-19mgauj']"));
}