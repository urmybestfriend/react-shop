'use strict';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

import request from 'utils/request';

export function increment() {
	//let {data} = await request.get('phones/getAll', {});
  	return { type: INCREMENT_COUNTER };
}

export function decrement() {
	return (dispatch) => {
		dispatch({ type: DECREMENT_COUNTER });
	};
}