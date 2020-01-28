"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./types"));
__export(require("./entities"));
var Polymath_1 = require("./Polymath");
exports.Polymath = Polymath_1.Polymath;
var PolymathError_1 = require("./PolymathError");
exports.PolymathError = PolymathError_1.PolymathError;
var contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
exports.BigNumber = contract_wrappers_1.BigNumber;
const isNode = typeof window === 'undefined';
const browserUtils = isNode ? null : require('./browserUtils');
exports.browserUtils = browserUtils;
//# sourceMappingURL=index.js.map