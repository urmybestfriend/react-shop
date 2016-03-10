'use strict';

import express from 'express';
import phoneCtrl from '../controllers/phone';

const router = express.Router();

router.get('/phones/getAll', phoneCtrl.getAll);
router.get('/phones/add', phoneCtrl.add);

export default router;