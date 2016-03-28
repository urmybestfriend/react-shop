'use strict';

import request from 'utils/request';

const ADD_PHONE = 'ADD_PHONE';
const DELETE_PHONE = 'DELETE_PHONE';
const GET_ALL_PHONES = 'GET_ALL_PHONES';

export function getAllPhones() {
	return dispatch => {
		request.get('phones/getAll', {}).then(({data}) => {
			dispatch({ type: GET_ALL_PHONES, phones: data });
		});
	};
}

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
