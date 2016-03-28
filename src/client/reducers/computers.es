'use strict';

const initialState = {
  computers: []
};

export function computers(state = initialState, action) {
  switch (action.type) {
  case 'GET_ALL_COMPUTERS':
    return {
      ...state,
      computers: action.computers,
    };

  default:
    return state;
  }
}