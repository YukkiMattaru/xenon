import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XenonAPI } from '../../types/XenonAPI';

interface SearchState {
  products: XenonAPI.Product[];
  isLoading: boolean;
}

const initialState: SearchState = {
  products: [],
  isLoading: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    setProducts(state, action: PayloadAction<XenonAPI.Product[]>) {
      state.isLoading = false;
      state.products = action.payload;
    },
  },
});

export default productSlice.reducer;
