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
const SecurityToken_1 = require("../SecurityToken");
const PolymathError_1 = require("../../PolymathError");
const types_1 = require("../../types");
const Shareholder_1 = require("../Shareholder");
class ShareholderFactory extends Factory_1.Factory {
    constructor(context) {
        super(Shareholder_1.Shareholder, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { context: { contractWrappers }, } = this;
            const { securityTokenId, address } = Shareholder_1.Shareholder.unserialize(uid);
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(securityTokenId);
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
            const generalTransferManager = (yield contractWrappers.getAttachedModules({ moduleName: contract_wrappers_1.ModuleName.GeneralTransferManager, symbol }, { unarchived: true }))[0];
            const [[{ canReceiveAfter, canSendAfter, expiryTime }], { isAccredited, canNotBuyFromSTO }, balance,] = yield Promise.all([
                generalTransferManager.getKYCData({ investors: [address] }),
                generalTransferManager.getInvestorFlags({ investor: address }),
                securityToken.balanceOf({ owner: address }),
            ]);
            return {
                balance,
                canSendAfter,
                canReceiveAfter,
                kycExpiry: expiryTime,
                isAccredited,
                canBuyFromSto: !canNotBuyFromSTO,
                securityTokenId,
                securityTokenSymbol: symbol,
            };
        });
    }
}
exports.ShareholderFactory = ShareholderFactory;
//# sourceMappingURL=ShareholderFactory.js.map