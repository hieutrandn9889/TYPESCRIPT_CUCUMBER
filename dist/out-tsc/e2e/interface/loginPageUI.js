import { By, element } from 'protractor';
export class LoginPageUI {
    constructor() {
        this.userName = element(By.id('j_username'));
        this.passWord = element(By.id('password'));
        this.loginBtn = element(By.xpath('//input[@value="ADMIN LOGIN"]'));
    }
}
//# sourceMappingURL=loginPageUI.js.map