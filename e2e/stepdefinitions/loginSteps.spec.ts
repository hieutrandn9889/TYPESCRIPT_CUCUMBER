import {$, browser, By, protractor, element, ElementFinder, by} from 'protractor';
import { LoginPage } from '../actions/pages/loginPage';
import { defineSupportCode } from 'cucumber';
import {} from 'jasmine';
import { base } from "../actions/commons/test";
import { async } from '@angular/core/testing';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const login: LoginPage = new LoginPage();
let baseP = new base;
import { LoginPageUI } from '../interface/loginPageUI';

const loginPage: LoginPageUI = new LoginPageUI();
defineSupportCode(function ({ Given, When, Then }) {
    // Then(/^I input company "(.*?)"$/, (value) => {
    //     return login.typeInputCompany(value.toString());
    // });

    Then(/^I input company "(.*?)"$/,async (value) => {
        baseP.waitForElementAndSendkeys(loginPage.companyTextbox, value);
    });

    Then(/^I input username to login "(.*?)"$/, (value) => {
        return login.typeInputUsername(value.toString());
    });

    Then(/^I input password to login "(.*?)"$/, (value) => {
        return login.typeInputPassword(value.toString());
    });

    Then(/^I click log in button$/, async() => {
        await login.clickToLoginBtn();
    });
});
