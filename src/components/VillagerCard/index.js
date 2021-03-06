import "./styles.css";
import { Link } from "react-router-dom";

const VillagerCard = ({
  id,
  name,
  image_url,
  personality,
  species,
  btnDreamie,
  btnResident,
}) => {
  return (
    <div className="villagerCard">
      <div className="villagerCardFavs">
        {btnDreamie}
        {btnResident}
      </div>
      <div className="villagerImageBox">
        <img
          src={image_url}
          alt={name}
          className="villagerImage"
          loading="lazy"
        />
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
