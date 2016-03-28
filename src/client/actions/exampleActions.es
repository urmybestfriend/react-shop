'use strict';

import types from 'constants/ActionTypes/Example';
import request from 'utils/request';

export function increment() {
	return dispatch => {
		dispatch({ type: types.INCREMENT_COUNTER });
	}
  	return { type: INCREMENT_COUNTER };
}

export function decrement() {
	return (dispatch) => {
		dispatch({ type: types.DECREMENT_COUNTER });
	};
}