'use strict';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

import request from 'utils/request';

export function increment() {
	return dispatch => {
		request.get('phones/getAll', {}).then(({data}) => {
			let length = data.length;
			dispatch({ type: INCREMENT_COUNTER, number: length });
		});

	}
  	return { type: INCREMENT_COUNTER };
}

export function decrement() {
	return (dispatch) => {
		dispatch({ type: DECREMENT_COUNTER, number: 10 });
	};
}