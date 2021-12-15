import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XenonAPI } from '../../types/XenonAPI';

interface AuthState {
  user: XenonAPI.User | undefined;
  isAuth: boolean;
  error: string;
}

const authenticatedUser = localStorage.getItem('auth');

const initialState: AuthState = {
  user: authenticatedUser ? JSON.parse(authenticatedUser) : undefined,
  isAuth: !!authenticatedUser,
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
    logout(state) {
      localStorage.removeItem('auth');
      state.isAuth = false;
      state.user = undefined;
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
