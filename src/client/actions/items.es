'use strict';

import types from 'constants/ActionTypes/Items';

export function addItem(fields) {
  return {
    type: types.ADD_ITEM,
    fields,
  };
}

export function delItem(index) {
  return {
    type: types.DELETE_ITEM,
    index,
  };
}
