import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Searchbar, VillagerCard } from "../../components";
import "./styles.css";
import { Box, Grid, Button } from "@mui/material";
import { FaHeart, FaHouseUser } from "react-icons/fa";

import { selectVillagers } from "../../store/villager/selector";
import {
  fetchVillagerDetails,
  fetchVillagers,
} from "../../store/villager/thunk";
import { selectUser } from "../../store/user/selectors";
import { addUserDreamie } from "../../store/user/actions";

const Villagers = () => {
  const dispatch = useDispatch();
  const villagers = useSelector(selectVillagers);
  const user = useSelector(selectUser);

  const [filter, setFilter] = useState("");
  const [resident, setResident] = useState(false);

  const onFavoriteClick = (name) => {
    console.log("favorite clicked?", name);

    const newDreamie = {
      userId: user.id,
      islandId: null,
      villager: name,
      dreamie: true,
      resident,
    };
    console.log("new dreamie", newDreamie);
    dispatch(addUserDreamie(newDreamie));

    dispatch(fetchVillagerDetails);

    setResident(false);
  };

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
                      btnDreamie={
                        <Button
                          variant="text"
                          style={{ color: "#009a7e" }}
                          onClick={() => onFavoriteClick(villager.name)}
                        >
                          <FaHeart />
                        </Button>
                      }
                      btnResident={
                        <Button variant="text" style={{ color: "#009a7e" }}>
                          <FaHouseUser />
                        </Button>
                      }
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
