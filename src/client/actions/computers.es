'use strict';

import request from 'utils/request';
import types from 'constants/ActionTypes/Computers';

export function getAllComputers() {
	return dispatch => {
		request.get('computers/getAll', {}).then(({data}) => {
			dispatch({ type: types.GET_ALL_COMPUTERS, computers: data });
		});
	};
}
