import _ from 'lodash';
import { AppDispatch } from '../store/store';
import { XenonAPI } from '../types/XenonAPI';
import { useAppSelector } from '../hooks/redux';
import { authSlice } from '../store/reducers/auth';

type AuthData = Pick<XenonAPI.User, 'login' | 'password'>;

export const authUser = (authData: AuthData) => async (dispatch: AppDispatch) => {
  const { users } = useAppSelector((state) => state.userReducer);
  const authenticatedUser = _.find(
    users,
    (user) => user.login === authData.login && user.password === authData.password,
  );
  if (authenticatedUser) dispatch(authSlice.actions.auth(authenticatedUser));
};
