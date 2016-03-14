'use strict';

require('babel-core/register');

var mongoose = require('mongoose');
var env = require('../../env');
var NoteModel = require('./models/notes.js').default;

mongoose.connection.once('open', function () {

    NoteModel.create({}).then(function (error) {

        NoteModel.remove({}).then(function() {
            mongoose.connection.close();
        });
    });


});

mongoose.connect(env.get('mongo:uri'), env.get('mongo:options'));
