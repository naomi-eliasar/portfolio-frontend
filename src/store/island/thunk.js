import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import {
  startLoading,
  islandFetched,
  islandUpdated,
  islandAdded,
} from "./slice";
import { showMessageWithTimeout } from "../appState/actions";

// export const addIsland =
//   ({
//     name,
//     description,
//     starterFruit,
//     starterFlower,
//     backgroundColor,
//     textColor,
//   }) =>
//   async (dispatch, getState) => {
//     try {
//       const { token } = getState().user;
//       const userId = getState().user.profile.id;
//       console.log("thunk userId", userId);
//       dispatch(appLoading());
//       const response = await axios.post(
//         `http://localhost:4000/islands/`,
//         {
//           name,
//           description,
//           starterFruit,
//           starterFlower,
//           backgroundColor,
//           textColor,
//           userId,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("thunk add island", response.data);

//       dispatch(showMessageWithTimeout("succes", true, "Island created"));
//       dispatch(islandAdded(response.data));
//       console.log("island added", islandAdded(response.data));
//       dispatch(appDoneLoading());
//     } catch (e) {
//       console.log(e.message);
//       dispatch(appDoneLoading());
//     }
//   };

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
