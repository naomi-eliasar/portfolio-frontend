import "./styles.css";
import { Link } from "react-router-dom";

const VillagerCard = ({ id, name, image_url, personality, species }) => {
  return (
    <div key={id} className="villagerCard">
      <div className="villagerImageBox">
        <img src={image_url} alt={name} className="villagerImage" />
      </div>
      <div className="villagerCardInfo">
        <h2>
          <Link to={`/details/${id}`} style={{ color: "white" }}>
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
