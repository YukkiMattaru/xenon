import _ from 'lodash';
import { AppDispatch } from '../store/store';
import { XenonAPI } from '../types/XenonAPI';
import { authSlice } from '../store/reducers/auth';

type AuthData = Pick<XenonAPI.User, 'login' | 'password'>;

export const authUser = (authData: AuthData, users: XenonAPI.User[]) => async (dispatch: AppDispatch) => {
  const authenticatedUser = _.find(
    users,
    (user) => user.login === authData.login && user.password === authData.password,
  );
  if (authenticatedUser) {
    localStorage.setItem('auth', JSON.stringify(authenticatedUser));
    dispatch(authSlice.actions.auth(authenticatedUser));
    dispatch(authSlice.actions.clearError());
  } else dispatch(authSlice.actions.setError('Пользователь не найден'));
};
