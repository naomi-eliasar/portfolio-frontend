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
    islandFetched: (state, action) => {
      state.islands = action.payload;
      state.loading = false;
    },
    islandUpdated: (state, action) => {
      state.islands = {
        ...action.payload,
        islands: state.islands,
      };
      state.loading = false;
    },
  },
});

export const { startLoading, islandFetched, islandUpdated } =
  islandSlice.actions;

export default islandSlice.reducer;
