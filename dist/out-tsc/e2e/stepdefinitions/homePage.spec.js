import { SearchPageObjectUI } from '../interface/searchPageUI';
import { defineSupportCode } from 'cucumber';
defineSupportCode(function ({ Given }) {
    const search = new SearchPageObjectUI();
    Given(/^I am on google page$/, () => {
        return true;
    });
});
//# sourceMappingURL=homePage.spec.js.map