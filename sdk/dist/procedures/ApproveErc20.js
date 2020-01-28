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
/**
 * Procedure to approve spending funds on an ERC20 token. If no token address is specified, it defaults to POLY
 */
class ApproveErc20 extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.ApproveErc20;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { amount, spender, tokenAddress } = this.args;
            const { contractWrappers, currentWallet } = this.context;
            const ownerAddress = yield currentWallet.address();
            const { polyToken } = contractWrappers;
            let token;
            if (tokenAddress) {
                try {
                    token = yield contractWrappers.getERC20TokenWrapper({ address: tokenAddress });
                }
                catch (err) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: 'The supplied address does not correspond to an ERC20 token',
                    });
                }
            }
            else {
                token = polyToken;
            }
            const balance = yield token.balanceOf({ owner: ownerAddress });
            const address = yield token.address();
            const polyTokenAddress = yield polyToken.address();
            const isTestnet = yield contractWrappers.isTestnet();
            if (balance.lt(amount)) {
                if (isTestnet && address.toUpperCase() === polyTokenAddress.toUpperCase()) {
                    yield this.addTransaction(contractWrappers.getPolyTokens, {
                        tag: types_1.PolyTransactionTag.GetTokens,
                    })({
                        amount: amount.minus(balance).decimalPlaces(0, contract_wrappers_1.BigNumber.ROUND_HALF_UP),
                        address: ownerAddress,
                    });
                }
                else {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: 'Not enough funds',
                    });
                }
            }
            const allowance = yield token.allowance({
                spender,
                owner: ownerAddress,
            });
            const hasEnoughAllowance = allowance.gte(amount);
            if (hasEnoughAllowance) {
                return;
            }
            yield this.addTransaction(token.approve, {
                tag: types_1.PolyTransactionTag.ApproveErc20,
            })({ spender, value: amount });
        });
    }
}
exports.ApproveErc20 = ApproveErc20;
//# sourceMappingURL=ApproveErc20.js.map