import { $, browser, By, protractor, element, ElementFinder, by } from 'protractor';
import { defineSupportCode } from 'cucumber';
const { promise } = require('selenium-webdriver');
import { expect, should, assert } from '../../expect';

defineSupportCode(function ({ Given, Then }) {

  Given(/^I open website and check title$/, async () => {
    // await browser.navigate().to("https://google.com");
    element(by.model('todoList.todoText')).sendKeys('abc');
    element(by.css('[value="add"]')).click();
    await browser.sleep(5000);
    var todoList = element.all(by.repeater('todo in todoList.todos'));

    // expect(await todoList.count()).to.equal(3);
    expect(todoList.count()).to.eventually.equal(3);
    expect(todoList.get(2).getText()).to.eventually.equal('abc');

    // // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).to.eventually.equal(2);
  });

  Then(/^I get title of page$/, async () => {
    await browser.getTitle().then(function (title) {
      console.log("The title is : " + title)
    });

    browser.getCurrentUrl().then(function (url) {
      console.log("Web page url is : " + url)
    });
    //  async dung promise luu web API
    // promise.then(function (response) {
    //   console.log(response.body);
    // });
  });


  Then(/^I go to google page$/, async () => {
    await browser.sleep(3000);
    await browser.navigate().to("https://google.com");
  });

  Then(/^I refresh page$/, async () => {
    await browser.sleep(3000);
    await browser.refresh();
  });



});