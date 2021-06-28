import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { gogCart } from "../pageObjects/gog.cart.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;
    let gogCartFeature = new gogCart

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on GOG shopping page$/, async () => {
        await gogCartFeature.Open();
    });

    this.Then(/^I press 'Cart' icon to add a game to the cart$/, async () => {
        await gogCartFeature.AddToCart();
    
    });

    this.Then(/^the game has been added to cart$/, async () => {
        await gogCartFeature.ButtonChange();
    });

    this.Then(/^the number on the cart displays 1 as the number of added items$/, async () => {
        await gogCartFeature.ItemsInCart();
    });


}
