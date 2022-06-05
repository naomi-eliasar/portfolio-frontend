import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { HeroBanner } from "../../components";
import { selectIsland } from "../../store/island/selector";
import { selectUser } from "../../store/user/selectors";
import { fetchIslands } from "../../store/island/thunk";
import { useNavigate } from "react-router-dom";

const MyIsland = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const islands = useSelector(selectIsland);
  const user = useSelector(selectUser);

  console.log("user id", user.id);
  console.log("island", islands);

  if (user === null) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(fetchIslands(user.id));
  }, [dispatch, user.id]);

  return islands ? (
    <div className="islandPage">
      <HeroBanner>
        <h1>{islands.name}</h1>
        <h5>"{islands.description}"</h5>
        {islands.starterFruit}
        {islands.starterFlower}
      </HeroBanner>
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
