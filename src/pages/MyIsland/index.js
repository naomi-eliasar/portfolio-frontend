import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { HeroBanner } from "../../components";
import { selectIsland } from "../../store/island/selector";
import { selectUser } from "../../store/user/selectors";
import { fetchIslands } from "../../store/island/thunk";

const MyIsland = () => {
  const dispatch = useDispatch();
  const island = useSelector(selectIsland);
  const user = useSelector(selectUser);

  console.log("user id", user.id);
  console.log("island", island);

  useEffect(() => {
    dispatch(fetchIslands(island));
  }, [dispatch, island]);

  return island ? (
    <div className="islandPage">
      <HeroBanner>
        <h1>{island.name}</h1>
        <h5>"{island.description}"</h5>
        {island.starterFruit}
        {island.starterFlower}
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
