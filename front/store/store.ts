import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search';

const rootReducer = combineReducers({
  searchReducer,
});

export function setupStore() {
  return configureStore({
    reducer: {
      reducer: rootReducer,
    },
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
