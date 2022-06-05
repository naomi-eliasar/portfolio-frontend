import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsland } from "../../store/island/selector";

export default function editIslandForm() {
  //   const island = useSelector(selectIsland);
  //   const dispatch = useDispatch();
  //   const [name, setName] = useState(island.name);
  //   const [description, setDescription] = useState(island.description || "");
  //   const [starterFruit, setStarterFruit] = useState(island.starterFruit);
  //   const [starterFlower, setStarterFlower] = useState(island.starterFlower);
  //   const [backgroundColor, setBackgroundColor] = useState(
  //     island.backgroundColor
  //   );
  //   const [textColor, setTextColor] = useState(island.textColor);

  //   function submitForm(event) {
  //     event.preventDefault();
  //     console.log(
  //       name,
  //       description,
  //       starterFruit,
  //       starterFlower,
  //       backgroundColor,
  //       textColor
  //     );

  //     dispatch(
  //       updateMyIsland(
  //         name,
  //         description,
  //         starterFruit,
  //         starterFlower,
  //         backgroundColor,
  //         textColor
  //       )
  //     );
  //   }
  return (
    <div>
      <h1>Edit island</h1>
    </div>
  );
}
