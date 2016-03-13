'use strict';

import express from 'express';
import notesCtrl from '../controllers/notes';
import phonesCtrl from '../controllers/phones';

const router = express.Router();

router
	.post('/notes/create', notesCtrl.createNewNote)
    .post('/notes/remove', notesCtrl.removeNote)
    .post('/notes/updateOrder', notesCtrl.updateOrder)
    .post('/notes/update', notesCtrl.updateNote)
    .post('/notes/undo', notesCtrl.undoNotes)
    .get('/notes/getNotes', notesCtrl.getNotes);

router
	.post('/phones/add', phonesCtrl.add)
    .get('/phones/getAll', phonesCtrl.getAll);

export default router;
