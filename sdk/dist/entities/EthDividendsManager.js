"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const DividendsManager_1 = require("./DividendsManager");
const types_1 = require("../types");
class EthDividendsManager extends DividendsManager_1.DividendsManager {
    static generateId({ securityTokenId, dividendType }) {
        return utils_1.serialize('ethDividendsManager', {
            securityTokenId,
            dividendType,
        });
    }
    constructor({ securityTokenSymbol, securityTokenId, address, storageWalletAddress, }) {
        const dividendType = types_1.DividendType.Eth;
        super({
            securityTokenId,
            securityTokenSymbol,
            dividendType,
            address,
            storageWalletAddress,
        });
        this.uid = EthDividendsManager.generateId({
            securityTokenId,
            dividendType,
        });
    }
}
exports.EthDividendsManager = EthDividendsManager;
//# sourceMappingURL=EthDividendsManager.js.map