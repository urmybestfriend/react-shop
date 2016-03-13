'use strict';

import PhoneModel from '../models/phones';

const getAll = (req, res) => {
    PhoneModel.find({}, function(err, docs) {
        if(err) {
            res.send({error: err});
        } else {
            res.send({data: docs});
        }
    });
};

const add = (req, res) => {
    let {phone} = req.body;
    console.log('phone', phone);
    console.log('req.body', req.body);
    let phoneModel = new PhoneModel(phone);
    phoneModel.save(function(err, docs) {
        if(err) {
            console.log('error: ', err);
            res.send({error: err});
        }
        else {
            console.log(docs);
            res.send({status: 'ok'});
        }
    });
};

export default {
    getAll,
    add
};
