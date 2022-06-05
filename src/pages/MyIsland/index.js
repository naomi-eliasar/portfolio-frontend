import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { selectIsland } from "../../store/island/selector";
import { fetchIsland } from "../../store/island/thunk";
import { Grid } from "@mui/material";

const MyIsland = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeParams = useParams();
  const user = useSelector(selectUser);
  const islandDetails = useSelector(selectIsland);

  if (user === null) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(fetchIsland(routeParams.id));
  }, [dispatch, routeParams.id]);

  return islandDetails ? (
    <div className="islandPage">
      <Grid
        container
        spacing={2}
        alignItems="center"
        pl={18}
        style={{
          backgroundColor: `${islandDetails.backgroundColor}`,
          color: `${islandDetails.textColor}`,
          minHeight: "200px",
        }}
      >
        <Grid item xs={8}>
          <h1>{islandDetails.name}</h1>
          <h5>"{islandDetails.description}"</h5>
        </Grid>
        <Grid item xs={2}>
          <p>Starter fruit:</p>
          <p>{islandDetails.starterFruit}</p>
        </Grid>
        <Grid item xs={2}>
          <p>Starter flower:</p>
          <p>{islandDetails.starterFlower}</p>
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
