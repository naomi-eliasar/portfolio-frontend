import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { selectUser, selectUserDreamies } from "../../store/user/selectors";
import { fetchDreamies } from "../../store/villager/thunk";
import { VillagerCard } from "../../components";

const Dreamies = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const dreamies = useSelector(selectUserDreamies);

  console.log("dreamies", dreamies);

  useEffect(() => {
    dispatch(fetchDreamies(user.id));
  }, [dispatch, user.id]);

  return dreamies ? (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center">
        {dreamies.map((dreamie) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={dreamie.id}>
              <VillagerCard
                key={dreamie.id}
                id={dreamie.id}
                name={dreamie.name}
                species={dreamie.species}
                personality={dreamie.personality}
                image_url={dreamie.image_url}
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

export { Dreamies };
