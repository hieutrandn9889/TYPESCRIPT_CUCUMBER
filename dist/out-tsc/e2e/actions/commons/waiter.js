var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { browser, ExpectedConditions as EC } from 'protractor';
export class WaitConditions {
    clickable(element, opt_message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.wait(EC.elementToBeClickable(element), 10 * 1000, opt_message);
        });
    }
}
//# sourceMappingURL=waiter.js.map