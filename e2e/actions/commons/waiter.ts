import {browser, element, ElementFinder, ExpectedConditions as EC} from 'protractor';
export class WaitConditions {

    public async clickable(element: ElementFinder, opt_message?: string) {
        await browser.wait(EC.elementToBeClickable(element), 10 * 1000, opt_message);
    }
}
