"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DividendsManager_1 = require("./DividendsManager");
const utils_1 = require("../utils");
const types_1 = require("../types");
class Erc20DividendsManager extends DividendsManager_1.DividendsManager {
    static generateId({ securityTokenId, dividendType }) {
        return utils_1.serialize('erc20DividendsManager', {
            securityTokenId,
            dividendType,
        });
    }
    constructor({ securityTokenSymbol, securityTokenId, address, storageWalletAddress, }) {
        const dividendType = types_1.DividendType.Erc20;
        super({
            securityTokenId,
            securityTokenSymbol,
            address,
            storageWalletAddress,
            dividendType,
        });
        this.uid = Erc20DividendsManager.generateId({
            securityTokenId,
            dividendType,
        });
    }
}
exports.Erc20DividendsManager = Erc20DividendsManager;
//# sourceMappingURL=Erc20DividendsManager.js.map