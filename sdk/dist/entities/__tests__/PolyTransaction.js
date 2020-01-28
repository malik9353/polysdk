"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PolyTransaction_1 = require("../PolyTransaction");
const types_1 = require("../../types");
const testUtils_1 = require("../../testUtils");
const utils_1 = require("../../utils");
describe('PolyTransaction', () => {
    describe('.constructor', () => {
        test('initialzes properly', () => {
            const transaction = {
                method: jest.fn(),
                args: { a: 'argA' },
            };
            const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {});
            expect(polyTransaction).toBeInstanceOf(PolyTransaction_1.PolyTransaction);
        });
        test('has a default tag', () => {
            const transaction = {
                method: jest.fn(),
                args: { a: 'argA' },
            };
            const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {});
            expect(polyTransaction).toHaveProperty('tag', types_1.PolyTransactionTag.Any);
        });
        test('starts as Idle', () => {
            const transaction = {
                method: jest.fn(),
                args: { a: 'argA' },
            };
            const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {});
            expect(polyTransaction.status).toEqual(types_1.TransactionStatus.Idle);
        });
    });
    test('does not need binding between the method and the contract', () => __awaiter(this, void 0, void 0, function* () {
        const testContract = new testUtils_1.MockedContract();
        const transaction = testUtils_1.getMockTransactionSpec(testContract.fakeTxOne, {
            a: 'argA',
        });
        const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {
            uid: 'txqid0',
        });
        yield polyTransaction.run();
        expect(transaction.method).toHaveBeenCalledWith({ a: 'argA' });
    }));
    describe('#onStatusChange', () => {
        test("calls the listener with the transaction everytime the transaction's status changes", () => __awaiter(this, void 0, void 0, function* () {
            const testContract = new testUtils_1.MockedContract({
                autoResolve: false,
                txHashes: ['0x1'],
            });
            const transaction = testUtils_1.getMockTransactionSpec(testContract.fakeTxOne, {});
            const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {
                uid: 'tqid0',
            });
            const listenerSpy = jest.fn();
            polyTransaction.onStatusChange(listenerSpy);
            expect(listenerSpy).not.toHaveBeenCalled();
            const runPromise = polyTransaction.run();
            expect(listenerSpy).toHaveBeenLastCalledWith(polyTransaction);
            yield utils_1.delay(1);
            expect(listenerSpy).toHaveBeenLastCalledWith(polyTransaction);
            expect(polyTransaction.txHash).toEqual('0x1');
            testContract.fakeTxOnePolyResponse.resolve();
            yield runPromise;
            expect(polyTransaction.status).toEqual(types_1.TransactionStatus.Succeeded);
        }));
        test('correctly handles errors', () => __awaiter(this, void 0, void 0, function* () {
            const testContract = new testUtils_1.MockedContract({ autoResolve: true });
            const transaction = testUtils_1.getMockTransactionSpec(testContract.failureTx, {});
            const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {
                uid: 'tqid0',
            });
            const listenerSpy = jest.fn();
            polyTransaction.onStatusChange(listenerSpy);
            const runPromise = polyTransaction.run();
            yield expect(runPromise).rejects.toBeInstanceOf(Error);
        }));
    });
    describe('#toPojo', () => {
        test('returns a plain object representing the entity', () => {
            const testContract = new testUtils_1.MockedContract();
            const transaction = testUtils_1.getMockTransactionSpec(testContract.fakeTxOne, {});
            const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {
                uid: 'tqid0',
            });
            expect(types_1.isPojo(polyTransaction.toPojo())).toBeTruthy();
        });
    });
    describe('#run', () => {
        test('resolves when transaction is finished', () => __awaiter(this, void 0, void 0, function* () {
            const testContract = new testUtils_1.MockedContract({ autoResolve: true });
            const transaction = testUtils_1.getMockTransactionSpec(testContract.fakeTxOne, {});
            const polyTransaction = new PolyTransaction_1.PolyTransaction(transaction, {
                uid: 'tqid0',
            });
            yield polyTransaction.run();
            expect(polyTransaction.status).toEqual(types_1.TransactionStatus.Succeeded);
        }));
    });
});
//# sourceMappingURL=PolyTransaction.js.map