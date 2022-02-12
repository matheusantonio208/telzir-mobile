import {all} from 'redux-saga/effects';

import authSagas from './auth-agregador/auth-sagas.js';

export default function* rootSaga() {
  return yield all([authSagas]);
}
