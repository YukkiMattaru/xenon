import { AppDispatch } from '../store/store';
import { XenonAPI } from '../types/XenonAPI';
import { axiosInstance } from './helpers';
import { shopSlice } from '../store/reducers/shop';

export const fetchShops = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(shopSlice.actions.shopsFetching());
    const response = await axiosInstance.get<XenonAPI.Shop[]>('/data/shops.json');
    dispatch(shopSlice.actions.setShops(response.data));
  } catch (e) {
    console.log(e);
  }
};
