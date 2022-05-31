import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HeroBanner, VillagerCard } from "../../components";
import background from "../../images/background.jpg";

import { selectVillagers } from "../../store/villager/selector";
import { fetchVillagers } from "../../store/villager/thunk";

const Villagers = () => {
  const dispatch = useDispatch();
  const villagers = useSelector(selectVillagers);

  useEffect(() => {
    dispatch(fetchVillagers);
  }, [dispatch]);

  return villagers ? (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HeroBanner>
        <h1>Villagers</h1>
      </HeroBanner>
      <div>
        {villagers.map((villager) => {
          return (
            <div key={villager.id}>
              <VillagerCard
                key={villager.id}
                id={villager.id}
                name={villager.name}
                title_color={villager.title_color}
                text_color={villager.text_color}
                image_url={villager.image_url}
                species={villager.species}
                personality={villager.personality}
                gender={villager.gener}
                birthday_month={villager.birthday_month}
                birthday_day={villager.birthday_day}
                sign={villager.sign}
                quote={villager.quote}
                phrase={villager.phrase}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p> Loading... </p>
  );
};

export { Villagers };
