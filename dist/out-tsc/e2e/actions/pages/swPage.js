import { BasePage } from '../commons/basePage';
import { LoginPageUI } from '../../interface/loginPageUI';
import { HomePageUI } from '../../interface/homePageUI';
const login = new LoginPageUI();
const home = new HomePageUI();
export class SwPage extends BasePage {
    typeInputUsername(value) {
        return this.sendkeyToElementValue(login.userName, value);
    }
    typeInputPassword(value) {
        return this.sendkeyToElementValue(login.passWord, value);
    }
    // click login button
    clickToLoginBtn() {
        return this.clickToElement(login.loginBtn);
    }
    // click customer button
    clickToCustomerBtn() {
        return this.clickToElement(home.customerBtn);
    }
    // input autotest
    typeInputAutotest(value) {
        return this.sendkeyToElementValue(home.searchContent, value);
    }
    // click search user button
    clickToSearchUserBtn() {
        return this.clickToElement(home.searchUser);
    }
    // click search user button
    clickToDeleteBtn() {
        this.clickToElement(home.deleteUser);
        // wait for handels[index] to exist
        // this.selectWindow(0);
    }
}
//# sourceMappingURL=swPage.js.map