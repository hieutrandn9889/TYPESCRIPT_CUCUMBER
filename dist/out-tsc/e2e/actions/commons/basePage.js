var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WaitConditions } from './waiter';
import { browser } from 'protractor';
export class BasePage {
    constructor() {
        this._conditions = new WaitConditions();
    }
    // click to element
    clickToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.click();
            yield browser.sleep(1000);
        });
    }
    // sendkey to element
    sendkeyToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._conditions.clickable(element);
            yield element.clear();
            yield element.sendKeys();
            yield browser.sleep(1000);
        });
    }
    // sendkey to element has value
    sendkeyToElementValue(element, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._conditions.clickable(element);
            yield element.clear();
            yield element.sendKeys(value);
            yield browser.sleep(1000);
        });
    }
    // get url
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.get(url);
            yield browser.sleep(1000);
        });
    }
    // switch
    selectWindow(index) {
        // wait for handels[index] to exists
        browser.driver.wait(function () {
            return browser.driver.getAllWindowHandles().then(function (handles) {
                /**
                 * Assume that handles.length >= 1 and index >=0.
                 * So when i call selectWindow(index) i return
                 * true if handles contains that window.
                 */
                if (handles.length > index) {
                    return true;
                }
            });
        });
        // here i know that the requested window exists
        // switch to the window
        return browser.driver.getAllWindowHandles().then(function (handles) {
            return browser.driver.switchTo().window(handles[index]);
        });
    }
}
//# sourceMappingURL=basePage.js.map