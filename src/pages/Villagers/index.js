import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
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
    <div className="displayVillagers">
      {villagers.map((villager) => {
        return (
          <VillagerCard
            key={villager.id}
            id={villager.id}
            name={villager.name}
            image_url={villager.image_url}
            species={villager.species}
            personality={villager.personality}
          />
        );
      })}
    </div>
  ) : (
    <p> Loading... </p>
  );
};

export { Villagers };
