'use strict';

import ComputerModel from '../models/computers';
import commonCtrl from './common';

const getAll = (mark) => commonCtrl.getAll(ComputerModel, mark);

const add = (computer) => commonCtrl.add(ComputerModel, computer);

export default {
    getAll,
    add
};
