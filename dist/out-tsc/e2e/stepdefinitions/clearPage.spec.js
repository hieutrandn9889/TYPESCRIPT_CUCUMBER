import { SearchPageObjectUI } from '../interface/searchPageUI';
import { defineSupportCode } from 'cucumber';
defineSupportCode(function ({ Then }) {
    const search = new SearchPageObjectUI();
    Then(/^I clear the search text$/, () => {
        return search.searchTextBox.clear();
    });
});
//# sourceMappingURL=clearPage.spec.js.map