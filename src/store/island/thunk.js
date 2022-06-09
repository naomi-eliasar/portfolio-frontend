import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import {
  startLoading,
  islandFetched,
  islandUpdated,
  islandResidentsFetched,
} from "./slice";
import { showMessageWithTimeout } from "../appState/actions";

const API_KEY = process.env.REACT_APP_NOOKIPEDIA_API_KEY;
const API_URL = `https://api.nookipedia.com/villagers?api_key=${API_KEY}&nhdetails=true&game=NH`;

export function fetchIslandResidents() {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      dispatch(startLoading());
      const { token } = getState().user;
      const { islands } = getState().island;

      const responsedb = await axios.get(
        `http://localhost:4000/islands/${islands.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const residents = responsedb.data.favorites;
      console.log("thunk island residents (fav model)", residents);

      const residentsArray = await Promise.all(
        residents.map(async (resident) => {
          const responseapi = await axios.get(
            `${API_URL}&name=${resident.villager}`
          );
          return responseapi.data;
        })
      );
      const relevantData = residentsArray.map((item) => item[0]);
      console.log("thunk island resident data (api)", relevantData);

      dispatch(islandResidentsFetched(relevantData));
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
      dispatch(appDoneLoading());
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
