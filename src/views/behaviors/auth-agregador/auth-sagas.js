import {Alert} from 'react-native';
import {takeLatest, call, all} from 'redux-saga/effects';

import api from '#services/biomeApi.js';

export function* signUp({payload}) {
  try {
    console.log('ok');
    const {areaCodeOrigin, areaCodeDestiny, callDuration} = payload;
    yield call(api.post, '/simulation', {
      areaCodeOrigin,
      areaCodeDestiny,
      callDuration,
    });
  } catch (error) {
    Alert.alert(`Falha no cadastro, verifique seus dados! ${error}`);
  }
}
export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
