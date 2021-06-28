import { by, element, ElementFinder } from "protractor";

export class esportsSwitchObj {
    readonly switchModeOff:ElementFinder = element(by.xpath("//*[@class='css-2od2cb e1gcfgqr2']"));
    readonly switchModeOn:ElementFinder = element(by.xpath("//*[@value='true']"));
}