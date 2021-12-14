import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  init: boolean;
}

const initialState: AppState = {
  init: false,
};

export const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    init(state) {
      state.init = true;
    },
  },
});

export default appSlice.reducer;
