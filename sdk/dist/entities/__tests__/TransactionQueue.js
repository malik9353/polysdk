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
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const types_1 = require("../../types");
const testUtils_1 = require("../../testUtils");
const TransactionQueue_1 = require("../TransactionQueue");
describe('TransactionQueue', () => {
    let testContract;
    let testFees;
    beforeEach(() => {
        testContract = new testUtils_1.MockedContract();
        testFees = {
            usd: new contract_wrappers_1.BigNumber(0),
            poly: new contract_wrappers_1.BigNumber(0),
        };
    });
    describe('constructor', () => {
        test('initializes properly', () => {
            const transaction = testUtils_1.getMockTransactionSpec(testContract.fakeTxOne, []);
            const transactionQueue = new TransactionQueue_1.TransactionQueue([transaction], testFees, null, {});
            expect(transactionQueue).toBeInstanceOf(TransactionQueue_1.TransactionQueue);
            expect(transactionQueue.run()).toBeInstanceOf(Promise);
        });
    });
    describe('#onTransactionStatusChange', () => {
        test("calls listener when any transaction's status is updated", () => __awaiter(this, void 0, void 0, function* () {
            const contract = new testUtils_1.MockedContract({ autoResolve: false });
            const tx1 = testUtils_1.getMockTransactionSpec(contract.fakeTxOne, []);
            const tx2 = testUtils_1.getMockTransactionSpec(contract.fakeTxTwo, []);
            const transactionQueue = new TransactionQueue_1.TransactionQueue([tx1, tx2], testFees, null, {});
            const polyTx1 = transactionQueue.transactions[0];
            const polyTx2 = transactionQueue.transactions[1];
            const spyListener = jest.fn();
            transactionQueue.onTransactionStatusChange(spyListener);
            transactionQueue.run();
            contract.fakeTxOnePolyResponse.resolve();
            yield polyTx1.promise;
            const tx1Matcher = expect.objectContaining({ uid: polyTx1.uid });
            const tx2Matcher = expect.objectContaining({ uid: polyTx2.uid });
            const queueMatcher = expect.objectContaining({
                uid: transactionQueue.uid,
            });
            expect(spyListener).toHaveBeenLastCalledWith(tx1Matcher, queueMatcher);
            contract.fakeTxTwoPolyResponse.resolve();
            yield polyTx2.promise;
            expect(spyListener).toHaveBeenLastCalledWith(tx2Matcher, queueMatcher);
        }));
    });
    describe('#toPojo', () => {
        test('returns a plain object representing the entity', () => {
            const txOne = testUtils_1.getMockTransactionSpec(testContract.fakeTxOne, ['stringOne']);
            const transactionQueue = new TransactionQueue_1.TransactionQueue([txOne], testFees, null, {});
            expect(types_1.isPojo(transactionQueue.toPojo())).toBeTruthy();
        });
    });
    describe('#run', () => {
        test('runs the queue sequentially and resolves when done', () => __awaiter(this, void 0, void 0, function* () {
            const txOne = testUtils_1.getMockTransactionSpec(testContract.fakeTxOne, ['stringOne']);
            const txTwo = testUtils_1.getMockTransactionSpec(testContract.fakeTxTwo, ['stringTwo']);
            const transactionQueue = new TransactionQueue_1.TransactionQueue([txOne, txTwo], testFees, null, {});
            const t1Promise = transactionQueue.transactions[0].promise;
            const t2Promise = transactionQueue.transactions[1].promise;
            transactionQueue.transactions[0].promise.then(() => {
                expect(txOne.method).toHaveBeenCalled();
                expect(txTwo.method).not.toHaveBeenCalled();
            });
            transactionQueue.transactions[1].promise.then(() => {
                expect(txTwo.method).toHaveBeenCalled();
            });
            yield transactionQueue.run();
            yield Promise.all([t1Promise, t2Promise]);
        }));
        test("updates the queue's status correctly", () => __awaiter(this, void 0, void 0, function* () {
            const contract = new testUtils_1.MockedContract({ autoResolve: false });
            const txOne = testUtils_1.getMockTransactionSpec(contract.fakeTxOne, ['stringOne']);
            const txTwo = testUtils_1.getMockTransactionSpec(contract.fakeTxTwo, ['stringTwo']);
            const transactionQueue = new TransactionQueue_1.TransactionQueue([txOne, txTwo], testFees, null, {});
            expect(transactionQueue.status).toEqual(types_1.TransactionQueueStatus.Idle);
            const promise = transactionQueue.run();
            expect(transactionQueue.status).toEqual(types_1.TransactionQueueStatus.Running);
            contract.fakeTxOnePolyResponse.resolve();
            yield transactionQueue.transactions[0].promise;
            expect(transactionQueue.status).toEqual(types_1.TransactionQueueStatus.Running);
            contract.fakeTxTwoPolyResponse.resolve();
            yield transactionQueue.transactions[1].promise;
            expect(transactionQueue.status).toEqual(types_1.TransactionQueueStatus.Running);
            yield promise;
            expect(transactionQueue.status).toEqual(types_1.TransactionQueueStatus.Succeeded);
        }));
    });
    test('sets error and status as failed if any transaction fails', () => __awaiter(this, void 0, void 0, function* () {
        const contract = new testUtils_1.MockedContract({ autoResolve: true });
        const failureTx = testUtils_1.getMockTransactionSpec(contract.failureTx, []);
        const transactionQueue = new TransactionQueue_1.TransactionQueue([failureTx], testFees, null, {});
        yield expect(transactionQueue.run()).rejects.toEqual(expect.any(Error));
        expect(transactionQueue.status).toEqual(types_1.TransactionQueueStatus.Failed);
    }));
});
//# sourceMappingURL=TransactionQueue.js.map