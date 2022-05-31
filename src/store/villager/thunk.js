import axios from "axios";
import { villagersFetched } from "./slice";

const API_KEY = process.env.REACT_APP_NOOKIPEDIA_API_KEY;
const API_URL = `https://api.nookipedia.com/villagers?api_key=${API_KEY}`;

export async function fetchVillagers(dispatch, getState) {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log("thunk response", response.data);
    dispatch(villagersFetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
}
