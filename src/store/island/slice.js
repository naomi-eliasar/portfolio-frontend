import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  islands: [],
};

export const islandSlice = createSlice({
  name: "island",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    islandsFetched: (state, action) => {
      state.islands = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, islandsFetched } = islandSlice.actions;

export default islandSlice.reducer;
