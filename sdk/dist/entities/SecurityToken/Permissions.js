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
const SubModule_1 = require("./SubModule");
const procedures_1 = require("../../procedures");
class Permissions extends SubModule_1.SubModule {
    constructor() {
        super(...arguments);
        /**
         * Enable permissions features. This allows you to add delegate addresses
         * that can perform certain operations on your security token
         */
        this.enable = () => __awaiter(this, void 0, void 0, function* () {
            const { symbol } = this.securityToken;
            const procedure = new procedures_1.EnableGeneralPermissionManager({
                symbol,
            }, this.context);
            return procedure.prepare();
        });
        /**
         * Grant or revoke a permission to a delegate address
         *
         * @param delegate delegate address
         * @param op operation for which to modify permission
         * @param isGranted whether to grant or revoke the permission
         * @param details description of the delegate (defaults to empty string, is ignored if the delegate already exists)
         */
        this.changeDelegatePermission = (args) => __awaiter(this, void 0, void 0, function* () {
            const { symbol } = this.securityToken;
            const procedure = new procedures_1.ChangeDelegatePermission(Object.assign({ symbol }, args), this.context);
            return procedure.prepare();
        });
    }
}
exports.Permissions = Permissions;
//# sourceMappingURL=Permissions.js.map