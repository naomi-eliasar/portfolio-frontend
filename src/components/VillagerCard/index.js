import "./styles.css";
import { Link } from "react-router-dom";

const VillagerCard = ({ id, name, image_url, personality, species }) => {
  return (
    <div key={id} className="villagerCard">
      <div>
        <img src={image_url} alt={name} className="villagerImage" />
      </div>
      <div className="villagerCardInfo">
        <h2>
          <Link to={`/details/${id}`}>{name}</Link>
        </h2>
        <p>{personality}</p>
        <p>{species}</p>
      </div>
    </div>
  );
};

export { VillagerCard };
