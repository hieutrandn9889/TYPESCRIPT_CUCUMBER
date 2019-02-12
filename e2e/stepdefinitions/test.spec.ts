import {$, browser, By, protractor, element, ElementFinder, by} from 'protractor';
import { defineSupportCode } from 'cucumber';
defineSupportCode(function ({ Given }) {

  Given(/^I open website and check title$/, () => {
    browser.getTitle().then(function (title) {
      console.log("The title is : " + title)
      browser.sleep(5000);
    })
  });
});