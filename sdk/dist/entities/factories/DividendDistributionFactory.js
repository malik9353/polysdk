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
const DividendDistribution_1 = require("../DividendDistribution");
const types_1 = require("../../types");
const SecurityToken_1 = require("../SecurityToken");
const PolymathError_1 = require("../../PolymathError");
const Checkpoint_1 = require("../Checkpoint");
class DividendDistributionFactory extends Factory_1.Factory {
    constructor(context) {
        super(DividendDistribution_1.DividendDistribution, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { index, dividendType, securityTokenId } = DividendDistribution_1.DividendDistribution.unserialize(uid);
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(securityTokenId);
            const { contractWrappers } = this.context;
            let dividendsModule;
            if (dividendType === types_1.DividendType.Erc20) {
                [dividendsModule] = yield contractWrappers.getAttachedModules({
                    moduleName: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint,
                    symbol,
                }, { unarchived: true });
            }
            else if (dividendType === types_1.DividendType.Eth) {
                [dividendsModule] = yield contractWrappers.getAttachedModules({
                    moduleName: contract_wrappers_1.ModuleName.EtherDividendCheckpoint,
                    symbol,
                }, { unarchived: true });
            }
            if (!dividendsModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: "Dividends of the specified type haven't been enabled. Did you forget to call dividends.enable() on your Security Token?",
                });
            }
            const _a = yield contractWrappers.getDividend({
                dividendIndex: index,
                dividendsModule,
            }), { checkpointId: checkpointIndex } = _a, dividend = __rest(_a, ["checkpointId"]);
            const checkpointId = Checkpoint_1.Checkpoint.generateId({ securityTokenId, index: checkpointIndex });
            return Object.assign({}, dividend, { checkpointId,
                securityTokenId, securityTokenSymbol: symbol });
        });
    }
}
exports.DividendDistributionFactory = DividendDistributionFactory;
//# sourceMappingURL=DividendDistributionFactory.js.map