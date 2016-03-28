'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { phones } from './phones';
import { example } from './example';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  phones,
  example
});

export default rootReducer;
