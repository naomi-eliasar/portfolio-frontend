import axios from "axios";
import {
  startLoading,
  villagerDetailsFetched,
  villagersFetched,
} from "./slice";

const API_KEY = process.env.REACT_APP_NOOKIPEDIA_API_KEY;
const API_URL = `https://api.nookipedia.com/villagers?api_key=${API_KEY}&nhdetails=true&game=NH`;

export async function fetchVillagers(dispatch, getState) {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}`);
    console.log("thunk response", response.data);
    dispatch(villagersFetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
}

export function fetchVillagerDetails(name) {
  return async function (dispatch, getState) {
    try {
      dispatch(startLoading());
      const response = await axios.get(`${API_URL}&name=${name}`);
      const details = response.data;
      console.log("thunk details response", details);
      dispatch(villagerDetailsFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
