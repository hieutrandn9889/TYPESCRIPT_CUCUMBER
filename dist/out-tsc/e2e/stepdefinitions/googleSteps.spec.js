var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { browser, protractor } from 'protractor';
import { GooglePage } from '../actions/pages/googlePage';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const google = new GooglePage();
defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I open browser$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(browser.getTitle()).to.eventually.equal('Google');
        yield console.log('Open chrome browser');
    }));
    Then(/^I input "(.*?)"$/, (value) => {
        return google.typeInputKey(value.toString());
    });
    Then(/^I enter keyboard$/, () => __awaiter(this, void 0, void 0, function* () {
        yield browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }));
    When(/^I click button audio$/, () => __awaiter(this, void 0, void 0, function* () {
        yield google.clickToAudioBtn();
    }));
});
//# sourceMappingURL=googleSteps.spec.js.map