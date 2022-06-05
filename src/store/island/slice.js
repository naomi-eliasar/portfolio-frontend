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
    islandUpdated: (state, action) => {
      state.islands = { ...action.payload, islands: state.islands };
    },
  },
});

export const { startLoading, islandsFetched, islandUpdated } =
  islandSlice.actions;

export default islandSlice.reducer;
