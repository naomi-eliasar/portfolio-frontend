import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Modal, Button, Typography, Box, Divider } from "@mui/material";

import { selectUser } from "../../store/user/selectors";
import { selectIsland } from "../../store/island/selector";
import { fetchIsland } from "../../store/island/thunk";
import { EditIslandForm } from "./editIslandForm";
import { Residents } from "../Residents";

const MyIsland = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeParams = useParams();
  const user = useSelector(selectUser);
  const islandDetails = useSelector(selectIsland);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (user === null) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(fetchIsland(routeParams.id));
  }, [dispatch, routeParams.id]);

  console.log("my island page", islandDetails);

  return islandDetails ? (
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        pl={18}
        style={{
          backgroundColor: `${islandDetails.backgroundColor}`,
          color: `${islandDetails.textColor}`,
          minHeight: "200px",
        }}
      >
        <Grid item xs={7}>
          <h1>{islandDetails.name}</h1>
          <h5>"{islandDetails.description}"</h5>
        </Grid>

        <Grid item xs={1}>
          <img
            src={islandDetails.starterFruit}
            alt="Starter Fruit"
            width="100px"
          />
        </Grid>
        <Grid item xs={1}>
          <img
            src={islandDetails.starterFlower}
            alt="Starter Flower"
            width="100px"
          />
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={2}>
          <Button
            onClick={handleOpen}
            variant="contained"
            style={{ backgroundColor: "#009a7e" }}
          >
            Edit Island
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
          >
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <EditIslandForm handleClose={handleClose} />
              </Typography>
            </Box>
          </Modal>
        </Grid>
      </Grid>

      <Divider />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          style={{
            backgroundColor: `${islandDetails.backgroundColor}`,
            color: `${islandDetails.textColor}`,
          }}
          pl={2}
          pt={1}
          minHeight="30px"
        >
          <Grid item xs={12}>
            <h1>Achievements</h1>
          </Grid>
        </Grid>
      </Box>

      <div>
        <p></p>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          style={{
            backgroundColor: `${islandDetails.backgroundColor}`,
            color: `${islandDetails.textColor}`,
          }}
          pl={2}
          pt={1}
          minHeight="30px"
        >
          <Grid item xs={12}>
            <h1>Residents</h1>
          </Grid>
        </Grid>
      </Box>
      <Residents />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { MyIsland };
