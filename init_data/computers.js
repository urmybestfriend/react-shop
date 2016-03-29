'use strict';

var generator = require('./generator');

var computerModel = {
    mark: ['ASUS', 'Lenovo', 'HP', 'Apple', 'MSI', 'Acer', 'Dell', 'Toshiba', 'Sony', 'DEXP'],
    model: ['GX-700', '6QE-053', '9F4-5', 'DM036T', 'Zenbook Pro', 'GL552VW-DM321T', 'EeeBook', 'Surface', 'Redhost', 'MEDIA CENTER 1574', 'Mac mini', 'Mac Pro', 'Z800', 'IdeaPad', 'y580', 'optima', 'GAMER 1748'],
    color: ['black', 'white', 'green', 'grey', 'yellow', 'blue', 'red', 'orange', 'violet', 'purple'],
    wifi: ['802.11ac', '802.11a', '802.11c'],
    isLaptop: [true, false],
    diagonal: [11.1, 11.3, 13.3, 13.7, 14.0, 15.6, 17.1, 17.3, 18.6, 20.1],
    coresNumber: [1, 2, 4, 8, 16],
    usb2: [0, 1, 2, 3],
    usb3: [0, 1, 2, 3, 4],
    ram: [1, 2, 4, 8, 16, 32, 64],
    memory: [128, 256, 512, 1024, 2048, 4096, 8192],
    videocard: ['Intel HD Graphics 3000', 'NVidia GeForce GTX 640', 'Intel HD Graphics 4000', 'NVidia GeForce GTX 730', 'NVidia GeForce GTX 950'],
    videomemory: [1, 2, 4, 8, 16, 32, 64],
    processor: ['Intel', 'AMD', 'Mac'],
    operatingSystem: ['Windows', 'Linux', 'Mac OS X'],
    price: [300, 340, 380, 420, 460, 495, 510, 530, 560, 580, 640, 670, 725, 760, 780, 840, 850, 860, 920, 940, 1020, 1150, 1280, 1500]
};

module.exports = generator(computerModel, 30);
