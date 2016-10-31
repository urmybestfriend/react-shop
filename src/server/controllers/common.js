'use strict';

const getAll = (Model, mark) => {
    return new Promise((resolve, reject) => {
        Model.find({}, function(err, docs) {
            if(!err) {
                if (mark) { // TODO: improve working with filters, use generic for filtering by more params!
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

const add = (Model, entity) => {
    return new Promise((resolve, reject) => {
        const model = new Model(entity);

        model.save(function(err, docs) {
            if(!err) {
                resolve(model);
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
