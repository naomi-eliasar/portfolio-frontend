import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { startLoading, islandFetched, islandUpdated } from "./slice";
import { showMessageWithTimeout } from "../appState/actions";

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

export const updateMyIsland = (
  name,
  description,
  starterFlower,
  starterFruit,
  backgroundColor,
  textColor
) => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      const { id } = getState().island.islands;
      dispatch(appLoading());
      const response = await axios.patch(
        `http://localhost:4000/islands/${id}`,
        {
          name,
          description,
          starterFlower,
          starterFruit,
          backgroundColor,
          textColor,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("update island", response.data);
      dispatch(
        showMessageWithTimeout("succes", false, "update successfull", 3000)
      );
      dispatch(islandUpdated(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};
