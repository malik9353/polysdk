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
const entities_1 = require("../entities");
class WithdrawTaxes extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.WithdrawTaxes;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, dividendIndex, dividendType } = this.args;
            const { contractWrappers, factories } = this.context;
            try {
                yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            let dividendModule;
            switch (dividendType) {
                case types_1.DividendType.Erc20: {
                    [dividendModule] = yield contractWrappers.getAttachedModules({ moduleName: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint, symbol }, { unarchived: true });
                    break;
                }
                case types_1.DividendType.Eth: {
                    [dividendModule] = yield contractWrappers.getAttachedModules({
                        moduleName: contract_wrappers_1.ModuleName.EtherDividendCheckpoint,
                        symbol,
                    });
                    break;
                }
            }
            if (!dividendModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: "Dividends of the specified type haven't been enabled. Did you forget to call dividends.enable() on your Security Token?",
                });
            }
            yield this.addTransaction(dividendModule.withdrawWithholding, {
                tag: types_1.PolyTransactionTag.WithdrawTaxWithholdings,
                resolver: () => __awaiter(this, void 0, void 0, function* () {
                    return factories.dividendDistributionFactory.refresh(entities_1.DividendDistribution.generateId({
                        securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                        dividendType,
                        index: dividendIndex,
                    }));
                }),
            })({ dividendIndex });
        });
    }
}
exports.WithdrawTaxes = WithdrawTaxes;
//# sourceMappingURL=WithdrawTaxes.js.map