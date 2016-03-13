"use strict";

import store from 'store/app_store';
import NotesActionTypes from 'constants/action_types/notes_action_types';
import request from 'utils/request';

const getNotes = () => {
    request.get('notes/getNotes', {}).then((response) => {
        let {notes} = response;

        store.dispatch({
            type: NotesActionTypes.GET_NOTES,
            data: { notes }
        });
    }, () => {});
};

const updateOrder = (data) => {
    request.post('notes/updateOrder', data).then((response) => {
        getNotes();
    }, () => {});
};

const addNewNote = () => {
    request.post('notes/create', {}).then((response) => {
        getNotes();
    }, () => {});
};

const removeNote = (id) => {
    request.post('notes/remove', { id }).then((response) => {
        getNotes();
    }, () => {});
};

const updateNote = (note) => {
    request.post('notes/update', { note }).then((response) => {
        getNotes();
    }, () => {});
};

const undoNotes = (note) => {
    request.post('notes/undo', {}).then((response) => {
        getNotes();
    }, () => {});
};

export default {
    addNewNote,
    getNotes,
    removeNote,
    updateOrder,
    updateNote,
    undoNotes
};