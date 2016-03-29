'use strict';

import { computers } from '../computers';

describe('Computers reducer:', () => {

    const initialState = {
        computers: []
    };

    it('should return the initial state', () => {
        expect(computers(initialState, {})).to.deep.equal(initialState);
    });

    it('should handle GET_ALL_COMPUTERS', () => {
        const expectedState = {
            computers: [{
                name: 'macbook'
            }, {
                name: 'asus'
            }]
        };

        const computersToGet =  [{
                name: 'macbook'
            }, {
                name: 'asus'
        }];

        expect(computers(initialState, {
            type: 'GET_ALL_COMPUTERS',
            computers: computersToGet,
        })).to.deep.equal(expectedState);
    });
});
