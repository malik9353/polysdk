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
const entities_1 = require("../entities");
class ControllerTransfer extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.ControllerTransfer;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, amount, from, to, log = '', data = '' } = this.args;
            const { contractWrappers, currentWallet, factories } = this.context;
            const addresses = { from, to };
            /**
             * Validation
             */
            Object.keys(addresses).forEach(key => {
                if (!utils_1.isValidAddress(addresses[key])) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.InvalidAddress,
                        message: `Provided "${key}" address is invalid: ${addresses[key]}`,
                    });
                }
            });
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
            const senderBalance = yield securityToken.balanceOf({ owner: from });
            if (senderBalance.lt(amount)) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.InsufficientBalance,
                    message: `Sender's balance of ${senderBalance} is less than the requested amount of ${amount}`,
                });
            }
            const controller = yield securityToken.controller();
            const account = yield currentWallet.address();
            if (account !== controller) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `You must be the controller of this Security Token to perform forced transfers. Did you remember to call "setController"?`,
                });
            }
            /**
             * Transactions
             */
            yield this.addTransaction(securityToken.controllerTransfer, {
                tag: types_1.PolyTransactionTag.ControllerTransfer,
                resolver: () => __awaiter(this, void 0, void 0, function* () {
                    const refreshingFrom = factories.shareholderFactory.refresh(entities_1.Shareholder.generateId({
                        securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                        address: from,
                    }));
                    const refreshingTo = factories.shareholderFactory.refresh(entities_1.Shareholder.generateId({
                        securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                        address: to,
                    }));
                    return Promise.all([refreshingFrom, refreshingTo]);
                }),
            })({ from, to, value: amount, data, operatorData: log });
        });
    }
}
exports.ControllerTransfer = ControllerTransfer;
//# sourceMappingURL=ControllerTransfer.js.map