import {BasePage} from '../commons/basePage';
import {$, browser, By, element, ElementFinder} from 'protractor';
import {Key, promise as promisewd} from 'selenium-webdriver';
import {LoginPageUI } from '../../interface/loginPageUI';
import {HomePageUI} from '../../interface/homePageUI';

const login: LoginPageUI = new LoginPageUI();
const home: HomePageUI = new HomePageUI();
export class SwPage extends BasePage {

    public typeInputUsername(value: string): Promise<void>  {
        return this.sendkeyToElementValue(login.userName, value);
    }
    public typeInputPassword(value: string): Promise<void>  {
        return this.sendkeyToElementValue(login.passWord, value);
    }
    // click login button
    public clickToLoginBtn(): Promise<void> {
       return this.clickToElement(login.loginBtn);
    }
    // click customer button
    public clickToCustomerBtn(): Promise<void> {
        return this.clickToElement(home.customerBtn);
    }
     // input autotest
     public typeInputAutotest(value: string): Promise<void>  {
        return this.sendkeyToElementValue(home.searchContent, value);
    }
    // click search user button
    public clickToSearchUserBtn(): Promise<void> {
        return this.clickToElement(home.searchUser);
    }
     // click search user button
    public clickToDeleteBtn() {
        this.clickToElement(home.deleteUser);
            // wait for handels[index] to exist
        // this.selectWindow(0);
    }
}
