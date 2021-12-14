import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { XenonAPI } from '../../types/XenonAPI';

interface SearchState {
  products: XenonAPI.Product[];
  isLoading: boolean;
}

const initialState: SearchState = {
  products: [],
  isLoading: false,
};

type AddProductPayloadAction = Omit<XenonAPI.Product, 'id' | 'oldPrice'>;
type EditProductPayloadAction = Partial<
  Omit<XenonAPI.Product, 'id' | 'rating' | 'shopId' | 'oldPrice'>
> &
  Pick<XenonAPI.Product, 'id'>;

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
    addProduct(state, action: PayloadAction<AddProductPayloadAction>) {
      const newProduct: XenonAPI.Product = {
        id: v4(),
        oldPrice: -1,
        ...action.payload,
      };
      state.products.push(newProduct);
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products.filter((product) => product.id !== action.payload);
    },
    editProduct(state, action: PayloadAction<EditProductPayloadAction>) {
      state.products.forEach((product) => {
        if (product.id === action.payload.id) {
          const oldPrice = action.payload.price && product.price === action.payload.price
            ? product.oldPrice
            : product.price;
          product = {
            ...product,
            oldPrice,
            ...action.payload,
          };
        }
      });
    },
  },
});

export default productSlice.reducer;
