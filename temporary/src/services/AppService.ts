import { AppDispatch } from '../store/store';
import { fetchProducts } from './ProductService';

export const initializeApplication = () => async (dispatch: AppDispatch) => {
  dispatch(fetchProducts());
};
