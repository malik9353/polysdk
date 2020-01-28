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
const Factory_1 = require("./Factory");
const Checkpoint_1 = require("../Checkpoint");
const SecurityToken_1 = require("../SecurityToken");
const PolymathError_1 = require("../../PolymathError");
const types_1 = require("../../types");
const DividendDistribution_1 = require("../DividendDistribution");
class CheckpointFactory extends Factory_1.Factory {
    constructor(context) {
        super(Checkpoint_1.Checkpoint, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { securityTokenId, index } = Checkpoint_1.Checkpoint.unserialize(uid);
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(securityTokenId);
            const { context: { contractWrappers, factories }, } = this;
            let securityToken;
            try {
                securityToken = yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            const checkpointDividends = yield contractWrappers.getAllDividends({
                securityTokenSymbol: symbol,
                checkpointId: index,
            });
            const checkpoint = yield contractWrappers.getCheckpoint({
                checkpointId: index,
                securityToken,
            });
            const checkpointId = Checkpoint_1.Checkpoint.generateId({
                securityTokenId,
                index: checkpoint.index,
            });
            const dividendDistributions = checkpointDividends.map((_a) => {
                var { dividendType } = _a, distribution = __rest(_a, ["dividendType"]);
                return factories.dividendDistributionFactory.create(DividendDistribution_1.DividendDistribution.generateId({ securityTokenId, dividendType, index }), Object.assign({}, distribution, { checkpointId, securityTokenSymbol: symbol }));
            });
            return Object.assign({ dividendDistributions, securityTokenSymbol: symbol }, checkpoint);
        });
    }
}
exports.CheckpointFactory = CheckpointFactory;
//# sourceMappingURL=CheckpointFactory.js.map