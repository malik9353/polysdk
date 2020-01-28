"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
function isUniqueIdentifiers(identifiers) {
    const { securityTokenId, dividendType, shareholderAddress, checkpointIndex } = identifiers;
    return (typeof securityTokenId === 'string' &&
        types_1.isDividendType(dividendType) &&
        typeof shareholderAddress === 'string' &&
        typeof checkpointIndex === 'number');
}
class TaxWithholding extends Entity_1.Entity {
    static generateId({ securityTokenId, dividendType, shareholderAddress, }) {
        return utils_1.serialize('taxWithholding', {
            securityTokenId,
            dividendType,
            shareholderAddress,
        });
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong Tax Withholding ID format.',
            });
        }
        return unserialized;
    }
    constructor(params) {
        super();
        const { securityTokenId, securityTokenSymbol, dividendType, shareholderAddress, percentage, } = params;
        this.securityTokenId = securityTokenId;
        this.securityTokenSymbol = securityTokenSymbol;
        this.dividendType = dividendType;
        this.shareholderAddress = shareholderAddress;
        this.percentage = percentage;
        this.uid = TaxWithholding.generateId({
            securityTokenId,
            shareholderAddress,
            dividendType,
        });
    }
    toPojo() {
        const { uid, securityTokenId, securityTokenSymbol, dividendType, shareholderAddress, percentage, } = this;
        return {
            uid,
            securityTokenId,
            securityTokenSymbol,
            dividendType,
            shareholderAddress,
            percentage,
        };
    }
    _refresh(params) {
        const { securityTokenSymbol, percentage } = params;
        if (securityTokenSymbol) {
            this.securityTokenSymbol = securityTokenSymbol;
        }
        if (percentage) {
            this.percentage = percentage;
        }
    }
}
exports.TaxWithholding = TaxWithholding;
//# sourceMappingURL=TaxWithholding.js.map