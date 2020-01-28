"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserUtils_1 = require("../browserUtils");
const utils_1 = require("../utils");
const testUtils_1 = require("../testUtils");
describe('browserUtils', () => {
    describe('.getNetworkId', () => {
        let ethereumBrowserMock;
        beforeEach(() => {
            ethereumBrowserMock = testUtils_1.mockEthereumBrowser({
                options: {
                    networkId: 1,
                    loaded: false,
                },
            });
        });
        test('should wait until Metamask has loaded', () => __awaiter(this, void 0, void 0, function* () {
            const promise = browserUtils_1.getNetworkId();
            const spy = jest.fn();
            promise.then(spy);
            // Force asyncrony
            yield utils_1.delay(0);
            expect(spy).not.toHaveBeenCalled();
            ethereumBrowserMock.load();
            yield utils_1.delay(150);
            expect(spy).toHaveBeenCalledWith(1);
        }));
    });
});
//# sourceMappingURL=browserUtils.js.map