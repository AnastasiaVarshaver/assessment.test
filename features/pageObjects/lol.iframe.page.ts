import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { mobalyticsIframeVideo } from "../objectRepository/lol.iframe.obj";

const defaultTimeout = browser.params.defaultTimeout;


export class lolIFrame {
    lolIFrame: mobalyticsIframeVideo;

    constructor(){
        this.lolIFrame = new mobalyticsIframeVideo;
    }
    public async Open (){
        await browser.navigate().to("https://app.mobalytics.gg/lol/tier-list");
    }

    public async Player (){
        await browser.wait(ExpectedConditions.visibilityOf(await this.lolIFrame.videoplayer), defaultTimeout, "Videoplayer didn't load or has incorrect locator");
        await browser.actions().click(this.lolIFrame.videoplayer).perform();
    }

    public async IFrame (){
        await browser.wait(ExpectedConditions.presenceOf(await this.lolIFrame.videoplayer), defaultTimeout, "Iframe didn't load or has incorrect locator");
        await browser.switchTo().frame(this.lolIFrame.iframePlayer.getWebElement());
    }
}