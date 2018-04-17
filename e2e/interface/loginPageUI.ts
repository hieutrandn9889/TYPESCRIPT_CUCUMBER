import {$, browser, By, element, ElementFinder} from 'protractor';

export class LoginPageUI {
    public userName: ElementFinder;
    public passWord: ElementFinder;
    public loginBtn: ElementFinder;

    constructor() {
        this.userName = element(By.id('j_username'));
        this.passWord = element(By.id('password'));
        this.loginBtn = element(By.xpath('//input[@value="ADMIN LOGIN"]'));
    }
}


