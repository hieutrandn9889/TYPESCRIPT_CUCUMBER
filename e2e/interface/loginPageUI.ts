import {$, browser, By, element, ElementFinder} from 'protractor';

export class LoginPageUI {
    public companyTextbox: ElementFinder;
    public usernameTextbox: ElementFinder;
    public passwordTextbox: ElementFinder;
    public loginBtn: ElementFinder;

    constructor() {
        this.companyTextbox  = element(By.xpath('//input[@name="company"]'));
        this.usernameTextbox = element(By.xpath('//input[@name="username"]'));
        this.passwordTextbox = element(By.xpath('//input[@name="password"]'));
        this.loginBtn        = element(By.xpath('//button[@id="login"]'));
    }
}


