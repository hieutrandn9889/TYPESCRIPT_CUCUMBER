import { BasePage } from '../commons/basePage';
import { SearchPageObjectUI } from '../../interface/searchPageUI';
const search = new SearchPageObjectUI();
export class GooglePage extends BasePage {
    // public readonly searchButton1: ElementFinder;
    // public readonly searchField: ElementFinder;
    // constructor () {
    //     super();
    //     this.searchButton1 = search.searchTextBox;
    //     this.searchField = search.searchButton;
    // }
    // public goSearch(value: string): Promise<void> {
    //     this.sendkeyToElementValue(search.searchTextBox, value);
    //     return this.clickToElement(search.searchButton);
    // }
    // clear and input text (khai bao tuong minh cho ham void)
    typeInputKey(value) {
        return this.sendkeyToElementValue(search.searchTextBox, value);
    }
    // click search button
    clickToAudioBtn() {
        return this.clickToElement(search.audio1);
    }
}
//# sourceMappingURL=googlePage.js.map