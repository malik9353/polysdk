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
const abi_wrappers_1 = require("@polymathnetwork/abi-wrappers");
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const Procedure_1 = require("./Procedure");
const ApproveErc20_1 = require("./ApproveErc20");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const entities_1 = require("../entities");
const utils_1 = require("../utils");
class CreateSecurityToken extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.CreateSecurityToken;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { args, context } = this;
            const { name, symbol, detailsUrl = '', divisible, treasuryWallet } = args;
            const { contractWrappers: { securityTokenRegistry }, currentWallet, factories, } = context;
            let wallet;
            if (treasuryWallet) {
                wallet = treasuryWallet;
            }
            else {
                wallet = yield currentWallet.address();
            }
            const [isAvailable, isRegisteredByCurrentIssuer, isLaunched] = yield Promise.all([
                securityTokenRegistry.tickerAvailable({ ticker: symbol }),
                securityTokenRegistry.isTickerRegisteredByCurrentIssuer({
                    ticker: symbol,
                }),
                securityTokenRegistry.isTokenLaunched({ ticker: symbol }),
            ]);
            if (isAvailable) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `The security token symbol ${symbol} hasn't been reserved. You need to call "reserveSecurityToken" first.`,
                });
            }
            if (!isRegisteredByCurrentIssuer) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `The security token symbol ${symbol} has already been reserved by another issuer."`,
                });
            }
            if (isLaunched) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `The security token symbol ${symbol} has already been launched."`,
                });
            }
            const [usdFee, polyFee] = yield securityTokenRegistry.getFees({ feeType: contract_wrappers_1.FeeType.StLaunchFee });
            yield this.addProcedure(ApproveErc20_1.ApproveErc20)({
                amount: polyFee,
                spender: yield securityTokenRegistry.address(),
            });
            const newToken = yield this.addTransaction(securityTokenRegistry.generateNewSecurityToken, {
                tag: types_1.PolyTransactionTag.CreateSecurityToken,
                fees: {
                    usd: usdFee,
                    poly: polyFee,
                },
                resolver: (receipt) => __awaiter(this, void 0, void 0, function* () {
                    const { logs } = receipt;
                    const [event] = utils_1.findEvents({
                        eventName: abi_wrappers_1.SecurityTokenRegistryEvents.NewSecurityToken,
                        logs,
                    });
                    if (event) {
                        const { args: eventArgs } = event;
                        const { _ticker, _name, _owner, _securityTokenAddress } = eventArgs;
                        return factories.securityTokenFactory.create(entities_1.SecurityToken.generateId({ symbol: _ticker }), {
                            name: _name,
                            owner: _owner,
                            address: _securityTokenAddress,
                        });
                    }
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.UnexpectedEventLogs,
                        message: "The Security Token was successfully created but the corresponding event wasn't fired. Please report this issue to the Polymath team.",
                    });
                }),
            })({
                name,
                ticker: symbol,
                tokenDetails: detailsUrl,
                divisible,
                protocolVersion: '0',
                treasuryWallet: wallet,
            });
            return newToken;
        });
    }
}
exports.CreateSecurityToken = CreateSecurityToken;
//# sourceMappingURL=CreateSecurityToken.js.map