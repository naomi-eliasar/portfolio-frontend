import axios from "axios";
import {
  startLoading,
  villagerDetailsFetched,
  villagersFetched,
  villagerSpeciesFetched,
} from "./slice";
import { appLoading, appDoneLoading } from "../appState/slice";
import { userDreamiesFetched, userResidentsFetched } from "../user/slice";

const API_KEY = process.env.REACT_APP_NOOKIPEDIA_API_KEY;
const API_URL = `https://api.nookipedia.com/villagers?api_key=${API_KEY}&nhdetails=true&game=NH`;

export async function fetchVillagers(dispatch, getState) {
  try {
    dispatch(appLoading());
    dispatch(startLoading());
    const offset = getState().villager.villagers.length;
    console.log("offset", offset);

    const response = await axios.get(`${API_URL}&offset=${offset}&limit=5`);
    console.log("thunk villagers response", response.data);
    dispatch(villagersFetched(response.data));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
    dispatch(appDoneLoading());
  }
}

export function fetchVillagerDetails(name) {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      dispatch(startLoading());
      const response = await axios.get(`${API_URL}&name=${name}`);
      const details = response.data;
      console.log("thunk details response", details);
      dispatch(villagerDetailsFetched(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}

export function fetchDreamies() {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      dispatch(startLoading());
      const { token } = getState().user;
      const responsedb = await axios.get(
        `http://localhost:4000/villagers/dreamies`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dreamies = responsedb.data;

      const dreamiesArray = await Promise.all(
        dreamies.map(async (dreamie) => {
          const responseapi = await axios.get(
            `${API_URL}&name=${dreamie.villager}`
          );
          return responseapi.data;
        })
      );

      const relevantData = dreamiesArray.map((item) => item[0]);
      console.log("thunk dreamies villager data", relevantData);

      dispatch(userDreamiesFetched(relevantData));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}

export function fetchResidents() {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      dispatch(startLoading());
      const { token } = getState().user;

      const responsedb = await axios.get(
        `http://localhost:4000/villagers/residents`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const residents = responsedb.data;

      const residentsArray = await Promise.all(
        residents.map(async (resident) => {
          const responseapi = await axios.get(
            `${API_URL}&name=${resident.villager}`
          );
          return responseapi.data;
        })
      );
      const relevantData = residentsArray.map((item) => item[0]);
      console.log("thunk resident villager data", relevantData);

      dispatch(userResidentsFetched(relevantData));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}

export function fetchVillagerSpecies(species) {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      dispatch(startLoading());
      const response = await axios.get(`${API_URL}&species=${species}`);
      const details = response.data;
      console.log("thunk species response", details);
      dispatch(villagerSpeciesFetched(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}
