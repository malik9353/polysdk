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
class CappedSto extends Sto_1.Sto {
    static generateId({ securityTokenId, stoType, address }) {
        return utils_1.serialize('cappedSto', {
            securityTokenId,
            stoType,
            address,
        });
    }
    constructor(params, context) {
        const { cap, rate } = params, rest = __rest(params, ["cap", "rate"]);
        super(rest, context);
        const { securityTokenId, address, stoType } = rest;
        this.cap = cap;
        this.rate = rate;
        this.uid = CappedSto.generateId({ address, stoType, securityTokenId });
    }
    toPojo() {
        const stoPojo = super.toPojo();
        const { cap, rate } = this;
        return Object.assign({}, stoPojo, { cap,
            rate });
    }
    _refresh(params) {
        const { cap, rate } = params, rest = __rest(params, ["cap", "rate"]);
        if (cap) {
            this.cap = cap;
        }
        if (rate) {
            this.rate = rate;
        }
        super._refresh(rest);
    }
}
exports.CappedSto = CappedSto;
//# sourceMappingURL=CappedSto.js.map