"use strict";

import ReducerNames from 'constants/reducer_names';

const getNotes = (state) => {
    return state.getIn([ReducerNames.NOTES, 'notes']);
};

export default {
    getNotes
}
