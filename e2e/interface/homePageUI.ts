import {$, browser, By, element, ElementFinder} from 'protractor';

export class HomePageUI {
    public customerBtn: ElementFinder;
    public searchContent: ElementFinder;
    public searchUser: ElementFinder;
    public deleteUser: ElementFinder;
    constructor() {
        this.customerBtn   = element(By.xpath('//img[@title="Customer Care Administrator"]'));
        this.searchContent = element(By.xpath('(//input[@name="searchContent"])[1]'));
        this.searchUser    = element(By.xpath('//input[@class="submitSeach"]'));
        this.deleteUser    = element(By.xpath('//form[@id="deleteForm"]/a[@title="Delete"]'));
    }
}



