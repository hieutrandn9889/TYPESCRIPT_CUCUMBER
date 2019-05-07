import { browser, ElementFinder, protractor } from 'protractor';

export class basePage {
    waitForElementAndSendkeys: Function;
    waitForElementAndClick: Function;
    waitForElementAndGetText: Function;
    waitForElementToCheckContainText: Function;
    getElementValue: Function;
    switchIframe: Function;
    switchParrentWindow: Function;
    popUpCookies: ElementFinder;
    closePopUpCookies: Function;
    waitForUrlAndAssert: Function;
    clearCache: Function;
    clearAPIUatUrl: string;
    clearAPIUat: ElementFinder;
    checkElementVisible: Function;
    constructor() {
        this.waitForElementAndSendkeys = async (elementWait: ElementFinder, text: string) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.visibilityOf(elementWait), 100000).then(async () => {
                await elementWait.sendKeys(text);
            })
        }
        this.waitForElementAndClick = async (elementWait: ElementFinder) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(elementWait), 100000);
            await browser.wait(EC.presenceOf(elementWait), 100000);
            await browser.wait(EC.visibilityOf(elementWait), 100000);
            await browser.wait(EC.elementToBeClickable(elementWait), 100000);
            await browser.sleep(500);
            await elementWait.click();
        }
        this.waitForElementAndGetText = async (elementWait: ElementFinder, result: string) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(elementWait), 100000);
            await browser.wait(EC.visibilityOf(elementWait), 100000);
            await elementWait.getText().then(function (text) {
                expect(text).toEqual(result);
            })
        }
        this.waitForElementToCheckContainText = async (elementWait: ElementFinder, result: string) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(elementWait), 100000);
            await browser.wait(EC.visibilityOf(elementWait), 100000);
            await elementWait.getText().then(function (text) {
                expect(text).toContain(result)
            })
        }
        //function for only check Reebonz email user
        this.getElementValue = async (elementWait: ElementFinder) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(elementWait), 100000);
            await browser.wait(EC.visibilityOf(elementWait), 100000);
            let result = await elementWait.getAttribute("value");

            return result;
        }
        this.switchIframe = async (elementWait: ElementFinder) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(elementWait), 100000);
            await browser.wait(EC.visibilityOf(elementWait), 100000);
            await browser.switchTo().frame(elementWait.getWebElement());
        }
        this.switchParrentWindow = async (elementWait: ElementFinder) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(elementWait), 100000);
            await browser.wait(EC.visibilityOf(elementWait), 100000);
            await browser.switchTo().defaultContent();

        }

        this.closePopUpCookies = async (elementWait: ElementFinder) => {
            let EC = protractor.ExpectedConditions;
            let popup = await browser.wait(EC.visibilityOf(elementWait), 50000);
            if (popup) {
                elementWait.click();
            }
        }
        this.waitForUrlAndAssert = async (string: string) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.urlContains(string), 100000);
        }
        this.clearCache = async (url: string) => {
            await browser.get(url);
            await browser.executeScript('window.localStorage.clear();');
            await browser.executeScript('window.sessionStorage.clear();');
            await browser.driver.manage().deleteAllCookies();
        }

        this.checkElementVisible = async (elementWait: ElementFinder) => {
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(elementWait), 100000);
            await browser.wait(EC.presenceOf(elementWait), 100000);
            await browser.wait(EC.visibilityOf(elementWait), 100000);
        }
    }

}