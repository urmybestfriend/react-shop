'use strict';

import { phones } from '../phones';

describe('Phones reducer:', () => {

    const initialState = {
        phones: []
    };

    it('should return the initial state', () => {
        expect(phones(initialState, {})).to.deep.equal(initialState);
    });

    it('should handle ADD_PHONE', () => {
        const expectedState = {
            phones: [{
                name: 'iphone'
            }]
        };

        const phoneToAdd = {
            name: 'iphone'
        };

        expect(phones(initialState, {
            type: 'ADD_PHONE',
            phone: phoneToAdd,
        })).to.deep.equal(expectedState);
    });

    it('should handle DELETE_PHONE', () => {
        const expectedState = {
            phones: [{
                name: 'iphone'
            }]
        };

        const stateWithPhones = {
            phones: [{
                    name: 'iphone'
                }, {
                    name: 'samsung'
            }]
        };

        expect(phones(stateWithPhones, {
            type: 'DELETE_PHONE',
            index: 1
        })).to.deep.equal(expectedState);
    });

    it('should handle GET_ALL_PHONES', () => {
        const phonesToGet = [{
                name: 'iphone'
            }, {
                name: 'samsung'
        }];

        const expectedState = {
            phones: [{
                    name: 'iphone'
                }, {
                    name: 'samsung'
            }]
        };

        expect(phones(initialState, {
            type: 'GET_ALL_PHONES',
            phones: phonesToGet
        })).to.deep.equal(expectedState);
    });
});
