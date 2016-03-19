'use strict';

var generator = require('./generator');

var printerModel = {
    mark: ['HP', 'Canon', 'Epson', 'Samsung'],
    model: ['L800', 'Mita FS-1040', '111SU', 'Mita FS-1020MFP',  'LaserJet Pro MFP M177fw'],
    color: ['black', 'white', 'green', 'grey', 'yellow', 'blue', 'red', 'orange', 'violet', 'purple'],
    wifi: ['802.11ac', '802.11a', '802.11c'],
    isMFP: [true, false],
    isBlackWhite: [true, false],
    pageVelocityPerMinute: [22, 23, 24, 25, 26, 30, 33, 36, 37, 40, 42, 45, 60],
    printTechnology: ['jet', 'laser'],
    price: [80, 110, 130, 140, 155, 160, 187, 210, 220, 254, 270, 310, 340],
};

module.exports = generator(printerModel, 140);
