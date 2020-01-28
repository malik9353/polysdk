"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const bluebird_1 = __importDefault(require("bluebird"));
const Procedure_1 = require("./Procedure");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const entities_1 = require("../entities");
const CHUNK_SIZE = 200;
class UpdateDividendsTaxWithholdingList extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.UpdateDividendsTaxWithholdingList;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, dividendType, shareholderAddresses: investors, percentages } = this.args;
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
            let dividendsModule;
            switch (dividendType) {
                case types_1.DividendType.Erc20: {
                    [dividendsModule] = yield contractWrappers.getAttachedModules({ moduleName: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint, symbol }, { unarchived: true });
                    break;
                }
                case types_1.DividendType.Eth: {
                    [dividendsModule] = yield contractWrappers.getAttachedModules({ moduleName: contract_wrappers_1.ModuleName.EtherDividendCheckpoint, symbol }, { unarchived: true });
                    break;
                }
            }
            if (!dividendsModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: "Dividends of the specified type haven't been enabled. Did you forget to call dividends.enable() on your Security Token?",
                });
            }
            const shareholderAddressChunks = lodash_1.chunk(investors, CHUNK_SIZE);
            const percentageChunks = lodash_1.chunk(percentages, CHUNK_SIZE);
            yield bluebird_1.default.each(shareholderAddressChunks, (addresses, chunkIndex) => __awaiter(this, void 0, void 0, function* () {
                const percentageChunk = percentageChunks[chunkIndex];
                yield this.addTransaction(dividendsModule.setWithholding, {
                    tag: types_1.PolyTransactionTag.SetErc20TaxWithholding,
                    // Update all affected tax withholding entities.
                    // We do this without fetching the data from the contracts
                    // because it would take too many requests and it's only one value that changes
                    resolver: () => __awaiter(this, void 0, void 0, function* () {
                        addresses.forEach((address, addressIndex) => {
                            factories.taxWithholdingFactory.update(entities_1.TaxWithholding.generateId({
                                securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                                dividendType,
                                shareholderAddress: address,
                            }), { percentage: percentageChunk[addressIndex] });
                        });
                    }),
                })({
                    investors: addresses,
                    withholding: percentageChunk.map(percentage => new contract_wrappers_1.BigNumber(percentage)),
                });
            }));
        });
    }
}
exports.UpdateDividendsTaxWithholdingList = UpdateDividendsTaxWithholdingList;
//# sourceMappingURL=UpdateDividendsTaxWithholdingList.js.map