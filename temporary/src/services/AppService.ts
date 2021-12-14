import { AppDispatch } from '../store/store';
import { fetchProducts } from './ProductService';
import { appSlice } from '../store/reducers/app';
import { fetchUsers } from './UsersService';

export const initializeApplication = () => async (dispatch: AppDispatch) => {
  dispatch(fetchProducts());
  dispatch(fetchUsers());
  dispatch(appSlice.actions.init());
};
