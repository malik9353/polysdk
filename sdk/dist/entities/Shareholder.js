"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
const PolymathError_1 = require("../PolymathError");
const types_1 = require("../types");
function isUniqueIdentifiers(identifiers) {
    const { securityTokenId, address } = identifiers;
    return typeof securityTokenId === 'string' && typeof address === 'string';
}
class Shareholder extends Entity_1.Entity {
    static generateId({ securityTokenId, address }) {
        return utils_1.serialize('shareholder', {
            securityTokenId,
            address,
        });
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong Shareholder ID format.',
            });
        }
        return unserialized;
    }
    constructor(params) {
        super();
        const { securityTokenId, securityTokenSymbol, address, canSendAfter, canReceiveAfter, kycExpiry, isAccredited, canBuyFromSto, balance, } = params;
        this.securityTokenId = securityTokenId;
        this.securityTokenSymbol = securityTokenSymbol;
        this.address = address;
        this.canSendAfter = canSendAfter;
        this.canReceiveAfter = canReceiveAfter;
        this.kycExpiry = kycExpiry;
        this.isAccredited = isAccredited;
        this.canBuyFromSto = canBuyFromSto;
        this.balance = balance;
        this.uid = Shareholder.generateId({
            securityTokenId,
            address,
        });
    }
    /**
     * Checks if this shareholder's KYC has been manually revoked
     */
    isRevoked() {
        const { canReceiveAfter, canSendAfter, kycExpiry } = this;
        const datesAreZero = [canReceiveAfter, canSendAfter, kycExpiry].every(date => date.getTime() === 0);
        //
        return datesAreZero;
    }
    toPojo() {
        const { uid, securityTokenId, securityTokenSymbol, address, canSendAfter, canReceiveAfter, kycExpiry, isAccredited, canBuyFromSto, balance, } = this;
        return {
            uid,
            securityTokenId,
            securityTokenSymbol,
            address,
            canSendAfter,
            canReceiveAfter,
            kycExpiry,
            isAccredited,
            canBuyFromSto,
            balance,
        };
    }
    _refresh(params) {
        const { securityTokenSymbol, canSendAfter, canReceiveAfter, kycExpiry, isAccredited, canBuyFromSto, balance, } = params;
        if (securityTokenSymbol) {
            this.securityTokenSymbol = securityTokenSymbol;
        }
        if (canSendAfter) {
            this.canSendAfter = canSendAfter;
        }
        if (canReceiveAfter) {
            this.canReceiveAfter = canReceiveAfter;
        }
        if (kycExpiry) {
            this.kycExpiry = kycExpiry;
        }
        if (isAccredited !== undefined) {
            this.isAccredited = isAccredited;
        }
        if (canBuyFromSto !== undefined) {
            this.canBuyFromSto = canBuyFromSto;
        }
        if (balance) {
            this.balance = balance;
        }
    }
}
exports.Shareholder = Shareholder;
//# sourceMappingURL=Shareholder.js.map