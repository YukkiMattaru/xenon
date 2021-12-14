import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { XenonAPI } from '../../types/XenonAPI';

interface CartItemState {
  cartItem: XenonAPI.CartItem[];
  isLoading: boolean;
}

const initialState: CartItemState = {
  cartItem: [],
  isLoading: false,
};

export enum ChangeCartItemCountActionType {
  increment,
  decrement,
}

interface ChangeCartItemCountAction {
  productId: string;
  actionType: ChangeCartItemCountActionType;
}

type AddProductToCartItemType = Omit<XenonAPI.CartItem, 'id' | 'amount'>;

const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    cartItemFetching(state) {
      state.isLoading = true;
    },
    setCartItem(state, action: PayloadAction<XenonAPI.CartItem[]>) {
      state.cartItem = action.payload;
      state.isLoading = false;
    },
    addProductToCartItem(state, action: PayloadAction<AddProductToCartItemType>) {
      const newCartItem: XenonAPI.CartItem = {
        id: uuidv4(),
        productId: action.payload.productId,
        amount: 1,
        userId: action.payload.userId,
      };
      state.cartItem.push(newCartItem);
    },
    deleteFromCartItem(state, action: PayloadAction<string>) {
      state.cartItem.filter((item) => item.productId !== action.payload);
    },
    changeCartItemCount(state, action: PayloadAction<ChangeCartItemCountAction>) {
      state.cartItem.forEach((item) => {
        if (item.productId === action.payload.productId) {
          if (action.payload.actionType === ChangeCartItemCountActionType.increment) {
            item.amount += 1;
          } else {
            item.amount -= 1;
          }
        }
      });
    },
  },
});

export default cartItemSlice.reducer;
