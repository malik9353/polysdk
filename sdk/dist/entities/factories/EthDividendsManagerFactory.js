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
const EthDividendsManager_1 = require("../EthDividendsManager");
class EthDividendsManagerFactory extends Factory_1.Factory {
    constructor(context) {
        super(EthDividendsManager_1.EthDividendsManager, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { securityTokenId } = EthDividendsManager_1.EthDividendsManager.unserialize(uid);
            const { symbol } = SecurityToken_1.SecurityToken.unserialize(securityTokenId);
            const [dividendsModule] = yield this.context.contractWrappers.getAttachedModules({ symbol, moduleName: contract_wrappers_1.ModuleName.EtherDividendCheckpoint }, { unarchived: true });
            if (!dividendsModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: "Dividends of the specified type haven't been enabled. Did you forget to call dividends.enable() on your Security Token?",
                });
            }
            const storageWalletAddress = yield dividendsModule.wallet();
            return {
                address: yield dividendsModule.address(),
                storageWalletAddress,
                securityTokenId,
                securityTokenSymbol: symbol,
            };
        });
    }
}
exports.EthDividendsManagerFactory = EthDividendsManagerFactory;
//# sourceMappingURL=EthDividendsManagerFactory.js.map