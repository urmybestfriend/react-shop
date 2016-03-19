'use strict';

import PrinterModel from '../models/printers';

const getAll = (req, res) => {
    PrinterModel.find({}, function(err, docs) {
        if(err) {
            res.send({error: err});
        } else {
            res.send({data: docs});
        }
    });
};

const add = (req, res) => {
    let {printer} = req.body;
    let printerModel = new PrinterModel(printer);
    printerModel.save(function(err, docs) {
        if(err) {
            console.log('error: ', err);
            res.send({error: err});
        }
        else {
            res.send({status: 'ok'});
        }
    });
};

export default {
    getAll,
    add
};
