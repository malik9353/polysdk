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
const PolymathError_1 = require("../PolymathError");
const TransferErc20_1 = require("./TransferErc20");
const entities_1 = require("../entities");
const utils_1 = require("../utils");
class LaunchCappedSto extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.LaunchCappedSto;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { args, context } = this;
            const { symbol, startDate, endDate, tokensOnSale, rate, currency, storageWallet } = args;
            const { contractWrappers, factories: { cappedStoFactory }, } = context;
            let securityToken;
            try {
                securityToken = yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            const securityTokenAddress = yield securityToken.address();
            const moduleName = contract_wrappers_1.ModuleName.CappedSTO;
            const factoryAddress = yield contractWrappers.getModuleFactoryAddress({
                tokenAddress: securityTokenAddress,
                moduleName,
            });
            const moduleFactory = yield contractWrappers.moduleFactory.getModuleFactory(factoryAddress);
            let usdCost = null;
            const [polyCost, isCostInPoly, cost] = yield Promise.all([
                moduleFactory.setupCostInPoly(),
                moduleFactory.isCostInPoly(),
                moduleFactory.setupCost(),
            ]);
            if (!isCostInPoly) {
                usdCost = cost;
            }
            yield this.addProcedure(TransferErc20_1.TransferErc20)({
                receiver: securityTokenAddress,
                amount: polyCost,
            });
            const newSto = yield this.addTransaction(securityToken.addModuleWithLabel, {
                tag: types_1.PolyTransactionTag.EnableCappedSto,
                fees: {
                    usd: usdCost,
                    poly: polyCost,
                },
                resolver: (receipt) => __awaiter(this, void 0, void 0, function* () {
                    const { logs } = receipt;
                    const [event] = utils_1.findEvents({
                        eventName: contract_wrappers_1.SecurityTokenEvents.ModuleAdded,
                        logs,
                    });
                    if (event) {
                        const { args: eventArgs } = event;
                        const { _module } = eventArgs;
                        return cappedStoFactory.fetch(entities_1.CappedSto.generateId({
                            securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                            stoType: types_1.StoType.Capped,
                            address: _module,
                        }));
                    }
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.UnexpectedEventLogs,
                        message: "The Capped STO was successfully launched but the corresponding event wasn't fired. Please report this issue to the Polymath team.",
                    });
                }),
            })({
                moduleName,
                address: factoryAddress,
                data: {
                    startTime: startDate,
                    endTime: endDate,
                    cap: tokensOnSale,
                    rate,
                    fundRaiseType: currency,
                    fundsReceiver: storageWallet,
                },
                archived: false,
            });
            return newSto;
        });
    }
}
exports.LaunchCappedSto = LaunchCappedSto;
//# sourceMappingURL=LaunchCappedSto.js.map