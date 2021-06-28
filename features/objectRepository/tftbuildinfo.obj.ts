import { by, element, ElementFinder } from "protractor";

export class buildRepository {
    readonly buildName:ElementFinder = element(by.xpath("//*[@class='css-8kn6rw' and contains(text(), 'Dawnbringer Karma')]"));
    readonly buildExpandArrow:ElementFinder = element(by.xpath("//*[@class='css-1raemjc e1yyksvk5']"));
    readonly buildExpandWindow:ElementFinder = element(by.xpath("//*[@class='css-z61zmk e1we5trg3' and contains(text(), 'General info')]"));
}