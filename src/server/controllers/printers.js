'use strict';

import PrinterModel from '../models/printers';

const getAll = (mark) => {
    return new Promise((resolve, reject) => {
        PrinterModel.find({}, (err, printers) => {
            if (!err) {
                if (mark) {
                    mark = mark.trim().toLowerCase();

                    printers = printers.filter(p => p.mark.toLowerCase() === mark);
                }

                resolve(printers);
            } else {
                reject({ error: err });
            }
        });
    });
};

const add = (printer) => {
    return new Promise((resolve, reject) => {
        const printerModel = new PrinterModel(printer);

        printerModel.save(function(err, docs) {
            if(!err) {
                resolve(printerModel);
            }
            else {
                reject(err);
            }
        });
    });
};

export default {
    getAll,
    add
};
