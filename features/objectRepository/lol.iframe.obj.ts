import { by, element, ElementFinder } from "protractor";

export class mobalyticsIframeVideo {
    readonly videoplayer:ElementFinder = element(by.xpath("//*[@class='css-qvfwf1']"));
    readonly iframePlayer:ElementFinder = element(by.xpath("//*[@title='YouTube video player']"));
}