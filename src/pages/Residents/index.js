import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { selectUser, selectUserResidents } from "../../store/user/selectors";
import { fetchResidents } from "../../store/villager/thunk";
import { VillagerCard } from "../../components";
import { selectIsland } from "../../store/island/selector";

const Residents = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const residents = useSelector(selectUserResidents);
  const islands = useSelector(selectIsland);

  console.log("user", user);
  console.log("user id", user.id);
  console.log("residents", residents);
  console.log("islands", islands);

  useEffect(() => {
    dispatch(fetchResidents(user.id));
  }, [dispatch, user.id]);

  return residents ? (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center">
        {residents.map((resident) => {
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
