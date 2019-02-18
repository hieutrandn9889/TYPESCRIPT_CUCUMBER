import { By, element } from 'protractor';
export class HomePageUI {
    constructor() {
        this.customerBtn = element(By.xpath('//img[@title="Customer Care Administrator"]'));
        this.searchContent = element(By.xpath('(//input[@name="searchContent"])[1]'));
        this.searchUser = element(By.xpath('//input[@class="submitSeach"]'));
        this.deleteUser = element(By.xpath('//form[@id="deleteForm"]/a[@title="Delete"]'));
    }
}
//# sourceMappingURL=homePageUI.js.map