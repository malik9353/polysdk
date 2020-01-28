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
const lodash_1 = require("lodash");
class Factory {
    constructor(eClass, context) {
        this.cache = {};
        this.Entity = eClass;
        this.context = context;
    }
    /**
     * Gets an entity from the cache. Fetches the necessary data to create it if it isn't cached, refreshes it if it is
     *
     * @param uid unique identifier for the entity
     */
    fetch(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cache, context } = this;
            let instance = cache[uid];
            if (!instance) {
                const identifiers = this.Entity.unserialize(uid);
                const props = yield this.generateProperties(uid);
                instance = new this.Entity(lodash_1.merge(identifiers, props), context);
                cache[uid] = instance;
            }
            else {
                // TODO @monitz87: remove this as soon as we implement event-based refreshing of entities
                // This line basically fetches the data again and again every time an entity is fetched,
                // making the cache only good for having one central copy of each entity, but not for reducing
                // the amount of requests. Once we start subscribing to relevant events in each factory and refreshing
                // entities when they fire, this won't be necessary
                yield this.refresh(uid);
            }
            return instance;
        });
    }
    /**
     * Gets an entity from the cache. Creates it if it isn't cached, updates it if it is
     *
     * @param uid unique identifier for the entity
     * @param params constructor data for the entity
     */
    create(uid, params) {
        const { cache, context } = this;
        let instance = cache[uid];
        if (!instance) {
            const identifiers = this.Entity.unserialize(uid);
            instance = new this.Entity(lodash_1.merge(identifiers, params), context);
            cache[uid] = instance;
        }
        else {
            instance._refresh(params);
        }
        return instance;
    }
    /**
     * Fetches the data for an entity and updates its properties
     *
     * @param uid unique identifier for the entity
     */
    refresh(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = this.cache[uid];
            if (!instance) {
                return;
            }
            const props = yield this.generateProperties(uid);
            instance._refresh(props);
        });
    }
    /**
     * Updates an entity's properties in place
     *
     * @param uid unique identifier for the entity
     * @param params properties that should be updated
     */
    update(uid, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = this.cache[uid];
            if (!instance) {
                return;
            }
            instance._refresh(params);
        });
    }
}
exports.Factory = Factory;
//# sourceMappingURL=Factory.js.map