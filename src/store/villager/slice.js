import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  villagers: [],
  villagerDetails: null,
};

export const villagersSlice = createSlice({
  name: "villager",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    villagersFetched: (state, action) => {
      state.villagers = action.payload;
      state.loading = false;
    },
    villagerDetailsFetched: (state, action) => {
      state.villagerDetails = action.payload;
      state.loading = false;
    },
    villagerSpeciesFetched: (state, action) => {
      state.villagers.species = action.payload;
      state.loading = false;
    },
  },
});

export const {
  startLoading,
  villagersFetched,
  villagerDetailsFetched,
  villagerSpeciesFetched,
} = villagersSlice.actions;

export default villagersSlice.reducer;
