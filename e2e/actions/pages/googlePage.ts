import {BasePage} from '../commons/basePage';
import {$, browser, By, element, ElementFinder} from 'protractor';
import {Key, promise as promisewd} from 'selenium-webdriver';
import { SearchPageObjectUI } from '../../interface/searchPageUI';

const search: SearchPageObjectUI = new SearchPageObjectUI();
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
    public typeInputKey(value: string): Promise<void>  {
        return this.sendkeyToElementValue(search.searchTextBox, value);
    }

    // click search button
    public clickToAudioBtn(): Promise<void> {
       return this.clickToElement(search.audio1);
    }
}
