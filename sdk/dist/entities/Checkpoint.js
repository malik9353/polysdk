"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
function isUniqueIdentifiers(identifiers) {
    const { securityTokenSymbol, index } = identifiers;
    return typeof securityTokenSymbol === 'string' && typeof index === 'number';
}
class Checkpoint extends Entity_1.Entity {
    static generateId({ securityTokenId, index }) {
        return utils_1.serialize('checkpoint', {
            securityTokenId,
            index,
        });
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong Checkpoint ID format.',
            });
        }
        return unserialized;
    }
    constructor(params) {
        super();
        const { dividendDistributions, securityTokenSymbol, securityTokenId, index, shareholderBalances, totalSupply, createdAt, } = params;
        this.dividendDistributions = dividendDistributions;
        this.securityTokenSymbol = securityTokenSymbol;
        this.securityTokenId = securityTokenId;
        this.index = index;
        this.shareholderBalances = shareholderBalances;
        this.totalSupply = totalSupply;
        this.createdAt = createdAt;
        this.uid = Checkpoint.generateId({ securityTokenId, index });
    }
    toPojo() {
        const { uid, dividendDistributions, securityTokenSymbol, securityTokenId, index, shareholderBalances, totalSupply, createdAt, } = this;
        return {
            uid,
            dividendDistributions: dividendDistributions.map(distribution => distribution.toPojo()),
            securityTokenSymbol,
            securityTokenId,
            index,
            shareholderBalances,
            totalSupply,
            createdAt,
        };
    }
    _refresh(params) {
        const { dividendDistributions, securityTokenSymbol, shareholderBalances, totalSupply, createdAt, } = params;
        if (dividendDistributions) {
            this.dividendDistributions = dividendDistributions;
        }
        if (securityTokenSymbol) {
            this.securityTokenSymbol = securityTokenSymbol;
        }
        if (shareholderBalances) {
            this.shareholderBalances = shareholderBalances;
        }
        if (totalSupply) {
            this.totalSupply = totalSupply;
        }
        if (createdAt) {
            this.createdAt = createdAt;
        }
    }
}
exports.Checkpoint = Checkpoint;
//# sourceMappingURL=Checkpoint.js.map