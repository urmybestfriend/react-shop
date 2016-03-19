'use strict';
var getRandomInt = require('./getRandomInt');
var generator = require('./generator');

var phoneModel = {
    mark: function () {
        var arr = ['iPhone', 'Samsung', 'HTC', 'Huawey', 'Lenovo', 'Sony', 'Nokia', 'Xaomi', 'LG', 'ZTE'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    model: function () {
        var arr = ['6s', '5s', 'Galaxy', 'P70-A', 'Light Dual', 'Vibe', 'P1M', '650', 'Grand Prime', 'MX5'];
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
    gps: function () {
        var arr = [true, false];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    coresNumber: function () {
        var arr = [1, 2, 4, 8];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    ram: function () {
        var arr = [1, 2, 4, 8];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    memory: function () {
        var arr = [2, 4, 8, 16, 32, 64];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    camera: function () {
        var arr = [5, 8, 10, 12, 13, 15, 18];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    diagonal: function () {
        var arr = [4, 4.1, 4.2, 4.4, 4.5, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.5, 5.7, 6.0, 6.1, 6.3];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    operatingSystem: function () {
        var arr = ['Android', 'iOS', 'Window Phone'];
        return arr[getRandomInt(0, arr.length - 1)];
    },
    price: function () {
        var arr = [200, 220, 240, 260, 280, 300, 330, 360, 390, 420, 450, 480, 500, 540, 560, 580, 600, 620, 660, 710, 730, 800];
        return arr[getRandomInt(0, arr.length - 1)];
    }
};

module.exports = generator(phoneModel, 250);