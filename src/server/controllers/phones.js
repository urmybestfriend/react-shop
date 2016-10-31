'use strict';

import PhoneModel from '../models/phones';

const getAll = (mark) => {
    return new Promise((resolve, reject) => {
        PhoneModel.find({}, (err, phones) => {
            if (!err){
                if (mark) {
                    mark = mark.trim().toLowerCase();

                    phones = phones.filter(p => p.mark.toLowerCase() === mark);
                }

                resolve(phones);
            } else {
                reject({ error: err });
            }
        })
    });
};

const add = (phone) => {
    return new Promise((resolve, reject) => {
        const phoneModel = new PhoneModel(phone);

        phoneModel.save(function(err, docs) {
            if(!err) {
                resolve(phoneModel);
            }
            else {
                reject({ error: err });
            }
        });
    });
};

export default {
    getAll,
    add
};
