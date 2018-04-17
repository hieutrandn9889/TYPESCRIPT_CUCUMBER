import { browser } from 'protractor';
import { SearchPageObjectUI } from '../interface/searchPageUI';
import { defineSupportCode } from 'cucumber';

defineSupportCode(function ({Given}) {
    const search: SearchPageObjectUI = new SearchPageObjectUI();

    Given(/^I am on google page$/, () => {
        return true;
    });
});
