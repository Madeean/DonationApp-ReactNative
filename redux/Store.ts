import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/User.ts';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Categories from './reducers/Categories.ts';
import Donations from './reducers/Donations.ts';
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: userReducer,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
persistor.purge();
