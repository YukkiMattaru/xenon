import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search';
import productReducer from './reducers/products';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';
import appReducer from './reducers/app';

const rootReducer = combineReducers({
  searchReducer,
  productReducer,
  authReducer,
  userReducer,
  appReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
