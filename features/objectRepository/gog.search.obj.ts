import { by, element, ElementFinder } from "protractor";

export class gogSearchRepository {
    readonly searchButton:ElementFinder = element(by.xpath("//*[@class='menu-icon-svg menu-icon-svg--search']"));
    readonly searchField:ElementFinder = element(by.xpath("//*[@class='menu-search-input__field js-menu-search-input ng-valid ng-dirty ng-touched ng-empty']"));
    readonly searchResult:ElementFinder = element(by.xpath("//*[@class='highlighted' and contains(text(), 'BioShock')]"));
}