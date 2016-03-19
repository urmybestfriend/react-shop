'use strict';

var generator = require('./generator');

var phoneModel = {
    mark: ['iPhone', 'Samsung', 'HTC', 'Huawey', 'Lenovo', 'Sony', 'Nokia', 'Xaomi', 'LG', 'ZTE'],
    model: ['6s', '5s', 'Galaxy', 'P70-A', 'Light Dual', 'Vibe', 'P1M', '650', 'Grand Prime', 'MX5'],
    color: ['black', 'white', 'green', 'grey', 'yellow', 'blue', 'red', 'orange', 'violet', 'purple'],
    wifi: ['802.11ac', '802.11a', '802.11c'],
    gps: [true, false],
    coresNumber: [1, 2, 4, 8],
    ram: [1, 2, 4, 8],
    memory: [2, 4, 8, 16, 32, 64],
    camera: [5, 8, 10, 12, 13, 15, 18],
    diagonal: [4, 4.1, 4.2, 4.4, 4.5, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.5, 5.7, 6.0, 6.1, 6.3],
    operatingSystem: ['Android', 'iOS', 'Window Phone'],
    price: [200, 220, 240, 260, 280, 300, 330, 360, 390, 420, 450, 480, 500, 540, 560, 580, 600, 620, 660, 710, 730, 800]
};

module.exports = generator(phoneModel, 250);