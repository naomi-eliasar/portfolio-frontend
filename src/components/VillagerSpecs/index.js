import "./styles.css";

const VillagerSpecs = ({
  id,
  personality,
  species,
  birthday_day,
  birthday_month,
  color,
  style,
  catchphrase,
  sign,
}) => {
  return (
    <div key={id} className="villagerSpecsCard">
      <div className="specsBox">
        <h4>Specs</h4>
        <div className="line">
          <p>Personality:</p>
          <p>{personality}</p>
        </div>
        <div className="line">
          <p>Species:</p>
          <p>{species}</p>
        </div>
        <div className="line">
          <p>Birthday:</p>
          <p>
            {birthday_month} {birthday_day}
          </p>
        </div>
        <div className="line">
          <p>Sign:</p>
          <p>{sign}</p>
        </div>
      </div>
      <div className="specsBox">
        <h4>Favorites</h4>
        <div className="line">
          <p>Catchphrase:</p>
          <p>"{catchphrase}"</p>
        </div>
        <div className="line">
          <p>Colors:</p>
          <p>{color}</p>
        </div>
        <div className="line">
          <p>Styles:</p>
          <p>{style}</p>
        </div>
      </div>
    </div>
  );
};

export { VillagerSpecs };
