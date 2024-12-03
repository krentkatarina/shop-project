import { configureStore, combineReducers} from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./user/userSlice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const rootReducer = combineReducers({
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  });

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getMiddleware) => getMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }}).concat(apiSlice.middleware),
    devTools: true
})



export const persistor = persistStore(store)

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getMiddleware) => getMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }}).concat(apiSlice.middleware),
    preloadedState
  })
}