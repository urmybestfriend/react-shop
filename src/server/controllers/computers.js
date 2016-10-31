'use strict';

import ComputerModel from '../models/computers';

const getAll = (mark) => {
    return new Promise((resolve, reject) => {
        ComputerModel.find({}, function(err, docs) {
            if(!err) {
                if (mark) {
                    mark = mark.trim().toLowerCase();

                    docs = docs.filter(pc => pc.mark.toLowerCase() === mark);
                }

                resolve(docs);
            } else {
                reject({error: err});
            }
        });
    });
};

const add = (computer) => {
    return new Promise((resolve, reject) => {
        const computerModel = new ComputerModel(computer);

        computerModel.save(function(err, docs) {
            if(!err) {
                resolve(computerModel);
            }
            else {
                reject({error: err});
            }
        });
    });
};

export default {
    getAll,
    add
};
