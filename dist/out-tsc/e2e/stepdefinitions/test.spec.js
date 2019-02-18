var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { browser, element, by } from 'protractor';
import { defineSupportCode } from 'cucumber';
const { promise } = require('selenium-webdriver');
import { expect } from '../../expect';
defineSupportCode(function ({ Given, Then }) {
    Given(/^I open website and check title$/, () => __awaiter(this, void 0, void 0, function* () {
        // await browser.navigate().to("https://google.com");
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();
        yield browser.sleep(5000);
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        // expect(await todoList.count()).to.equal(3);
        expect(todoList.count()).to.eventually.equal(3);
        expect(todoList.get(2).getText()).to.eventually.be.a('write first protractor test');
        // // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).to.eventually.equal(2);
    }));
    Then(/^I get title of page$/, () => __awaiter(this, void 0, void 0, function* () {
        yield browser.getTitle().then(function (title) {
            console.log("The title is : " + title);
        });
        //  async dung promise luu web API
        // promise.then(function (response) {
        //   console.log(response.body);
        // });
    }));
});
//# sourceMappingURL=test.spec.js.map