import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { HeroBanner } from "../../components";
import { selectIsland } from "../../store/island/selector";
import { fetchIslands } from "../../store/island/thunk";
import { selectUserIslands } from "../../store/user/selectors";
import { fetchUserIslands } from "../../store/user/actions";

const MyIsland = () => {
  const dispatch = useDispatch();
  const userWithIslands = useSelector(selectUserIslands);

  useEffect(() => {
    dispatch(fetchUserIslands());
  }, [dispatch]);

  return userWithIslands ? (
    <div className="islandPage">
      {userWithIslands.map((user) => {
        return (
          <div>
            <HeroBanner>
              <div
                className="bannerText"
                style={{
                  backgroundColor: `${user.islands.backgroundColor}`,
                  color: `${user.islands.textColor}`,
                }}
              >
                <h1>{user.islands.name}</h1>
                <p>"{user.islands.description}"</p>
              </div>
              <div className="bannerIcons">
                <p></p>
                <p>{user.islands.starterFruit}</p>
                <p>{user.islands.starterFlower}</p>
              </div>
            </HeroBanner>
          </div>
        );
      })}
      <div className="displayAchievements">
        <h3>Achievements</h3>
      </div>
      <div className="displayResidents">
        <h3>Residents</h3>
      </div>
      <div className="displayDreamies">
        <h3>Dreamies</h3>
      </div>
      );
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { MyIsland };
