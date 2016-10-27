'use strict';

import request from 'utils/request';
import types from 'constants/ActionTypes/Computers';

export function getAllComputers() {
    const query = `query{computers {
        mark
        model
        color
        wifi
        isLaptop
        diagonal
        coresNumber
        usb2
        usb3
        ram
        memory
        videocard
        videomemory
        processor
        operatingSystem
        price
        }}`;

    return dispatch => {
        request.get('/api/v1', {query}).then(({data}) => {
            dispatch({ type: types.GET_ALL_COMPUTERS, computers: data.computers });
        });
    };
}
