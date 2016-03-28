'use strict';

import request from 'utils/request';
import types from 'constants/ActionTypes/Phones';

export function getAllPhones() {
	return dispatch => {
		request.get('phones/getAll', {}).then(({data}) => {
			dispatch({ type: types.GET_ALL_PHONES, phones: data });
		});
	};
}

export function addPhone(fields) {
  return {
    type: types.ADD_PHONE,
    fields,
  };
}

export function deletePhone(index) {
  return {
    type: types.DELETE_PHONE,
    index,
  };
}
