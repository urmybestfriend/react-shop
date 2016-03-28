'use strict';

import types from 'constants/ActionTypes/Example';

const initialState = {
  counter: 0,
};

export function example( state = initialState, action ) {
  switch (action.type) {
  case types.INCREMENT_COUNTER:
    return {
      ...state,
      counter: state.counter + 1
    };
  case types.DECREMENT_COUNTER:
    return {
      ...state,
      counter: state.counter - 1
    };
  default:
    return state;
  }
}