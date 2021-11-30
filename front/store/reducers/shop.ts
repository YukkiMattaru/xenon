import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XenonAPI } from '../../types/XenonAPI';

interface ShopState {
  shops: XenonAPI.Shop[];
  isLoading: boolean;
}

const initialState: ShopState = {
  shops: [],
  isLoading: false,
};

type EditShopPayloadAction = Omit<XenonAPI.Shop, 'userId'>;

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    shopsFetching(state) {
      state.isLoading = true;
    },
    setShops(state, action: PayloadAction<XenonAPI.Shop[]>) {
      state.isLoading = false;
      state.shops = action.payload;
    },
    editShop(state, action: PayloadAction<EditShopPayloadAction>) {
      state.shops.forEach((shop) => {
        if (shop.id === action.payload.id) {
          shop = { ...shop, ...action.payload };
        }
      });
    },
  },
});

export default shopSlice.reducer;
