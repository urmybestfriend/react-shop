'use strict';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const initialState = {
  counter: 0,
};

export function example( state = initialState, action ) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return {
      ...state,
      counter: state.counter + 1,
    };
  case DECREMENT_COUNTER:
    return {
      ...state,
      counter: state.counter - 1,
    };
  default:
    return state;
  }
}