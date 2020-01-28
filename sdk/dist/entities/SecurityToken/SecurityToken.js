"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../Entity");
const utils_1 = require("../../utils");
const Shareholders_1 = require("./Shareholders");
const Dividends_1 = require("./Dividends");
const Offerings_1 = require("./Offerings");
const Permissions_1 = require("./Permissions");
const Transfers_1 = require("./Transfers");
const PolymathError_1 = require("../../PolymathError");
const types_1 = require("../../types");
function isUniqueIdentifiers(identifiers) {
    const { symbol } = identifiers;
    return typeof symbol === 'string';
}
exports.unserialize = (serialized) => {
    const unserialized = utils_1.unserialize(serialized);
    if (!isUniqueIdentifiers(unserialized)) {
        throw new PolymathError_1.PolymathError({
            code: types_1.ErrorCode.InvalidUuid,
            message: 'Wrong Security Token ID format.',
        });
    }
    return unserialized;
};
class SecurityToken extends Entity_1.Entity {
    constructor(params, context) {
        super();
        const { symbol, name, address, owner } = params;
        this.symbol = symbol;
        this.name = name;
        this.owner = owner;
        this.address = address;
        this.uid = SecurityToken.generateId({ symbol });
        this.shareholders = new Shareholders_1.Shareholders(this, context);
        this.dividends = new Dividends_1.Dividends(this, context);
        this.offerings = new Offerings_1.Offerings(this, context);
        this.permissions = new Permissions_1.Permissions(this, context);
        this.transfers = new Transfers_1.Transfers(this, context);
    }
    static generateId({ symbol }) {
        return utils_1.serialize('securityToken', {
            symbol,
        });
    }
    toPojo() {
        const { uid, symbol, name, address } = this;
        return { uid, symbol, name, address };
    }
    _refresh(params) {
        const { name, address, owner } = params;
        if (name) {
            this.name = name;
        }
        if (address) {
            this.address = address;
        }
        if (owner) {
            this.owner = owner;
        }
    }
}
SecurityToken.unserialize = exports.unserialize;
exports.SecurityToken = SecurityToken;
//# sourceMappingURL=SecurityToken.js.map