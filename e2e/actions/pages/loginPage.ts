import {BasePage} from '../commons/basePage';
import { LoginPageUI } from '../../interface/loginPageUI';

const loginPage: LoginPageUI = new LoginPageUI();
export class LoginPage extends BasePage {

    // clear and input text username (khai bao tuong minh cho ham void)
    public typeInputCompany(value: string): Promise<void>  {
        return this.sendkeyToElementValue(loginPage.companyTextbox, value);
    }
    
    // clear and input text username (khai bao tuong minh cho ham void)
    public typeInputUsername(value: string): Promise<void>  {
        return this.sendkeyToElementValue(loginPage.usernameTextbox, value);
    }

    // clear and input text password (khai bao tuong minh cho ham void)
    public typeInputPassword(value: string): Promise<void>  {
        return this.sendkeyToElementValue(loginPage.passwordTextbox, value);
    }

    // click login button
    public clickToLoginBtn(): Promise<void> {
       return this.clickToElement(loginPage.loginBtn);
    }
}
