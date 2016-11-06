'use strict';

import PhoneModel from '../models/phones';
import commonCtrl from './common';

const getAll = (mark) => commonCtrl.getAll(PhoneModel, mark);

const add = (phone) => commonCtrl.add(PhoneModel, phone);

export default {
    getAll,
    add
};
