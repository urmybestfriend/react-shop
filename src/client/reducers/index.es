'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { phones } from './items';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  phones,
});

export default rootReducer;
