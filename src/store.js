import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { userReducer } from './reducer';

const store = createStore(userReducer, devToolsEnhancer());

export default store;