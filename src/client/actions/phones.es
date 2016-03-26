'use strict';

export function addPhone(fields) {
  return {
    type: 'ADD_PHONE',
    fields,
  };
}

export function deletePhone(index) {
  return {
    type: 'DELETE_PHONE',
    index,
  };
}
