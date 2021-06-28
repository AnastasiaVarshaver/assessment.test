import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { gogIframeVideo } from "../objectRepository/gog.iframe.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class gogIFrame {
    gogIFrame: gogIframeVideo;

    constructor(){
        this.gogIFrame = new gogIframeVideo;
    }
    public async Open (){
        await browser.navigate().to("https://www.gog.com/game/horizon_zero_dawn_complete_edition");
    }

    public async Playbutton (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.gogIFrame.playbutton), defaultTimeout, "Videoplayer didn't load or has incorrect locator");
        await browser.actions().click(this.gogIFrame.playbutton).perform();
    }

    public async IFrame (){
        await browser.wait(ExpectedConditions.presenceOf(await this.gogIFrame.iframePlayer), defaultTimeout, "Iframe didn't load or has incorrect locator");
        await browser.switchTo().frame(this.gogIFrame.iframePlayer.getWebElement());
    }
}