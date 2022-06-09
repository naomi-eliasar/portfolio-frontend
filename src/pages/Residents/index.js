import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { selectUser, selectUserResidents } from "../../store/user/selectors";
import { fetchResidents } from "../../store/villager/thunk";
import { VillagerCard } from "../../components";
import {
  selectIsland,
  selectIslandResidents,
} from "../../store/island/selector";
import { fetchIslandResidents } from "../../store/island/thunk";

const Residents = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const residents = useSelector(selectUserResidents);
  const residentsIsland = useSelector(selectIslandResidents);
  const islands = useSelector(selectIsland);

  console.log("island residents", residentsIsland);
  console.log("islands id", islands.id);
  console.log("residents", residents);
  console.log("user id", user.id);

  // useEffect(() => {
  //   dispatch(fetchResidents(user.id));
  // }, [dispatch, user.id]);

  useEffect(() => {
    dispatch(fetchIslandResidents(islands.id));
  }, [dispatch, islands.id]);

  return residentsIsland ? (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center">
        {residentsIsland.map((resident) => {
          console.log("resident name", resident.name);
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={resident.id}>
              <VillagerCard
                key={resident.id}
                id={resident.id}
                name={resident.name}
                species={resident.species}
                personality={resident.personality}
                image_url={resident.image_url}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  ) : (
    <p>Loading...</p>
  );
};

export { Residents };
