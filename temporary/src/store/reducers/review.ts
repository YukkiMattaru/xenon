import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XenonAPI } from '../../types/XenonAPI';

interface ReviewState {
  reviews: XenonAPI.Review[];
  isLoading: boolean;
}

const initialState: ReviewState = {
  reviews: [],
  isLoading: false,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    reviewsFetching(state) {
      state.isLoading = true;
    },
    setReviews(state, action: PayloadAction<XenonAPI.Review[]>) {
      state.reviews = action.payload;
      state.isLoading = false;
    },
    addReview(state, action: PayloadAction<XenonAPI.Review>) {
      state.reviews.push(action.payload);
    },
  },
});

export default reviewSlice.reducer;
