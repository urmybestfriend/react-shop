'use strict';

import PrinterModel from '../models/printers';
import commonCtrl from './common';

const getAll = (mark) => commonCtrl.getAll(PrinterModel, mark);

const add = (printer) => commonCtrl.add(PrinterModel, printer);

export default {
    getAll,
    add
};
