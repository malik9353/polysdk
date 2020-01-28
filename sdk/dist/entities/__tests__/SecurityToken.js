"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecurityToken_1 = require("../SecurityToken");
const params1 = {
    symbol: 'TEST1',
    name: 'Test Token 1',
    address: '0x1',
    owner: '0x3',
};
const params2 = {
    symbol: 'TEST2',
    name: 'Test Token 2',
    address: '0x2',
    owner: '0x4',
};
const context = {};
describe('SecurityToken', () => {
    let st1 = {};
    let st2 = {};
    let st1Copy = {};
    beforeEach(() => {
        st1 = new SecurityToken_1.SecurityToken(params1, context);
        st2 = new SecurityToken_1.SecurityToken(params2, context);
        st1Copy = new SecurityToken_1.SecurityToken(params1, context);
    });
    describe('constructor', () => {
        test('instantiates correctly', () => {
            expect(st1).toBeDefined();
            expect(st1.name).toBeDefined();
            expect(st1.symbol).toBeDefined();
        });
        test('generates the same uid for two instances with the same address', () => {
            expect(st1.uid).toBe(st1Copy.uid);
        });
        test('generates different uids for two instances with differen addresses', () => {
            expect(st1.uid).not.toBe(st2.uid);
        });
    });
    describe('methods', () => {
        describe('createCheckpoint', () => { });
    });
});
//# sourceMappingURL=SecurityToken.js.map