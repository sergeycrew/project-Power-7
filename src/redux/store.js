import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';

import { exercisesReducer } from './exercises/slice';

import { productFilterReducer } from './products/productFilterSlice';
import { productListReducer } from './products/productListSlice';
import { productsReducer } from './products/productSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),

  exercises: exercisesReducer,

  productFilter: productFilterReducer,
  productList: productListReducer,
  products: productsReducer

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
