import { by, element, ElementFinder } from "protractor";

export class tftDDLRepository {
    readonly dropdownlist:ElementFinder = element(by.xpath("//*[@id='downshift-25-toggle-button']"));
    readonly dropdownlistDawnbringers:ElementFinder = element(by.xpath("//*[@id='downshift-25-menu']"));
    readonly dropdownlistDawnbringers2:ElementFinder = element(by.xpath("//*[@alt='Dawnbringer']"));
}