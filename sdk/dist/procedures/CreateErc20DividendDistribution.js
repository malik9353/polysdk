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
const ApproveErc20_1 = require("./ApproveErc20");
const PolymathError_1 = require("../PolymathError");
const utils_1 = require("../utils");
const entities_1 = require("../entities");
class CreateErc20DividendDistribution extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.CreateErc20DividendDistribution;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { args, context } = this;
            const { symbol, maturityDate, expiryDate, erc20Address, amount, checkpointIndex, name, excludedAddresses = [], taxWithholdings = [], } = args;
            const { contractWrappers, factories } = context;
            try {
                yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            const erc20Module = (yield contractWrappers.getAttachedModules({
                moduleName: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint,
                symbol,
            }, { unarchived: true }))[0];
            if (!erc20Module) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: "The ERC20 Dividends Manager hasn't been enabled. Did you forget to call dividends.enable() on the Security Token?",
                });
            }
            yield this.addProcedure(ApproveErc20_1.ApproveErc20)({
                amount,
                spender: yield erc20Module.address(),
                tokenAddress: erc20Address,
            });
            const distribution = yield this.addTransaction(erc20Module.createDividendWithCheckpointAndExclusions, {
                tag: types_1.PolyTransactionTag.CreateErc20DividendDistribution,
                resolver: (receipt) => __awaiter(this, void 0, void 0, function* () {
                    const { logs } = receipt;
                    const [event] = utils_1.findEvents({
                        eventName: contract_wrappers_1.ERC20DividendCheckpointEvents.ERC20DividendDeposited,
                        logs,
                    });
                    if (event) {
                        const { args: eventArgs } = event;
                        const { _dividendIndex } = eventArgs;
                        return factories.dividendDistributionFactory.fetch(entities_1.DividendDistribution.generateId({
                            securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                            dividendType: types_1.DividendType.Erc20,
                            index: _dividendIndex.toNumber(),
                        }));
                    }
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.UnexpectedEventLogs,
                        message: "The ERC20 Dividend Distribution was successfully created but the corresponding event wasn't fired. Please report this issue to the Polymath team.",
                    });
                }),
            })({
                maturity: maturityDate,
                expiry: expiryDate,
                token: erc20Address,
                amount,
                checkpointId: checkpointIndex,
                name,
                excluded: excludedAddresses,
            });
            if (taxWithholdings.length > 0) {
                const investors = [];
                const percentages = [];
                taxWithholdings.forEach(({ address, percentage }) => {
                    investors.push(address);
                    percentages.push(new contract_wrappers_1.BigNumber(percentage));
                });
                yield this.addTransaction(erc20Module.setWithholding, {
                    tag: types_1.PolyTransactionTag.SetErc20TaxWithholding,
                })({ investors, withholding: percentages });
            }
            return distribution;
        });
    }
}
exports.CreateErc20DividendDistribution = CreateErc20DividendDistribution;
//# sourceMappingURL=CreateErc20DividendDistribution.js.map