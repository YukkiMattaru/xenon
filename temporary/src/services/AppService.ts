import { AppDispatch } from '../store/store';
import { fetchProducts } from './ProductService';
import { appSlice } from '../store/reducers/app';

export const initializeApplication = () => async (dispatch: AppDispatch) => {
  dispatch(fetchProducts());
  dispatch(appSlice.actions.init());
};
