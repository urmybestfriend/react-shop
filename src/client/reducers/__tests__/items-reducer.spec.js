'use strict';

import { items } from '../items';

describe('Items reducer:', () => {

    const initialState = {
        items: []
    };

    it('should return the initial state', () => {
        expect(items(initialState, {})).to.deep.equal(initialState);
    });

    it('should handle ADD', () => {
        const expectedState = {
            items: [{
                text: 'test'
            }],
        };
        const fields = { name: { value: 'test'}};
        expect(items(initialState, {
            type: 'ADD_ITEM',
            fields: fields,
        })).to.deep.equal(expectedState);
    });

    it('should handle DELETE', () => {
        const stateWithItem = {
            items: [{
                text: 'test'
            }],
        };
        expect(items(stateWithItem, {
            type: 'DELETE_ITEM',
            index: 0
        })).to.deep.equal(initialState);
    });
});
