import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { selectUser, selectUserIslands } from "../../store/user/selectors";
import { fetchUserIslands } from "../../store/user/actions";
import { Grid, Box } from "@mui/material";
import { HeroBanner } from "../../components";
import { IslandCard } from "../../components/IslandCard";

const MyIslands = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userIsland = useSelector(selectUserIslands);

  console.log("user islands", userIsland);

  useEffect(() => {
    dispatch(fetchUserIslands(user.id));
  }, [dispatch, user.id]);

  return userIsland ? (
    <div>
      <HeroBanner>
        <h1>Welcome {user.name}!</h1>
      </HeroBanner>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          {userIsland.map((island) => {
            return (
              <Grid item xs={12} sm={6} lg={4}>
                <IslandCard
                  key={island.id}
                  id={island.id}
                  name={island.name}
                  description={island.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { MyIslands };
