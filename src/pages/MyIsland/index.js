import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectUser, selectUserIslands } from "../../store/user/selectors";
import { fetchUserIslands } from "../../store/user/actions";
import { Grid } from "@mui/material";

const MyIsland = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const userIsland = useSelector(selectUserIslands);

  if (user === null) {
    navigate("/");
  }

  console.log("user id", user.id);
  console.log("user island", userIsland);

  useEffect(() => {
    dispatch(fetchUserIslands(user.id));
  }, [dispatch, user.id]);

  return userIsland ? (
    <div className="islandPage">
      <Grid
        container
        spacing={2}
        alignItems="center"
        pl={18}
        style={{
          backgroundColor: `${userIsland.backgroundColor}`,
          color: `${userIsland.textColor}`,
          minHeight: "200px",
        }}
      >
        <Grid item xs={8}>
          <h1>{userIsland.name}</h1>
          <h5>"{userIsland.description}"</h5>
        </Grid>
        <Grid item xs={2}>
          <p>Starter fruit:</p>
          <p>{userIsland.starterFruit}</p>
        </Grid>
        <Grid item xs={2}>
          <p>Starter flower:</p>
          <p>{userIsland.starterFlower}</p>
        </Grid>
      </Grid>
      <div className="displayAchievements">
        <h3>Achievements</h3>
      </div>
      <div className="displayResidents">
        <h3>Residents</h3>
      </div>
      <div className="displayDreamies">
        <h3>Dreamies</h3>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { MyIsland };
