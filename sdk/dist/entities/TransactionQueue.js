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
const events_1 = require("events");
const v4_1 = __importDefault(require("uuid/v4"));
const types_1 = require("../types");
const Entity_1 = require("./Entity");
const PolyTransaction_1 = require("./PolyTransaction");
const PostTransactionResolver_1 = require("../PostTransactionResolver");
const utils_1 = require("../utils");
var Events;
(function (Events) {
    Events["StatusChange"] = "StatusChange";
    Events["TransactionStatusChange"] = "TransactionStatusChange";
})(Events || (Events = {}));
class TransactionQueue extends Entity_1.Entity {
    constructor(transactions, fees, returnValue, args, procedureType = types_1.ProcedureType.UnnamedProcedure) {
        super();
        this.entityType = 'transactionQueue';
        this.status = types_1.TransactionQueueStatus.Idle;
        this.queue = [];
        this.run = () => __awaiter(this, void 0, void 0, function* () {
            this.queue = [...this.transactions];
            this.updateStatus(types_1.TransactionQueueStatus.Running);
            try {
                yield this.executeTransactionQueue();
                this.updateStatus(types_1.TransactionQueueStatus.Succeeded);
                const { returnValue } = this;
                let res;
                if (PostTransactionResolver_1.isPostTransactionResolver(returnValue)) {
                    res = returnValue.result;
                }
                else {
                    res = returnValue;
                }
                this.resolve(res);
            }
            catch (err) {
                this.error = err;
                this.updateStatus(types_1.TransactionQueueStatus.Failed);
                this.reject(err);
            }
            return this.promise;
        });
        this.resolve = () => { };
        this.reject = () => { };
        this.updateStatus = (status) => {
            this.status = status;
            switch (status) {
                case types_1.TransactionQueueStatus.Running: {
                    this.emitter.emit(Events.StatusChange, this);
                    return;
                }
                case types_1.TransactionQueueStatus.Succeeded: {
                    this.emitter.emit(Events.StatusChange, this);
                    return;
                }
                case types_1.TransactionQueueStatus.Failed: {
                    this.emitter.emit(Events.StatusChange, this, this.error);
                }
            }
        };
        this.emitter = new events_1.EventEmitter();
        this.procedureType = procedureType;
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
        this.args = args;
        this.fees = fees;
        this.returnValue = returnValue;
        this.transactions = transactions.map(transaction => {
            const txn = new PolyTransaction_1.PolyTransaction(transaction, this);
            txn.onStatusChange(updatedTransaction => {
                this.emitter.emit(Events.TransactionStatusChange, updatedTransaction, this);
            });
            return txn;
        });
        this.uid = TransactionQueue.generateId();
    }
    static generateId() {
        return utils_1.serialize('transaction', {
            random: v4_1.default(),
        });
    }
    toPojo() {
        const { uid, transactions, status, procedureType, args, fees } = this;
        return {
            uid,
            transactions: transactions.map(transaction => transaction.toPojo()),
            status,
            fees,
            procedureType,
            args,
        };
    }
    onStatusChange(listener) {
        this.emitter.on(Events.StatusChange, listener);
        return () => {
            this.emitter.removeListener(Events.StatusChange, listener);
        };
    }
    onTransactionStatusChange(listener) {
        this.emitter.on(Events.TransactionStatusChange, listener);
        return () => {
            this.emitter.removeListener(Events.TransactionStatusChange, listener);
        };
    }
    executeTransactionQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            const nextTransaction = this.queue.shift();
            if (!nextTransaction) {
                return;
            }
            yield nextTransaction.run();
            yield this.executeTransactionQueue();
        });
    }
    _refresh(_params) { }
}
exports.TransactionQueue = TransactionQueue;
//# sourceMappingURL=TransactionQueue.js.map