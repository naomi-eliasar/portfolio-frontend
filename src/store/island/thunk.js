import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { startLoading, islandFetched } from "./slice";

export function fetchIsland(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      dispatch(startLoading());
      const response = await axios.get(`http://localhost:4000/islands/${id}`);
      console.log("thunk island response", response.data);
      dispatch(islandFetched(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}
