import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { XenonAPI } from '../../types/XenonAPI';

interface CartItemState {
  cartItems: XenonAPI.CartItem[];
  isLoading: boolean;
}

const initialState: CartItemState = {
  cartItems: [],
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

export const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    cartItemFetching(state) {
      state.isLoading = true;
    },
    setCartItem(state, action: PayloadAction<XenonAPI.CartItem[]>) {
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    addProductToCartItem(state, action: PayloadAction<AddProductToCartItemType>) {
      const newCartItem: XenonAPI.CartItem = {
        id: uuidv4(),
        productId: action.payload.productId,
        amount: 1,
        userId: action.payload.userId,
      };
      state.cartItems.push(newCartItem);
    },
    deleteFromCartItem(state, action: PayloadAction<string>) {
      state.cartItems.filter((item) => item.productId !== action.payload);
    },
    changeCartItemCount(state, action: PayloadAction<ChangeCartItemCountAction>) {
      let deleteItem = false;
      state.cartItems.forEach((item) => {
        if (item.productId === action.payload.productId) {
          if (action.payload.actionType === ChangeCartItemCountActionType.increment) {
            item.amount += 1;
          } else {
            const newAmount = item.amount - 1;
            if (newAmount <= 0) {
              deleteItem = true;
            } else {
              item.amount = newAmount;
            }
          }
        }
      });
      if (deleteItem) {
        state.cartItems = state.cartItems.filter((item) => item.productId !== action.payload.productId);
      }
    },
  },
});

export default cartItemSlice.reducer;
