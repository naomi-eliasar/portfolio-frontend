import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { startLoading, islandsFetched } from "./slice";

export function fetchIslands(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      dispatch(startLoading());
      const response = await axios.get(`http://localhost:4000/islands/${id}`);
      console.log("thunk island response", response.data);
      dispatch(islandsFetched(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}
