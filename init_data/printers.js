'use strict';
var getRandomInt = require('./getRandomInt');
var generator = require('./generator');

var printerModel = {
    mark: function () {
        var arr = ['HP', 'Canon', 'Epson', 'Samsung'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    model: function () {
        var arr = ['L800', 'Mita FS-1040', '111SU', 'Mita FS-1020MFP',  'LaserJet Pro MFP M177fw'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    color: function () {
        var arr = ['black', 'white', 'green', 'grey', 'yellow', 'blue', 'red', 'orange', 'violet', 'purple'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    wifi: function () {
        var arr = ['802.11ac', '802.11a', '802.11c'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    isMFP: function () {
        var arr = [true, false];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    isBlackWhite: function () {
        var arr = [true, false];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    pageVelocityPerMinute: function () {
        var arr = [22, 23, 24, 25, 26, 30, 33, 36, 37, 40, 42, 45, 60];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    printTechnology: function () {
        var arr = ['jet', 'laser'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    price: function () {
        var arr = [80, 110, 130, 140, 155, 160, 187, 210, 220, 254, 270, 310, 340];
        return arr[getRandomInt(0, arr.length - 1)];
    }
};

module.exports = generator(printerModel, 140);
