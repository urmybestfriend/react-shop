'use strict';

import { example } from '../example';

describe('Example reducer:', () => {

    const initialState = {
    counter: 0
    };

    it('should return the initial state', () => {
        expect(example(initialState, {})).to.deep.equal(initialState);
    });

    it('should handle INCREMENT_COUNTER', () => {
        const expectedState = {
            counter: 1
        };

        expect(example(initialState, {
            type: 'INCREMENT_COUNTER'
        })).to.deep.equal(expectedState);
    });

    it('should handle DECREMENT_COUNTER', () => {
        const expectedState = {
            counter: -1
        };

        expect(example(initialState, {
            type: 'DECREMENT_COUNTER'
        })).to.deep.equal(expectedState);
    });
});
