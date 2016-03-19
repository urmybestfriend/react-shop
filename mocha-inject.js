'use strict';

delete process.env.BROWSER;
process.env.NODE_ENV = 'test';
process.env.NODE_PATH = 'src';
process.env.SHOP = 'test';

require('module').Module._initPaths();

import chai from 'chai';
import chaiSubSet from 'chai-subset';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiSubSet);

global.expect = chai.expect;
