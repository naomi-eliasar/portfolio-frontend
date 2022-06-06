import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { selectUser, selectUserIslands } from "../../store/user/selectors";
import { fetchUserIslands } from "../../store/user/actions";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";
import { HeroBanner } from "../../components";
import { IslandCard } from "../../components/IslandCard";

const MyIslands = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userIsland = useSelector(selectUserIslands);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("my islands", userIsland);

  useEffect(() => {
    dispatch(fetchUserIslands(user.id));
  }, [dispatch, user.id]);

  return userIsland ? (
    <div>
      <HeroBanner>
        <h1>Welcome {user.name}!</h1>
      </HeroBanner>

      <div className="addButton">
        <Button
          onClick={handleOpen}
          variant="contained"
          style={{ backgroundColor: "#009a7e" }}
        >
          Add Island
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Test
            </Typography>
          </Box>
        </Modal>
      </div>

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
