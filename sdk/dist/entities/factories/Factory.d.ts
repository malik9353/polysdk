import { Entity } from '../Entity';
import { Context } from '../../Context';
export interface EntityClass<T, U> {
    new (params: T & U, context: Context): Entity<T>;
    unserialize(uid: string): U;
    generateId(identifiers: U): string;
}
export declare abstract class Factory<EntityType extends Entity<T>, T extends any, U extends any> {
    cache: {
        [key: string]: EntityType | undefined;
    };
    context: Context;
    Entity: EntityClass<T, U>;
    protected abstract generateProperties(uid: string): Promise<T>;
    constructor(eClass: EntityClass<T, U>, context: Context);
    /**
     * Gets an entity from the cache. Fetches the necessary data to create it if it isn't cached, refreshes it if it is
     *
     * @param uid unique identifier for the entity
     */
    fetch(uid: string): Promise<EntityType>;
    /**
     * Gets an entity from the cache. Creates it if it isn't cached, updates it if it is
     *
     * @param uid unique identifier for the entity
     * @param params constructor data for the entity
     */
    create(uid: string, params: T): EntityType;
    /**
     * Fetches the data for an entity and updates its properties
     *
     * @param uid unique identifier for the entity
     */
    refresh(uid: string): Promise<void>;
    /**
     * Updates an entity's properties in place
     *
     * @param uid unique identifier for the entity
     * @param params properties that should be updated
     */
    update(uid: string, params: Partial<T>): Promise<void>;
}
//# sourceMappingURL=Factory.d.ts.map