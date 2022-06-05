import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  userIslands: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    userIslandsFetched: (state, action) => {
      state.userIslands = action.payload;
    },
    islandUpdated: (state, action) => {
      state.userIslands = { ...action.payload, islands: state.userIslands };
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  userIslandsFetched,
  islandUpdated,
} = userSlice.actions;

export default userSlice.reducer;
