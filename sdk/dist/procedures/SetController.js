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
const Procedure_1 = require("./Procedure");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const utils_1 = require("../utils");
class SetController extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.SetController;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, controller } = this.args;
            const { contractWrappers, currentWallet } = this.context;
            let securityToken;
            try {
                securityToken = yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            if (!utils_1.isValidAddress(controller)) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `Controller address "${controller}" is invalid.`,
                });
            }
            const owner = yield securityToken.owner();
            const account = yield currentWallet.address();
            if (account !== owner) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `You must be the owner of this Security Token to set the controller`,
                });
            }
            /**
             * Transactions
             */
            yield this.addTransaction(securityToken.setController, {
                tag: types_1.PolyTransactionTag.SetController,
            })({ controller });
        });
    }
}
exports.SetController = SetController;
//# sourceMappingURL=SetController.js.map