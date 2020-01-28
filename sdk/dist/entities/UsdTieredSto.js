"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const Sto_1 = require("./Sto");
class UsdTieredSto extends Sto_1.Sto {
    static generateId({ securityTokenId, stoType, address }) {
        return utils_1.serialize('usdTieredSto', {
            securityTokenId,
            stoType,
            address,
        });
    }
    constructor(params, context) {
        const { currentTier, tiers } = params, rest = __rest(params, ["currentTier", "tiers"]);
        super(rest, context);
        const { securityTokenId, address, stoType } = rest;
        this.currentTier = currentTier;
        this.tiers = tiers;
        this.uid = UsdTieredSto.generateId({ address, stoType, securityTokenId });
    }
    toPojo() {
        const stoPojo = super.toPojo();
        const { currentTier, tiers } = this;
        return Object.assign({}, stoPojo, { currentTier,
            tiers });
    }
    _refresh(params) {
        const { currentTier, tiers } = params, rest = __rest(params, ["currentTier", "tiers"]);
        if (currentTier) {
            this.currentTier = currentTier;
        }
        if (tiers) {
            this.tiers = tiers;
        }
        super._refresh(rest);
    }
}
exports.UsdTieredSto = UsdTieredSto;
//# sourceMappingURL=UsdTieredSto.js.map