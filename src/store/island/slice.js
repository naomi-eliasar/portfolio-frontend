import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  islands: [],
  islandResidents: [],
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
    islandResidentsFetched: (state, action) => {
      state.islandResidents = action.payload;
    },
  },
});

export const {
  startLoading,
  islandFetched,
  islandUpdated,
  islandResidentsFetched,
} = islandSlice.actions;

export default islandSlice.reducer;
