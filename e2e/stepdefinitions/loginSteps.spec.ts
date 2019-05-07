import {$, browser, By, protractor, element, ElementFinder, by} from 'protractor';
import { LoginPage } from '../actions/pages/loginPage';
import { defineSupportCode } from 'cucumber';
import {} from 'jasmine';
import { basePage } from "../actions/commons/test";
import { async } from '@angular/core/testing';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const login: LoginPage = new LoginPage();
let BasePage = new basePage;
import { LoginPageUI } from '../interface/loginPageUI';

const loginPage: LoginPageUI = new LoginPageUI();
defineSupportCode(function ({ Given, When, Then }) {
    Then(/^I input company "(.*?)"$/,async (value) => {
        BasePage.waitForElementAndSendkeys(loginPage.companyTextbox, value);
    });

    Then(/^I input username to login "(.*?)"$/, (value) => {
        BasePage.waitForElementAndSendkeys(loginPage.usernameTextbox, value);
    });

    Then(/^I input password to login "(.*?)"$/, (value) => {
        BasePage.waitForElementAndSendkeys(loginPage.passwordTextbox, value);
    });

    Then(/^I click log in button$/, async() => {
        await login.clickToLoginBtn();
        // await BasePage.waitForElementAndClick(loginPage.loginBtn)
    
    });
});
