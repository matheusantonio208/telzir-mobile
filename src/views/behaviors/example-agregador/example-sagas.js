import { Alert } from 'react-native';
import { takeLatest, call, all } from 'redux-saga/effects';

import api from '#services/api.js';

export function* signUp({ payload }) {
  try {
    const { areaCodeOrigin, areaCodeDestiny, callDuration } = payload;
    yield call(api.post, '/simulation', {
      areaCodeOrigin,
      areaCodeDestiny,
      callDuration,
    });
  } catch (error) {
    Alert.alert(`Error: ${error}`);
  }
}
export default all([takeLatest('@example/EXAMPLE_REQUEST', signUp)]);
