import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Searchbar, VillagerCard } from "../../components";
import "./styles.css";
import { useState } from "react";

import { selectVillagers } from "../../store/villager/selector";
import { fetchVillagers } from "../../store/villager/thunk";

const Villagers = () => {
  const dispatch = useDispatch();
  const villagers = useSelector(selectVillagers);
  const [filter, setFilter] = useState("");

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchVillagers);
  }, [dispatch]);

  return villagers ? (
    <div className="villagerPage">
      <div className="searchbar">
        <Searchbar value={filter} onChange={updateFilter} />
      </div>
      <div className="displayVillagers">
        {villagers
          .filter((villager) =>
            villager.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((villager) => {
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
    </div>
  ) : (
    <p> Loading... </p>
  );
};

export { Villagers };
