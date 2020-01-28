"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const Factory_1 = require("./Factory");
const types_1 = require("../../types");
const CappedSto_1 = require("../CappedSto");
const SecurityToken_1 = require("../SecurityToken");
const Investment_1 = require("../Investment");
const { weiToValue } = contract_wrappers_1.conversionUtils;
class CappedStoFactory extends Factory_1.Factory {
    constructor(context) {
        super(CappedSto_1.CappedSto, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { securityTokenId, stoType, address } = CappedSto_1.CappedSto.unserialize(uid);
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(securityTokenId);
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
            const investments = tokenPurchases.map(({ args: { beneficiary, amount, value } }, index) => ({
                address: beneficiary,
                tokenAmount: weiToValue(amount, contract_wrappers_1.FULL_DECIMALS),
                investedFunds: weiToValue(value, contract_wrappers_1.FULL_DECIMALS),
                index,
            }));
            const [paused, capReached, _a] = yield Promise.all([module.paused(), module.capReached(), module.getSTODetails()]), { fundsRaised, investorCount, totalTokensSold, isRaisedInPoly } = _a, details = __rest(_a, ["fundsRaised", "investorCount", "totalTokensSold", "isRaisedInPoly"]);
            const stoId = CappedSto_1.CappedSto.generateId({
                securityTokenId,
                stoType,
                address,
            });
            const investmentEntities = investments.map((_a) => {
                var { index } = _a, investment = __rest(_a, ["index"]);
                return this.context.factories.investmentFactory.create(Investment_1.Investment.generateId({ securityTokenId, stoId, index }), Object.assign({ securityTokenSymbol: symbol }, investment));
            });
            return Object.assign({ fundraiseTypes: isRaisedInPoly ? [types_1.Currency.POLY] : [types_1.Currency.ETH], raisedAmount: fundsRaised, soldTokensAmount: totalTokensSold, investorAmount: investorCount }, details, { securityTokenId, securityTokenSymbol: symbol, investments: investmentEntities, stoType,
                address,
                paused,
                capReached });
        });
    }
}
exports.CappedStoFactory = CappedStoFactory;
//# sourceMappingURL=CappedStoFactory.js.map