
import { browser, element, ElementFinder } from 'protractor';

export abstract class BasePage {

  // click to element
  protected async clickToElement(element: ElementFinder): Promise<void> {
    await element.click();
    await browser.sleep(2000);
  }

  // sendkey to element
  protected async sendkeyToElement(element: ElementFinder): Promise<void> {
    await element.click();
    await element.clear();
    await element.sendKeys();
  }

  // sendkey to element has value
  protected async sendkeyToElementValue(element: ElementFinder, value: string): Promise<void> {
    await element.click();
    await element.clear();
    await element.sendKeys(value);
    await browser.sleep(1000);
  }
  // get url
  protected async get(url: string): Promise<void> {
    await browser.get(url);
    await browser.sleep(1000);
  }

  // switch
  public selectWindow(index) {
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
