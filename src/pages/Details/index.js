import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectVillagerDetails } from "../../store/villager/selector";
import { fetchVillagerDetails } from "../../store/villager/thunk";
import "./styles.css";
import { HeroBanner, VillagerCard, VillagerSpecs } from "../../components";
import { VillagerHouse } from "../../components/VillagerHouse";

const Details = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const details = useSelector(selectVillagerDetails);

  useEffect(() => {
    dispatch(fetchVillagerDetails(routeParams.id));
  }, [dispatch, routeParams.id]);

  console.log("route param:", routeParams.id);

  return details ? (
    <div className="displayDetails">
      {details.map((detail) => {
        return (
          <div>
            <HeroBanner>
              <h1>{detail.name}</h1>
              <p>"{detail.quote}"</p>
            </HeroBanner>
            <div className="displayDetails">
              <VillagerCard
                key={detail.id}
                id={detail.id}
                name={detail.name}
                image_url={detail.image_url}
                personality={detail.personality}
                species={detail.species}
              />
              <VillagerHouse
                key={detail.id}
                id={detail.id}
                name={detail.name}
                houseExteriorUrl={detail.nh_details.house_exterior_url}
                houseInteriorUrl={detail.nh_details.house_interior_url}
              />
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
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { Details };
