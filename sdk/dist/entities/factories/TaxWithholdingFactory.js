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
const TaxWithholding_1 = require("../TaxWithholding");
class TaxWithholdingFactory extends Factory_1.Factory {
    constructor(context) {
        super(TaxWithholding_1.TaxWithholding, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { context: { contractWrappers: { tokenFactory, getAttachedModules }, }, } = this;
            const { securityTokenId, dividendType, shareholderAddress } = TaxWithholding_1.TaxWithholding.unserialize(uid);
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(securityTokenId);
            let securityToken;
            try {
                securityToken = yield tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            let dividendsModule;
            if (dividendType === types_1.DividendType.Erc20) {
                [dividendsModule] = yield getAttachedModules({ symbol, moduleName: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint }, { unarchived: true });
            }
            else if (dividendType === types_1.DividendType.Eth) {
                [dividendsModule] = yield getAttachedModules({ symbol, moduleName: contract_wrappers_1.ModuleName.EtherDividendCheckpoint }, { unarchived: true });
            }
            if (!dividendsModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: "Dividends of the specified type haven't been enabled. Did you forget to call dividends.enable() on your Security Token?",
                });
            }
            const checkpointIndex = yield securityToken.currentCheckpointId();
            const checkpointData = yield dividendsModule.getCheckpointData({
                checkpointId: checkpointIndex.toNumber(),
            });
            const thisShareholder = checkpointData.find(({ investor }) => investor === shareholderAddress);
            if (!thisShareholder) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no shareholder with address ${shareholderAddress}`,
                });
            }
            const { withheld } = thisShareholder;
            return {
                shareholderAddress,
                percentage: withheld.toNumber(),
                securityTokenSymbol: symbol,
                securityTokenId,
                dividendType,
            };
        });
    }
}
exports.TaxWithholdingFactory = TaxWithholdingFactory;
//# sourceMappingURL=TaxWithholdingFactory.js.map