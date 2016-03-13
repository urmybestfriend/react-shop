'use strict';

import mongoose from 'mongoose';
import async from 'async';
import _ from 'lodash';

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    title: { type: String, required: true, default: 'Note title' },
    body: { type: String, required: true, default: 'Note body' },
    style: { type: Object, required: true, default: {} },
    removed: { type: Boolean, required: true, default: false},
    position: { type: Number, required: true, default: 0 },
    tag: { type: String, default: '' }
});

NoteSchema.set('toObject', { virtuals: true });
NoteSchema.set('toJSON', { virtuals: true });

NoteSchema.statics.getLastPosition = function (condition={}) {
    return new Promise((resolve) => {
        this.find(condition, (error, notes) => {
            if(error) {
                resolve(0);
            }
            else {
               resolve(notes.length); 
            }
        });
    });
};

NoteSchema.statics.getAll = function (condition = { removed: false }) {
    return new Promise((resolve, reject) => {
        this.find(condition).sort('position').exec((error, data) => {
            if (!error) {
                resolve(data);
            } else {
                reject(error);
            }
        });
    });
};

NoteSchema.statics.removeNote = function (condition={}) {
    return new Promise((resolve, reject) => {
        async.waterfall([(cb) => {
            this.findOne(condition).exec(cb);
        },
        (removedNote, cb) => {
            if(removedNote) {
                removedNote.removed = true;
                removedNote.save(() => {
                    cb(null);
                });
            }
        }], (error) => {
            if (!error) {
                resolve();
            } else {
                reject(error);
            }
        })
    });
    // return new Promise((resolve, reject) => {
    //     this.remove(condition, (error, data) => {
    //         if (!error) {
    //             resolve(data);
    //         } else {
    //             reject(error);
    //         }
    //     });
    // });
};

NoteSchema.statics.createNewNote = function (data = {}) {
    return new Promise((resolve, reject) => {
        let newNote = new this(data);
        newNote.save((error, data) => {
            if (!error) {
                resolve(data);
            } else {
                reject(error);
            }
        });
    });
};

NoteSchema.statics.updateNote = function (note) {
    return new Promise((resolve, reject) => {
        async.waterfall([(cb) => {
            this.findOne({ _id: note.id }).exec(cb);
        },
        (updateNote, cb) => {
            if(updateNote) {
                updateNote = _.assign(updateNote, note);
                updateNote.save(() => {
                    cb(null);
                });
            }
        }], (error) => {
            if (!error) {
                resolve();
            } else {
                reject(error);
            }
        })
    });
};

NoteSchema.statics.undoNotes = function (note) {
    return new Promise((resolve, reject) => {
        async.waterfall([(cb) => {
            this.findOne({ removed: true }).sort('-updatedAt').exec(cb);
        },
        (removedNote, cb) => {
            if(removedNote) {
                removedNote.removed = false;
                removedNote.save(() => {
                    cb(null);
                });
            }
        }], (error) => {
            if (!error) {
                resolve();
            } else {
                reject(error);
            }
        })
    });
};
NoteSchema.statics.updateOrder = function (dropNote, dragNote) {
    return new Promise((resolve, reject) => {
        async.waterfall([(cb) => {
            this.findOne({ _id: dragNote.id }).exec(cb);
        },
        (note, cb) => {
            if(note) {
                note.position = dropNote.position;
                note.save(() => {
                    cb(null);
                });
            }
        },
        (cb) => {
           this.findOne({ _id: dropNote.id }).exec(cb);
        },
        (note, cb) => {
            if(note) {
                note.position = dragNote.position;
                note.save(() => { cb(null); });
            }
        }], (error) => {
            if (!error) {
                resolve();
            } else {
                reject(error);
            }
        })
    });
};

NoteSchema.plugin(require('mongoose-timestamp'));

export default mongoose.model('Note', NoteSchema);
