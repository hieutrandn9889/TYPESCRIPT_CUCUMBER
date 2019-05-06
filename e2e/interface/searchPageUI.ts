import {$, browser, By, element, ElementFinder} from 'protractor';

export class SearchPageObjectUI {
    public searchTextBox: any;
    public searchButton: any;
    public searchButton1: ElementFinder;
    public searchField: ElementFinder;
    public audio1: ElementFinder;
    public audio2: ElementFinder;

    constructor() {
        this.searchTextBox = $(`input[name='q']`);
        this.searchButton = $(`input[name='btnK']`);
        this.audio1 = element(By.id('gsri_ok0'));
        this.audio2 = element(By.id('spchb'));
        this.searchButton1 = element(By.name('btnK'));
        this.searchField = element(By.id('lst-ib'));
    }
}
