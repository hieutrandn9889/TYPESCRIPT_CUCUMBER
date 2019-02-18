var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { browser } from 'protractor';
import { SwPage } from '../actions/pages/swPage';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const sw = new SwPage();
// update protractor 2x to 4x
const { Given, When, Then } = require('cucumber');
Given(/^I open browser on chrome$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(browser.getTitle()).to.eventually.equal('SWISSCARD SYSTEM CONSOLE');
    yield console.log('Open chrome browser');
}));
Then(/^I input username "(.*?)"$/, (value) => {
    return sw.typeInputUsername(value.toString());
});
Then(/^I input password "(.*?)"$/, (value) => {
    return sw.typeInputPassword(value.toString());
});
Then(/^I click login button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield sw.clickToLoginBtn();
}));
Then(/^I click customer button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield sw.clickToCustomerBtn();
}));
Then(/^I input autotest "(.*?)"$/, (value) => {
    return sw.typeInputAutotest(value.toString());
});
Then(/^I click search user button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield sw.clickToSearchUserBtn();
}));
Then(/^I click delete button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield browser.sleep(1000);
    yield sw.clickToDeleteBtn();
}));
//# sourceMappingURL=scStep.spec.js.map