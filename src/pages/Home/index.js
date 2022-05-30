import { HeroBanner } from "../../components";
import background from "../../images/background.jpg";
import leaf from "../../images/leaf.jpg";
import "./styles.css";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HeroBanner>
        <h1>Home</h1>
      </HeroBanner>
      <div>
        <p>Text and such</p>
      </div>
    </div>
  );
};

export { Home };
