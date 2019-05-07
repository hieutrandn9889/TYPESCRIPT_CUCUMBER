import { browser, ElementFinder, protractor } from 'protractor';

export class base {
    waitForElementAndSendkeys: Function;
    constructor() {
        this.waitForElementAndSendkeys = async (elementWait: ElementFinder, text: string) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.visibilityOf(elementWait), 100000).then(async () => {
                await elementWait.sendKeys(text);

            })
        }
    }


}