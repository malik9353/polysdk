"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
function isUniqueIdentifiers(identifiers) {
    const { securityTokenId, dividendType } = identifiers;
    return typeof securityTokenId === 'string' && types_1.isDividendType(dividendType);
}
class DividendsManager extends Entity_1.Entity {
    constructor(params) {
        super();
        const { address, securityTokenSymbol, securityTokenId, storageWalletAddress, dividendType, } = params;
        this.address = address;
        this.securityTokenSymbol = securityTokenSymbol;
        this.securityTokenId = securityTokenId;
        this.storageWalletAddress = storageWalletAddress;
        this.dividendType = dividendType;
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong Dividends Manager ID format.',
            });
        }
        return unserialized;
    }
    toPojo() {
        const { uid, address, securityTokenSymbol, securityTokenId, storageWalletAddress, dividendType, } = this;
        return {
            uid,
            address,
            securityTokenSymbol,
            securityTokenId,
            storageWalletAddress,
            dividendType,
        };
    }
    _refresh(params) {
        const { address, securityTokenSymbol, storageWalletAddress } = params;
        if (address) {
            this.address = address;
        }
        if (securityTokenSymbol) {
            this.securityTokenSymbol = securityTokenSymbol;
        }
        if (storageWalletAddress) {
            this.storageWalletAddress = storageWalletAddress;
        }
    }
}
exports.DividendsManager = DividendsManager;
//# sourceMappingURL=DividendsManager.js.map