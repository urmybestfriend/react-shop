'use strict';

import request from 'utils/request';

const GET_ALL_COMPUTERS = 'GET_ALL_COMPUTERS';

export function getAllComputers() {
	return dispatch => {
		request.get('computers/getAll', {}).then(({data}) => {
			dispatch({ type: GET_ALL_COMPUTERS, computers: data });
		});
	};
}
