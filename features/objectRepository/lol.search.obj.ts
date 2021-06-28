import { by, element, ElementFinder } from "protractor";

export class mobalyticsSearchRepository {
    readonly searchField:ElementFinder = element(by.xpath("//*[@id='downshift-9-input']"));
    readonly heroBuild:ElementFinder = element(by.xpath("//*[@class='css-122656p' and contains(text(), 'Diana')]"));
}