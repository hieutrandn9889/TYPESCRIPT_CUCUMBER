import { SearchPageObjectUI } from '../interface/searchPageUI';
import { defineSupportCode } from 'cucumber';

defineSupportCode(function ({ Then }) {
    const search: SearchPageObjectUI = new SearchPageObjectUI();

    Then(/^I clear the search text$/, () => {
        return search.searchTextBox.clear();
    });
});
