import {$, browser, By, protractor, element, ElementFinder, by} from 'protractor';
import { SwPage } from '../actions/pages/swPage';
// import { defineSupportCode } from 'cucumber';
import {} from 'jasmine';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const sw: SwPage = new SwPage();
// update protractor 2x to 4x
const {Given, When, Then} = require('cucumber');
    Given(/^I open browser on chrome$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal('SWISSCARD SYSTEM CONSOLE');
        await console.log('Open chrome browser');
    });
    Then(/^I input username "(.*?)"$/, (value) => {
        return sw.typeInputUsername(value.toString());
    });
    Then(/^I input password "(.*?)"$/, (value) => {
        return sw.typeInputPassword(value.toString());
    });
    Then(/^I click login button$/, async() => {
        await sw.clickToLoginBtn();
    });
    Then(/^I click customer button$/, async() => {
        await sw.clickToCustomerBtn();
    });
    Then(/^I input autotest "(.*?)"$/, (value) => {
        return sw.typeInputAutotest(value.toString());
    });
    Then(/^I click search user button$/, async() => {
        await sw.clickToSearchUserBtn();
    });
    Then(/^I click delete button$/, async() => {
        await browser.sleep(1000);
        await sw.clickToDeleteBtn();
    });

