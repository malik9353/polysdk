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
const SecurityToken_1 = require("../SecurityToken");
const Factory_1 = require("./Factory");
const PolymathError_1 = require("../../PolymathError");
const types_1 = require("../../types");
class SecurityTokenFactory extends Factory_1.Factory {
    constructor(context) {
        super(SecurityToken_1.SecurityToken, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(uid);
            let securityToken;
            try {
                securityToken = yield this.context.contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            const [name, owner, address] = yield Promise.all([
                securityToken.name(),
                securityToken.owner(),
                securityToken.address(),
            ]);
            return { name, owner, address };
        });
    }
}
exports.SecurityTokenFactory = SecurityTokenFactory;
//# sourceMappingURL=SecurityTokenFactory.js.map