'use strict';

import mongoose from 'mongoose';
import NotesModel from '../models/notes';
import configStyleNotes from '../../client/constants/notes_colors_config';

const createNewNote = (request, response) => {
    let noteRandomStyle = configStyleNotes[Math.floor(Math.random()*configStyleNotes.length)];
    NotesModel.getLastPosition().then((position) => {
        NotesModel.createNewNote({
            style: noteRandomStyle,
            position
        }).then((data) => {
            response.json({
                status: 'ok'
            });
        });
    });
};

const getNotes = (request, response) => {
    NotesModel.getAll().then((data) => {
        response.json({
            status: 'ok',
            notes: data
        });
    });
};

const removeNote = (request, response) => {
    let {body} = request;
    let {id} = body;

    NotesModel.removeNote({ _id: id }).then(() => {
        response.json({
            status: 'ok'
        });
    });
};

const updateOrder = (request, response) => {
    let {body} = request;
    let {dropNote, dragNote} = body;

    NotesModel.updateOrder(dropNote, dragNote).then(() => {
        response.json({
            status: 'ok'
        });
    });
};

const updateNote = (request, response) => {
    let {body} = request;
    let {note} = body;

    NotesModel.updateNote(note).then(() => {
        response.json({
            status: 'ok'
        });
    });
};

const undoNotes = (request, response) => {
    NotesModel.undoNotes().then(() => {
        response.json({
            status: 'ok'
        });
    });
};

export default { 
    createNewNote,
    getNotes,
    removeNote,
    updateOrder,
    updateNote,
    undoNotes
}