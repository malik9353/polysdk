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
const CHUNK_SIZE = 100;
class PushDividendPayment extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.PushDividendPayment;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, dividendIndex, shareholderAddresses, dividendType } = this.args;
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
            const dividend = yield contractWrappers.getDividend({
                dividendIndex,
                dividendsModule,
            });
            let { shareholders: shareholderStatuses } = dividend;
            if (shareholderAddresses) {
                shareholderStatuses = shareholderStatuses.filter(status => !!shareholderAddresses.find(address => address === status.address));
            }
            const unpaidShareholders = shareholderStatuses
                .filter(status => status.paymentReceived)
                .map(status => status.address);
            const shareholderAddressChunks = lodash_1.chunk(unpaidShareholders, CHUNK_SIZE);
            yield bluebird_1.default.each(shareholderAddressChunks, (addresses, index) => __awaiter(this, void 0, void 0, function* () {
                yield this.addTransaction(dividendsModule.pushDividendPaymentToAddresses, {
                    tag: types_1.PolyTransactionTag.PushDividendPayment,
                    // Only add resolver to the last transaction
                    resolver: index < shareholderAddressChunks.length - 1
                        ? undefined
                        : () => __awaiter(this, void 0, void 0, function* () {
                            return factories.dividendDistributionFactory.refresh(entities_1.DividendDistribution.generateId({
                                securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                                dividendType,
                                index,
                            }));
                        }),
                })({
                    dividendIndex,
                    payees: addresses,
                });
            }));
        });
    }
}
exports.PushDividendPayment = PushDividendPayment;
//# sourceMappingURL=PushDividendPayment.js.map