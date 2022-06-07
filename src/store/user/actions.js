import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import {
  loginSuccess,
  logOut,
  tokenStillValid,
  userIslandsFetched,
} from "./slice";
import { userIslandDeleted, userIslandAdded } from "./slice";

export const addUserIsland =
  ({
    name,
    description,
    starterFruit,
    starterFlower,
    backgroundColor,
    textColor,
  }) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      const userId = getState().user.profile.id;
      console.log("thunk userId", userId);
      dispatch(appLoading());
      const response = await axios.post(
        `http://localhost:4000/islands/`,
        {
          name,
          description,
          starterFruit,
          starterFlower,
          backgroundColor,
          textColor,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("thunk add island", response.data);

      dispatch(showMessageWithTimeout("succes", true, "Island created"));
      dispatch(userIslandAdded(response.data));
      console.log("island added", userIslandAdded(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };

export const deleteMyIsland = (id) => async (dispatch, getState) => {
  try {
    const { token } = getState().user;
    dispatch(appLoading());
    const response = await axios.delete(`http://localhost:4000/islands/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("delete thunk", response.data);

    dispatch(userIslandDeleted({ islandId: id }));

    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
    dispatch(appDoneLoading());
  }
};

export function fetchUserIslands(id) {
  return async function (dispatch) {
    try {
      dispatch(appLoading());
      const response = await axios.get(`http://localhost:4000/user/${id}`);
      console.log("thunk island response", response.data);
      dispatch(userIslandsFetched(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid({ user: response.data }));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};
