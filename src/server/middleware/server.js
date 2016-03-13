'use strict';

import Promise from 'bluebird';
import expressConfig from './express';

export default (app) => {
	return new Promise((resolve) => {
		expressConfig(app);

		app.listen(app.get('port'), () => {
			console.log('START LISTEN PORT - ', app.get('port'));
			resolve();
		});
    });
}