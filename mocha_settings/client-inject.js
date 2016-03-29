'use strict';

process.env.NODE_PATH = 'src/client';

require('module').Module._initPaths();

import chai from 'chai';
import chaiSubSet from 'chai-subset';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiSubSet);

global.expect = chai.expect;
