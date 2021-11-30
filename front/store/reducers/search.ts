import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchString: string;
}

const initialState: SearchState = {
  searchString: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
  },
});

export default searchSlice.reducer;
