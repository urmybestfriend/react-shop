"use strict";

import Immutable from 'immutable';
import routerReducer from 'reducers/router_reducer';
import notesReducer from 'reducers/notes_reducer';
import ReducerNames from 'constants/reducer_names';
import RouterNames from 'constants/route_names';

const reducers = {
    [ReducerNames.ROUTER]: routerReducer,
    [ReducerNames.NOTES]: notesReducer
};

const initialState = Immutable.fromJS({
    [ReducerNames.ROUTER]: {
        name: '',
        path: '',
        params: {},
        query: {}
    }, [ReducerNames.NOTES]: {
        notes: []
    }
});

export default (state = initialState, action) => {
    return state.withMutations((mutableState) => {
        Object.keys(reducers).forEach((reducerName) => {
            mutableState.set(reducerName, reducers[reducerName](state, action));
        });
    });
};
