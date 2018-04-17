import {$, browser, By, protractor, element, ElementFinder, by} from 'protractor';
import { GooglePage } from '../actions/pages/googlePage';
import { defineSupportCode } from 'cucumber';
import {} from 'jasmine';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const google: GooglePage = new GooglePage();
defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I open browser$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal('Google');
        await console.log('Open chrome browser');
    });
    Then(/^I input "(.*?)"$/, (value) => {
        return google.typeInputKey(value.toString());
    });
    Then(/^I enter keyboard$/, async() => {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });
    When(/^I click button audio$/, async() => {
        await google.clickToAudioBtn();
    });
});
