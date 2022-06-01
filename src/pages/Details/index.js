import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectVillagerDetails } from "../../store/villager/selector";
import { fetchVillagerDetails } from "../../store/villager/thunk";
import "./styles.css";

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
        return <h1>{detail.name}</h1>;
      })}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export { Details };
