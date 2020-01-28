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
const Factory_1 = require("./Factory");
const types_1 = require("../../types");
const Investment_1 = require("../Investment");
const Sto_1 = require("../Sto");
const SecurityToken_1 = require("../SecurityToken");
const PolymathError_1 = require("../../PolymathError");
const { weiToValue } = contract_wrappers_1.conversionUtils;
class InvestmentFactory extends Factory_1.Factory {
    constructor(context) {
        super(Investment_1.Investment, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { stoId, securityTokenId, index } = Investment_1.Investment.unserialize(uid);
            const { stoType, address } = Sto_1.Sto.unserialize(stoId);
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(securityTokenId);
            if (stoType === types_1.StoType.Capped) {
                const module = yield this.context.contractWrappers.moduleFactory.getModuleInstance({
                    name: contract_wrappers_1.ModuleName.CappedSTO,
                    address,
                });
                const tokenPurchases = yield module.getLogsAsync({
                    eventName: contract_wrappers_1.CappedSTOEvents.TokenPurchase,
                    blockRange: {
                        fromBlock: contract_wrappers_1.BlockParamLiteral.Earliest,
                        toBlock: contract_wrappers_1.BlockParamLiteral.Latest,
                    },
                    indexFilterValues: {},
                });
                const thisPurchase = tokenPurchases.find((_, eventIndex) => eventIndex === index);
                if (!thisPurchase) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.FetcherValidationError,
                        message: `Investment ${uid} not found`,
                    });
                }
                const { args: { beneficiary, amount, value }, } = thisPurchase;
                return {
                    address: beneficiary,
                    tokenAmount: weiToValue(amount, contract_wrappers_1.FULL_DECIMALS),
                    investedFunds: weiToValue(value, contract_wrappers_1.FULL_DECIMALS),
                    securityTokenSymbol: symbol,
                };
            }
            else if (stoType === types_1.StoType.UsdTiered) {
                const module = yield this.context.contractWrappers.moduleFactory.getModuleInstance({
                    name: contract_wrappers_1.ModuleName.UsdTieredSTO,
                    address,
                });
                const tokenPurchases = yield module.getLogsAsync({
                    eventName: contract_wrappers_1.USDTieredSTOEvents.TokenPurchase,
                    blockRange: {
                        fromBlock: contract_wrappers_1.BlockParamLiteral.Earliest,
                        toBlock: contract_wrappers_1.BlockParamLiteral.Latest,
                    },
                    indexFilterValues: {},
                });
                const thisPurchase = tokenPurchases.find((_, eventIndex) => eventIndex === index);
                if (!thisPurchase) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.FetcherValidationError,
                        message: `Investment ${uid} not found`,
                    });
                }
                const { args: { _beneficiary, _usdAmount, _tokens }, } = thisPurchase;
                return {
                    address: _beneficiary,
                    tokenAmount: weiToValue(_usdAmount, contract_wrappers_1.FULL_DECIMALS),
                    investedFunds: weiToValue(_tokens, contract_wrappers_1.FULL_DECIMALS),
                    securityTokenSymbol: symbol,
                };
            }
            else {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `Invalid STO type ${stoType}`,
                });
            }
        });
    }
}
exports.InvestmentFactory = InvestmentFactory;
//# sourceMappingURL=InvestmentFactory.js.map