import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, Suspense } from "react";
import { Searchbar, VillagerCard } from "../../components";
import "./styles.css";
import { useState } from "react";
import { Box, Grid } from "@mui/material";

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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {villagers
              .filter((villager) =>
                villager.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((villager) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    key={villager.id}
                  >
                    <VillagerCard
                      id={villager.id}
                      name={villager.name}
                      image_url={villager.image_url}
                      species={villager.species}
                      personality={villager.personality}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
        );
      </div>
    </div>
  ) : (
    <p> Loading... </p>
  );
};

export { Villagers };
