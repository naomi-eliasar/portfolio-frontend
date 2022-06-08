import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  userIslands: [],
  userDreamies: [],
  userResidents: null,
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
    userIslandDeleted: (state, action) => {
      const islandId = action.payload.islandId;
      state.userIslands.islands = state.userIslands.islands.filter(
        (island) => island.id !== islandId
      );
    },
    userIslandAdded: (state, action) => {
      state.userIslands.islands = [
        ...state.userIslands.islands,
        action.payload,
      ];
      state.loading = false;
    },
    userDreamiesFetched: (state, action) => {
      state.userDreamies = action.payload;
    },
    userResidentsFetched: (state, action) => {
      state.userResidents = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  userIslandsFetched,
  userIslandDeleted,
  userIslandAdded,
  userDreamiesFetched,
  userResidentsFetched,
} = userSlice.actions;

export default userSlice.reducer;
