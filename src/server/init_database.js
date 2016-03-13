'use strict';

require('babel-core/register');

var mongoose = require('mongoose');
var env = require('../../env');
var NoteModel = require('./models/notes.js').default;

mongoose.connection.once('open', function () {

    NoteModel.create({}).then(function (error) {
        console.log('Note Model created');

        NoteModel.remove({}).then(function() {
            console.log('Note Model remove');
            mongoose.connection.close();
        });
    });


});

mongoose.connect(env.get('mongo:uri'), env.get('mongo:options'));