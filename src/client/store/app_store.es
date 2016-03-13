import { createStore } from 'redux';
import appReducer from 'reducers/app_reducer';

const store = createStore(appReducer);

export default store;
