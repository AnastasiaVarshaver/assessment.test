import { by, element, ElementFinder } from "protractor";

export class gogIframeVideo {
    readonly playbutton:ElementFinder = element(by.xpath("//*[@class='productcard-player__play-button ng-scope']"));
    readonly iframePlayer:ElementFinder = element(by.xpath("//*[@class='html5-video-player ytp-exp-bottom-control-flexbox ytp-title-enable-channel-logo ytp-embed ytp-embed-playlist ytp-large-width-mode paused-mode ytp-expand-pause-overlay']"));
}