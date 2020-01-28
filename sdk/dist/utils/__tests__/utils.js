"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('serialize and unserialize', () => {
    const entityType = 'someEntity';
    const pojo1 = {
        foo: 'Foo',
        bar: 'Bar',
    };
    const inversePojo1 = {
        bar: 'Bar',
        foo: 'Foo',
    };
    const pojo2 = {
        baz: 'baz',
    };
    test('serialize returns the same unique id for the same pojo', () => {
        expect(index_1.serialize(entityType, pojo1)).toBe(index_1.serialize(entityType, pojo1));
        expect(index_1.serialize(entityType, pojo1)).toBe(index_1.serialize(entityType, inversePojo1));
    });
    test('serialize returns a different unique id for different pojos', () => {
        expect(index_1.serialize(entityType, pojo1)).not.toBe(index_1.serialize(entityType, pojo2));
    });
    test('unserialize recovers the serialized object', () => {
        expect(index_1.unserialize(index_1.serialize(entityType, pojo1))).toEqual(pojo1);
        expect(index_1.unserialize(index_1.serialize(entityType, inversePojo1))).toEqual(pojo1);
    });
});
//# sourceMappingURL=utils.js.map