'use strict';

import Log from '../models/log';
import Func from '../models/func';

export default function(next, done, self, modelName) {
	let currentDate = new Date();
    let date = `${currentDate.getDay()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`;
    let time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    let log = new Log({
        info: `In collection: "${modelName}" was written new item on ${date} in ${time}`
    })

    Func.findOne({}, (err, res) => {
        eval(res);
        log.save(() => {
            next();
        })
    });
}
