import "./styles.css";

const VillagerHouse = ({ id, houseExteriorUrl, houseInteriorUrl, name }) => {
  return (
    <div key={id} className="villagerHouseCard">
      <div className="villagerHouseImageBox">
        <img src={houseExteriorUrl} alt={name} className="houseImage" />
      </div>
      <div className="villagerHouseImageBox">
        <img src={houseInteriorUrl} alt={name} className="houseImage" />
      </div>
    </div>
  );
};

export { VillagerHouse };
