import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { gogCartObj } from "../objectRepository/gog.cart.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class gogCart {
    gogCart: gogCartObj;

    constructor(){
        this.gogCart = new gogCartObj;
    }
    public async Open (){
        await browser.navigate().to("https://www.gog.com/games?page=1&sort=popularity");
    }

    public async SelectGame (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.gogCart.gameBanner), defaultTimeout, "Game banner didn't load or has incorrect locator");
        await browser.actions().click(this.gogCart.gameBanner).perform();
        await browser.sleep(2000);
    }

    public async AddToCart(){
        await browser.wait(ExpectedConditions.presenceOf(await this.gogCart.cartButton), defaultTimeout, "Game have not been added");
        await browser.actions().click(this.gogCart.gameBanner).perform();
        await browser.sleep(2000);
    }

    public async ButtonChange (){
        await browser.wait(ExpectedConditions.presenceOf(await this.gogCart.cartButtonChange), defaultTimeout, "Button name haven't changed");
    }

    public async ItemsInCart (){
        await browser.wait(ExpectedConditions.presenceOf(await this.gogCart.cartItemsDisplay), defaultTimeout, "Items have not been added");
    }
    
}