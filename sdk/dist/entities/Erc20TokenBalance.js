"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
const PolymathError_1 = require("../PolymathError");
const types_1 = require("../types");
function isUniqueIdentifiers(identifiers) {
    const { tokenAddress, walletAddress } = identifiers;
    return typeof tokenAddress === 'string' && typeof walletAddress === 'string';
}
class Erc20TokenBalance extends Entity_1.Entity {
    static generateId({ tokenAddress, walletAddress }) {
        return utils_1.serialize('erc20TokenBalance', {
            tokenAddress,
            walletAddress,
        });
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong ERC20 Token Balance ID format.',
            });
        }
        return unserialized;
    }
    constructor(params) {
        super();
        const { tokenSymbol, tokenAddress, balance, walletAddress } = params;
        this.tokenSymbol = tokenSymbol;
        this.tokenAddress = tokenAddress;
        this.balance = balance;
        this.walletAddress = walletAddress;
        this.uid = Erc20TokenBalance.generateId({
            tokenAddress,
            walletAddress,
        });
    }
    toPojo() {
        const { uid, tokenSymbol, tokenAddress, balance, walletAddress } = this;
        return {
            uid,
            tokenSymbol,
            tokenAddress,
            balance,
            walletAddress,
        };
    }
    _refresh(params) {
        const { tokenSymbol, balance } = params;
        if (tokenSymbol !== undefined) {
            this.tokenSymbol = tokenSymbol;
        }
        if (balance) {
            this.balance = balance;
        }
    }
}
exports.Erc20TokenBalance = Erc20TokenBalance;
//# sourceMappingURL=Erc20TokenBalance.js.map