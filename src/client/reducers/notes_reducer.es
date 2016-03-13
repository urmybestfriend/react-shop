"use strict";

import Immutable from 'immutable';
import NotesActionTypes from 'constants/action_types/notes_action_types';
import ReducerNames from 'constants/reducer_names';

const getNotes = (state, data) => {
    let {notes} = data;

    state = state.setIn([ReducerNames.NOTES, 'notes'], notes);
    return state.get(ReducerNames.NOTES);
};

export default (state, action) => {
    const currentState = state.get(ReducerNames.NOTES);
    let {data, type} = action;
    switch (type) {
        case NotesActionTypes.ADD_NEW_NOTE:
            return addNewNote(state, data);
        case NotesActionTypes.GET_NOTES:
            return getNotes(state, data);
        default:
            return currentState;
    }
};
