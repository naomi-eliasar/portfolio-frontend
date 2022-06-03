import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import villagerReducer from "./villager/slice";
import islandReducer from "./island/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    villager: villagerReducer,
    island: islandReducer,
  },
});
