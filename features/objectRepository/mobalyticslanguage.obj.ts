import { by, element, ElementFinder } from "protractor";

export class mobalyticsLanguage {
    readonly languageIcon:ElementFinder = element(by.xpath("//*[@class='e4oq0kr0 css-uc37aj e17w3iyy0']"));
    readonly languageRussian:ElementFinder = element(by.xpath("//*[@class='css-10iahqc euk58rr9' and contains(text(), 'Русский')]"));
    readonly languageSave:ElementFinder = element(by.xpath("//*[@class='css-17ls7xt' and contains(text(), 'Save')]"));
    readonly languagePage:ElementFinder = element(by.xpath("//*[@lang='ru']"));
}