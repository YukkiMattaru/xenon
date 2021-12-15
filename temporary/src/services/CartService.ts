import { AppDispatch } from '../store/store';
import { XenonAPI } from '../types/XenonAPI';
import { axiosInstance } from './helpers';
import { cartItemSlice } from '../store/reducers/cartItem';

export const fetchCarts = (userId?: string) => async (dispatch: AppDispatch) => {
  try {
    if (!userId) return;
    dispatch(cartItemSlice.actions.cartItemFetching());
    const response = await axiosInstance.get<XenonAPI.CartItem[]>('/data/cart_items.json');
    const items = response.data.filter((item) => item.userId === userId) ?? [];
    dispatch(cartItemSlice.actions.setCartItem(items));
  } catch (e) {
    console.log(e);
  }
};
