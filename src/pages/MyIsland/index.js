import { HeroBanner } from "../../components";
import "./styles.css";

const MyIsland = () => {
  return (
    <div className="islandPage">
      <HeroBanner>
        <div className="bannerText">
          <h1>My Island</h1>
          <p>"Description"</p>
        </div>
        <div className="bannerIcons">
          <p></p>
          <p>Cherry</p>
          <p>Lily</p>
        </div>
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
  );
};

export { MyIsland };
