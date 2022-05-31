import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { VillagerCard } from "../../components";
import "./styles.css";

import { selectVillagers } from "../../store/villager/selector";
import { fetchVillagers } from "../../store/villager/thunk";

const Villagers = () => {
  const dispatch = useDispatch();
  const villagers = useSelector(selectVillagers);

  useEffect(() => {
    dispatch(fetchVillagers);
  }, [dispatch]);

  return villagers ? (
    <div className="villagerPage">
      <div className="displayVillagers">
        {villagers.map((villager) => {
          return (
            <VillagerCard
              key={villager.id}
              id={villager.id}
              name={villager.name}
              title_color={villager.title_color}
              text_color={villager.text_color}
              image_url={villager.image_url}
              species={villager.species}
              personality={villager.personality}
              gender={villager.gener}
              birthday_month={villager.birthday_month}
              birthday_day={villager.birthday_day}
              sign={villager.sign}
              quote={villager.quote}
              phrase={villager.phrase}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="villagerPage">
      <p> Loading... </p>
    </div>
  );
};

export { Villagers };
