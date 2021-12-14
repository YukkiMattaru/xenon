import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XenonAPI } from '../../types/XenonAPI';

interface AuthState {
  user: XenonAPI.User | undefined;
  isAuth: boolean;
  error: string;
}

const initialState: AuthState = {
  user: undefined,
  isAuth: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state, action: PayloadAction<XenonAPI.User>) {
      state.user = action.payload;
      state.isAuth = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = '';
    },
  },
});

export default authSlice.reducer;
