import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectVillagerDetails } from "../../store/villager/selector";
import { fetchVillagerDetails } from "../../store/villager/thunk";
import { HeroBanner, VillagerCard, VillagerSpecs } from "../../components";
import { VillagerHouse } from "../../components/VillagerHouse";
import { Box, Grid, Button } from "@mui/material";
import { FaHeart, FaHouseUser } from "react-icons/fa";
import { addUserDreamie } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectVillagerDetails);
  const routeParams = useParams();
  const user = useSelector(selectUser);

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

  useEffect(() => {
    dispatch(fetchVillagerDetails(routeParams.id));
  }, [dispatch, routeParams.id]);

  return details ? (
    <div>
      {details.map((detail) => {
        return (
          <div key={detail.id}>
            <HeroBanner>
              <h1>{detail.name}</h1>
              <h5>"{detail.quote}"</h5>
            </HeroBanner>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <VillagerCard
                    key={detail.id}
                    id={detail.id}
                    name={detail.name}
                    image_url={detail.image_url}
                    personality={detail.personality}
                    species={detail.species}
                    btnDreamie={
                      <Button
                        variant="text"
                        style={{ color: "#009a7e" }}
                        onClick={() => onFavoriteClick(detail.name)}
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
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <VillagerHouse
                    key={detail.id}
                    id={detail.id}
                    name={detail.name}
                    houseExteriorUrl={detail.nh_details.house_exterior_url}
                    houseInteriorUrl={detail.nh_details.house_interior_url}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <VillagerSpecs
                    key={detail.id}
                    id={detail.id}
                    personality={detail.personality}
                    species={detail.species}
                    birthday_day={detail.birthday_day}
                    birthday_month={detail.birthday_month}
                    color={detail.nh_details.fav_colors}
                    style={detail.nh_details.fav_styles}
                    catchphrase={detail.nh_details.catchphrase}
                    sign={detail.sign}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { Details };
