import { by, element, ElementFinder } from "protractor";

export class mobalyticsRegionhRepository {
    readonly regionsRU:ElementFinder = element(by.xpath("//*[@class='css-70mlwz ekk3vtk3' and contains (text(), 'RU')]"));
    readonly regionsPopup:ElementFinder = element(by.xpath("//*[@class='css-1y255g4 e1e6df630']"));
    readonly regionEUW:ElementFinder = element(by.xpath("//*[@class='active css-1met28 e14s8cry4']"));
    readonly regionEUW2:ElementFinder = element(by.xpath("//*[@class='css-70mlwz ekk3vtk3' and contains(text(), 'EUW')]"));

}