import { by, element, ElementFinder } from "protractor";

export class gogCartObj {
    readonly gameBanner:ElementFinder = element(by.xpath("//*[@class='product-tile__title' and contains(text(), 'Horizon Zero Dawn™ Complete Edition')]"));
    readonly cartButton:ElementFinder = element(by.xpath("//*[@class='button button--big cart-button ng-scope']"));
    readonly cartButtonChange:ElementFinder = element(by.xpath("//*[@class='cart-button__state-in-cart' and contains(text(), 'Оформить заказ')]"));
    readonly cartItemsDisplay:ElementFinder = element(by.xpath("//*[@class='menu-item__count menu-item__count--cart ng-binding' and contains(text(), '1')]"));
}