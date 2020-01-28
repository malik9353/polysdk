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
const ApproveErc20_1 = require("./ApproveErc20");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const entities_1 = require("../entities");
const utils_1 = require("../utils");
const { bigNumberToDate } = contract_wrappers_1.conversionUtils;
class ReserveSecurityToken extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.ReserveSecurityToken;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { args, context, addProcedure, addTransaction } = this;
            const { symbol, owner } = args;
            const { contractWrappers: { securityTokenRegistry }, currentWallet, factories: { securityTokenReservationFactory }, } = context;
            let ownerAddress;
            if (owner) {
                ownerAddress = owner;
            }
            else {
                ownerAddress = yield currentWallet.address();
            }
            const isAvailable = yield securityTokenRegistry.tickerAvailable({
                ticker: symbol,
            });
            if (!isAvailable) {
                throw new PolymathError_1.PolymathError({
                    message: `Ticker ${symbol} has already been registered`,
                    code: types_1.ErrorCode.ProcedureValidationError,
                });
            }
            const [usdFee, polyFee] = yield securityTokenRegistry.getFees({
                feeType: contract_wrappers_1.FeeType.TickerRegFee,
            });
            yield addProcedure(ApproveErc20_1.ApproveErc20)({
                amount: polyFee,
                spender: yield securityTokenRegistry.address(),
            });
            const reservation = yield addTransaction(securityTokenRegistry.registerNewTicker, {
                tag: types_1.PolyTransactionTag.ReserveSecurityToken,
                fees: {
                    poly: polyFee,
                    usd: usdFee,
                },
                resolver: (receipt) => __awaiter(this, void 0, void 0, function* () {
                    const { logs } = receipt;
                    const [event] = utils_1.findEvents({
                        logs,
                        eventName: contract_wrappers_1.SecurityTokenRegistryEvents.RegisterTicker,
                    });
                    if (event) {
                        const { args: eventArgs } = event;
                        const { _ticker, _expiryDate, _owner, _registrationDate } = eventArgs;
                        return securityTokenReservationFactory.create(entities_1.SecurityTokenReservation.generateId({ symbol: _ticker }), {
                            expiry: bigNumberToDate(_expiryDate),
                            reservedAt: bigNumberToDate(_registrationDate),
                            ownerAddress: _owner,
                        });
                    }
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.UnexpectedEventLogs,
                        message: "The Security Token was successfully reserved but the corresponding event wasn't fired. Please report this issue to the Polymath team.",
                    });
                }),
            })({ owner: ownerAddress, ticker: symbol });
            return reservation;
        });
    }
}
exports.ReserveSecurityToken = ReserveSecurityToken;
//# sourceMappingURL=ReserveSecurityToken.js.map