import { $, By, element } from 'protractor';
export class SearchPageObjectUI {
    constructor() {
        this.searchTextBox = $(`input[name='q']`);
        this.searchButton = $(`input[name='btnK']`);
        this.audio1 = element(By.id('gsri_ok0'));
        this.audio2 = element(By.id('spchb'));
        this.searchButton1 = element(By.name('btnK'));
        this.searchField = element(By.id('lst-ib'));
    }
}
//# sourceMappingURL=searchPageUI.js.map