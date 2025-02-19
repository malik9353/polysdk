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
class PostTransactionResolver {
    constructor(resolver) {
        if (!resolver) {
            this.resolver = () => __awaiter(this, void 0, void 0, function* () { return undefined; });
            return;
        }
        this.resolver = resolver;
    }
    run(receipt) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.resolver(receipt);
            this.result = result;
        });
    }
}
exports.PostTransactionResolver = PostTransactionResolver;
function isPostTransactionResolver(val) {
    return val instanceof PostTransactionResolver;
}
exports.isPostTransactionResolver = isPostTransactionResolver;
//# sourceMappingURL=PostTransactionResolver.js.map