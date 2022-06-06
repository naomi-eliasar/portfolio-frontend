import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { startLoading, islandFetched, islandUpdated } from "./slice";
import { showMessageWithTimeout } from "../appState/actions";

export const updateMyIsland = (
  name,
  description,
  starterFruit,
  starterFlower,
  backgroundColor,
  textColor
) => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      const { islands } = getState().island;
      console.log("thunk id", islands);
      dispatch(appLoading());
      const response = await axios.patch(
        `http://localhost:4000/islands/${islands.id}`,
        {
          name,
          description,
          starterFruit,
          starterFlower,
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
      console.log("island updated", response.data);
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

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
