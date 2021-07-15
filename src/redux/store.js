import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';

const middleware = [thunk];

const initialState = {};

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  whitelist: ['Auth','User'],
  debug: __DEV__,
};

const persistingReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistingReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
