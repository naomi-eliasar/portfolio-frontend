import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectVillagerDetails } from "../../store/villager/selector";
import { fetchVillagerDetails } from "../../store/villager/thunk";
import { HeroBanner, VillagerCard, VillagerSpecs } from "../../components";
import { VillagerHouse } from "../../components/VillagerHouse";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Details = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const details = useSelector(selectVillagerDetails);

  useEffect(() => {
    dispatch(fetchVillagerDetails(routeParams.id));
  }, [dispatch, routeParams.id]);

  console.log("route param:", routeParams.id);

  return details ? (
    <div>
      {details.map((detail) => {
        console.log(`detail name: ${detail.name}`);
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
