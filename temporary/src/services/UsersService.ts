import axios from 'axios';
import { AppDispatch } from '../store/store';
import { productSlice } from '../store/reducers/products';
import { XenonAPI } from '../types/XenonAPI';
import { axiosInstance } from './helpers';
import { userSlice } from '../store/reducers/user';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axiosInstance.get<XenonAPI.User[]>('/data/users.json');
    dispatch(userSlice.actions.setUsers(response.data));
  } catch (e) {
    console.log(e);
  }
};
