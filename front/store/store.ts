import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search';
import productReducer from './reducers/products';

const rootReducer = combineReducers({
  searchReducer,
  productReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
