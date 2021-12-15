import { AppDispatch } from '../store/store';
import { fetchProducts } from './ProductService';
import { appSlice } from '../store/reducers/app';
import { fetchUsers } from './UsersService';
import { fetchCarts } from './CartService';
import { fetchShops } from './ShopService';

export const initializeApplication = (userId?: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchProducts());
  dispatch(fetchShops());
  dispatch(fetchUsers());
  dispatch(fetchCarts(userId));
  dispatch(appSlice.actions.init());
};
