import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XenonAPI } from '../../types/XenonAPI';

interface AuthState {
  user: XenonAPI.User | undefined;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: undefined,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state, action: PayloadAction<XenonAPI.User>) {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export default authSlice.reducer;
