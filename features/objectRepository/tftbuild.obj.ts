import { by, element, ElementFinder } from "protractor";

export class mobalyticsHasagiBuildRepository {
    readonly dropdownlist:ElementFinder = element(by.xpath("//*[@class='css-1639zhu ezgi2wg1']"));
    readonly teamfighttactics:ElementFinder = element(by.xpath("//*[@class='css-1o61t85 ezgi2wg7']"));
    readonly teamfighttacticsHasagiBuild:ElementFinder = element(by.xpath("//*[@class='css-8kn6rw' and contains(text(), 'Hasagi')]"));
    readonly teamfighttacticsHasagiPage:ElementFinder = element(by.xpath("//*[@class='css-184yedx euxbs4g1' and contains(text(), 'Hasagi')]"));
}