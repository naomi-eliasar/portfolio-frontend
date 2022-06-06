import "./styles.css";
import { Link } from "react-router-dom";
import { FaHeart, FaHouseUser } from "react-icons/fa";
import { Button } from "react-bootstrap";

const VillagerCard = ({ id, name, image_url, personality, species }) => {
  return (
    <div className="villagerCard">
      <div className="villagerCardFavs">
        <Button variant="contained">
          <FaHeart />
        </Button>
        <Button variant="contained">
          <FaHouseUser />
        </Button>
      </div>
      <div className="villagerImageBox">
        <img src={image_url} alt={name} className="villagerImage" />
      </div>
      <div className="villagerCardInfo">
        <h2>
          <Link to={`/details/${name}`} style={{ color: "white" }}>
            {name}
          </Link>
        </h2>
        <div className="villagerSpecs">
          <p>{personality}</p>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export { VillagerCard };
