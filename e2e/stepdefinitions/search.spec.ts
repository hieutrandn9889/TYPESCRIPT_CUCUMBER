import { SearchPageObjectUI } from '../interface/searchPageUI';
import { defineSupportCode } from 'cucumber';

defineSupportCode(function ({ When, Then }) {
    const search: SearchPageObjectUI = new SearchPageObjectUI();

    When(/^I type "(.*?)"$/, (text) => {
        return search.searchTextBox.sendKeys(text);
    });

    Then(/^I click on search button$/, () => {

    });
});

