import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { selectIsland } from "../../store/island/selector";
import { fetchIsland } from "../../store/island/thunk";
import { Grid, Modal, Button, Typography, Box } from "@mui/material";
import { EditIslandForm } from "./editIslandForm";

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

  console.log("my island", islandDetails);

  return islandDetails ? (
    <div className="islandPage">
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
        <Grid item xs={8}>
          <h1>{islandDetails.name}</h1>
          <h5>"{islandDetails.description}"</h5>
        </Grid>
        <Grid item xs={2}>
          <img
            src={islandDetails.starterFruit}
            alt="Starter Fruit"
            width="100px"
          />
          <img
            src={islandDetails.starterFlower}
            alt="Starter Flower"
            width="100px"
          />
        </Grid>
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

      <div className="displayAchievements">
        <h3>Achievements</h3>
      </div>
      <div className="displayResidents">
        <h3>Residents</h3>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { MyIsland };
