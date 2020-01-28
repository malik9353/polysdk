"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_stable_stringify_1 = __importDefault(require("json-stable-stringify"));
const ethereum_address_1 = require("ethereum-address");
exports.delay = (amount) => __awaiter(this, void 0, void 0, function* () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, amount);
    });
});
function serialize(entityType, pojo) {
    return Buffer.from(`${entityType}:${json_stable_stringify_1.default(pojo)}`).toString('base64');
}
exports.serialize = serialize;
function unserialize(id) {
    const unserialized = Buffer.from(id, 'base64').toString('utf8');
    const matched = unserialized.match(/^.*?:(.*)/);
    const errorMsg = 'Wrong ID format.';
    if (!matched) {
        throw new Error(errorMsg);
    }
    const [, jsonString] = matched;
    try {
        return JSON.parse(jsonString);
    }
    catch (err) {
        throw new Error(errorMsg);
    }
}
exports.unserialize = unserialize;
function isValidAddress(address) {
    return ethereum_address_1.isAddress(address);
}
exports.isValidAddress = isValidAddress;
exports.findEvents = ({ logs, eventName, }) => {
    const foundLogs = logs.filter(log => {
        const l = log;
        return l.event === eventName;
    });
    return foundLogs;
};
//# sourceMappingURL=index.js.map