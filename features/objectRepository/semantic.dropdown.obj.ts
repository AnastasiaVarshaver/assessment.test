import { by, element, ElementFinder } from "protractor";

export class dropdownRepository {
    readonly dropdown:ElementFinder = element(by.xpath("//*[@class='another dropdown example']"));
    readonly dropdownFemale:ElementFinder = element(by.xpath("//*[@class='item active selected' and contains (text(),'Female')]"));
}