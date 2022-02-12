import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'telzir',
      storage: AsyncStorage,
      whitelist: ['pricePlans'],
      timeout: 0,
    },
    reducers,
  );

  return persistedReducer;
};
