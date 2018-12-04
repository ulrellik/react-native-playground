import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

// Add Redux debugger or fallback to normal compose
// eslint-disable-next-line no-undef, no-underscore-dangle
const composeEnhancer = __DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export default () => createStore(combineReducers({ places: placesReducer }), composeEnhancer());
