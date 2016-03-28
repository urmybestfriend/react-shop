'use strict';

const initialState = {
  phones: []
};

export function phones(state = initialState, action) {
  switch (action.type) {
  case 'ADD_PHONE':
    return {
      ...state,
      phones: [
        ...state.phones, 
        action.phone
      ],
    };

  case 'DELETE_PHONE':
    return {
      ...state,
      phones: [
        ...state.phones.slice(0, action.index),
        ...state.phones.slice(+action.index + 1),
      ],
    };

  case 'GET_ALL_PHONES':
    return {
      ...state,
      phones: action.phones,
    };

  default:
    return state;
  }
}