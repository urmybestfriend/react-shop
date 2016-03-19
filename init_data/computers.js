'use strict';
var getRandomInt = require('./getRandomInt');
var generator = require('./generator');

var computerModel = {
    mark: function () {
        var arr = ['ASUS', 'Lenovo', 'HP', 'Apple', 'MSI', 'Acer', 'Dell', 'Toshiba', 'Sony', 'DEXP'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    model: function () {
        var arr = ['GX-700', '6QE-053', '9F4-5', 'DM036T', 'Zenbook Pro', 'GL552VW-DM321T', 'EeeBook', 'Surface', 'Redhost', 'MEDIA CENTER 1574', 'Mac mini', 'Mac Pro', 'Z800', 'IdeaPad', 'y580', 'optima', 'GAMER 1748'];
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
    isLaptop: function () {
        var arr = [true, false];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    diagonal: function () {
        var arr = [11.1, 11.3, 13.3, 13.7, 14.0, 15.6, 17.1, 17.3, 18.6, 20.1];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    coresNumber: function () {
        var arr = [1, 2, 4, 8, 16];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    usb2: function () {
        var arr = [0, 1, 2, 3];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    usb3: function () {
        var arr = [0, 1, 2, 3, 4];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    ram: function () {
        var arr = [1, 2, 4, 8, 16, 32, 64];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    memory: function () {
        var arr = [128, 256, 512, 1024, 2048, 4096, 8192];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    videocard: function () {
        var arr = ['Intel HD Graphics 3000', 'NVidia GeForce GTX 640', 'Intel HD Graphics 4000', 'NVidia GeForce GTX 730', 'NVidia GeForce GTX 950'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    videomemory: function () {
        var arr = [1, 2, 4, 8, 16, 32, 64];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    processor: function () {
        var arr = ['Intel', 'AMD', 'Mac'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    operatingSystem: function () {
        var arr = ['Windows', 'Linux', 'Mac OS X'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    price: function () {
        var arr = [300, 340, 380, 420, 460, 495, 510, 530, 560, 580, 640, 670, 725, 760, 780, 840, 850, 860, 920, 940, 1020, 1150, 1280, 1500];
        return arr[getRandomInt(0, arr.length - 1)];
    }
};

module.exports = generator(computerModel, 200);