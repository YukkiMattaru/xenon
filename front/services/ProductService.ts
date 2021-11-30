import axios from 'axios';
import { AppDispatch } from '../store/store';
import { productSlice } from '../store/reducers/products';
import { XenonAPI } from '../types/XenonAPI';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching());
    const response = await axios.get<XenonAPI.Product[]>('./data/products.json');
    dispatch(productSlice.actions.setProducts(response.data));
  } catch (e) {
    console.log(e);
  }
};
