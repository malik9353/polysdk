"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
const PolymathError_1 = require("../PolymathError");
const types_1 = require("../types");
function isUniqueIdentifiers(identifiers) {
    const { securityTokenId, stoId, index } = identifiers;
    return (typeof securityTokenId === 'string' && typeof stoId === 'string' && typeof index === 'number');
}
class Investment extends Entity_1.Entity {
    static generateId({ securityTokenId, stoId, index }) {
        return utils_1.serialize('investment', {
            securityTokenId,
            stoId,
            index,
        });
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong Investment ID format.',
            });
        }
        return unserialized;
    }
    constructor(params) {
        super();
        const { securityTokenId, securityTokenSymbol, stoId, address, index, tokenAmount, investedFunds, } = params;
        this.securityTokenId = securityTokenId;
        this.securityTokenSymbol = securityTokenSymbol;
        this.stoId = stoId;
        this.address = address;
        this.index = index;
        this.tokenAmount = tokenAmount;
        this.investedFunds = investedFunds;
        this.uid = Investment.generateId({
            securityTokenId,
            stoId,
            index,
        });
    }
    toPojo() {
        const { uid, securityTokenId, securityTokenSymbol, stoId, address, index, tokenAmount, investedFunds, } = this;
        return {
            uid,
            securityTokenId,
            securityTokenSymbol,
            stoId,
            address,
            index,
            tokenAmount,
            investedFunds,
        };
    }
    _refresh(params) {
        const { securityTokenSymbol, address, investedFunds, tokenAmount } = params;
        if (securityTokenSymbol) {
            this.securityTokenSymbol = securityTokenSymbol;
        }
        if (address) {
            this.address = address;
        }
        if (investedFunds) {
            this.investedFunds = investedFunds;
        }
        if (tokenAmount) {
            this.tokenAmount = tokenAmount;
        }
    }
}
exports.Investment = Investment;
//# sourceMappingURL=Investment.js.map