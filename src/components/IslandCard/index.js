import "./styles.css";
import { Link } from "react-router-dom";

const IslandCard = ({ id, name, description, btn }) => {
  return (
    <div className="islandCard" key={id}>
      <div className="islandCardInfo">
        <h2>
          <Link to={`/myislands/${id}`} style={{ color: "white" }}>
            {name}
          </Link>
          <p>{description}</p>
        </h2>
        {btn}
      </div>
    </div>
  );
};

export { IslandCard };
