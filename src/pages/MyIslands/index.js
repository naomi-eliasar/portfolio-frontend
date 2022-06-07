import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { selectUser, selectUserIslands } from "../../store/user/selectors";
import { fetchUserIslands } from "../../store/user/actions";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";
import { HeroBanner } from "../../components";
import { IslandCard } from "../../components/IslandCard";
import { AddIslandForm } from "./addIslandForm";
import { deleteMyIsland } from "../../store/user/actions";

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

  const onDeleteClick = (id) => {
    console.log("delete clicked?", id);
    dispatch(deleteMyIsland(id));
  };

  return userIsland ? (
    <div className="myIslandsPage">
      <HeroBanner>
        <Grid
          container
          spacing={2}
          alignItems="center"
          pl={18}
          style={{ minHeight: "200px" }}
          key={userIsland.id}
        >
          <Grid item xs={8}>
            <h1>Welcome {user.name}!</h1>
          </Grid>
          <Grid item xs={2}>
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
                  <AddIslandForm handleClose={handleClose} />
                </Typography>
              </Box>
            </Modal>
          </Grid>
        </Grid>
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
                  btn={
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#009a7e" }}
                      onClick={() => onDeleteClick(island.id)}
                    >
                      Delete Island
                    </Button>
                  }
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
