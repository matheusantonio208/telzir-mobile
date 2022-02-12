import {combineReducers} from 'redux';

import auth from './auth-agregador/auth-reducer.js';

export default combineReducers({
  auth,
});
