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
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const Procedure_1 = require("./Procedure");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const utils_1 = require("../utils");
const entities_1 = require("../entities");
class PauseSto extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.PauseSto;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { stoAddress, stoType, symbol } = this.args;
            const { contractWrappers, factories } = this.context;
            /**
             * Validation
             */
            if (!utils_1.isValidAddress(stoAddress)) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.InvalidAddress,
                    message: `Invalid STO address ${stoAddress}`,
                });
            }
            let stoModule;
            switch (stoType) {
                case types_1.StoType.Capped: {
                    stoModule = yield contractWrappers.moduleFactory.getModuleInstance({
                        name: contract_wrappers_1.ModuleName.CappedSTO,
                        address: stoAddress,
                    });
                    break;
                }
                case types_1.StoType.UsdTiered: {
                    stoModule = yield contractWrappers.moduleFactory.getModuleInstance({
                        name: contract_wrappers_1.ModuleName.UsdTieredSTO,
                        address: stoAddress,
                    });
                    break;
                }
                default: {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: `Invalid STO type ${stoType}`,
                    });
                }
            }
            if (!stoModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `STO ${stoAddress} is either archived or hasn't been launched.`,
                });
            }
            /**
             * Transactions
             */
            yield this.addTransaction(stoModule.pause, {
                tag: types_1.PolyTransactionTag.PauseSto,
                resolver: () => __awaiter(this, void 0, void 0, function* () {
                    const securityTokenId = entities_1.SecurityToken.generateId({ symbol });
                    switch (stoType) {
                        case types_1.StoType.Capped: {
                            return factories.cappedStoFactory.refresh(entities_1.CappedSto.generateId({
                                securityTokenId,
                                stoType: types_1.StoType.Capped,
                                address: stoAddress,
                            }));
                        }
                        case types_1.StoType.UsdTiered: {
                            return factories.usdTieredStoFactory.refresh(entities_1.UsdTieredSto.generateId({
                                securityTokenId,
                                stoType: types_1.StoType.UsdTiered,
                                address: stoAddress,
                            }));
                        }
                    }
                }),
            })({});
        });
    }
}
exports.PauseSto = PauseSto;
//# sourceMappingURL=PauseSto.js.map