import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HeroBanner } from "../../components";
import { selectVillagerDetails } from "../../store/villager/selector";
import { fetchVillagerDetails } from "../../store/villager/thunk";

const Details = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const details = useSelector(selectVillagerDetails);

  console.log("details", details);

  useEffect(() => {
    dispatch(fetchVillagerDetails(routeParams.name));
  }, [dispatch, routeParams.name]);

  // return details ? (
  //   <div>
  //     <HeroBanner>
  //       <h1>{details.name}</h1>
  //     </HeroBanner>
  //     <p>{details.id}</p>
  //   </div>
  // ) : (
  //   <p>Loading...</p>
  // );
  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  );
};

export { Details };
