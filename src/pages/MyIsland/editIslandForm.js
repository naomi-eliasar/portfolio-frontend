import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Field } from "../../components";
import { selectIsland } from "../../store/island/selector";
import { updateMyIsland } from "../../store/island/thunk";
import { fetchIsland } from "../../store/island/thunk";
import { useParams } from "react-router-dom";

const EditIslandForm = ({ handleClose, uploadImage }) => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const islandDetails = useSelector(selectIsland);

  const [name, setName] = useState(islandDetails.name);
  const [description, setDescription] = useState(
    islandDetails.description || ""
  );
  const [starterFruit, setStarterFruit] = useState(islandDetails.starterFruit);
  const [starterFlower, setStarterFlower] = useState(
    islandDetails.starterFlower
  );
  const [backgroundColor, setBackgroundColor] = useState(
    islandDetails.backgroundColor
  );
  const [textColor, setTextColor] = useState(islandDetails.textColor);

  console.log("edit island", islandDetails);

  const submitForm = (event) => {
    event.preventDefault();
    console.log(
      name,
      description,
      starterFruit,
      starterFlower,
      backgroundColor,
      textColor
    );

    dispatch(
      updateMyIsland(
        name,
        description,
        starterFruit,
        starterFlower,
        backgroundColor,
        textColor
      )
    );
    dispatch(handleClose);
    dispatch(fetchIsland(routeParams.id));
  };

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Field>
          <h1>Edit your island</h1>
          <Form.Group>
            <Form.Label>Island Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Name of your island"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Island Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Description of your island"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Upload image</Form.Label>
            <Form.Control type="file" onChange={uploadImage} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Starter Flower</Form.Label>
            <Form.Check>
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Cosmos"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-cosmos.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Hyacinths"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-hyacinths.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Lillies"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-lilies.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Mums"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-mums.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Pansies"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-pansies.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Roses"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-roses.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Tulips"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-tulips.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group1"
                inline
                label="Windflowers"
                value={starterFlower}
                onChange={() =>
                  setStarterFlower(
                    "https://acnh.co/assets/img/nintendo-switch-acnh-flowers/white-windflowers.png"
                  )
                }
              />
            </Form.Check>
          </Form.Group>

          <Form.Group>
            <Form.Label>Starter Fruit</Form.Label>
            <Form.Check>
              <Form.Check
                type="radio"
                name="group2"
                inline
                label="Apple"
                value={starterFruit}
                onChange={() =>
                  setStarterFruit(
                    "https://www.models-resource.com/resources/big_icons/36/35108.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group2"
                inline
                label="Cherry"
                value={starterFruit}
                onChange={() =>
                  setStarterFruit(
                    "https://www.models-resource.com/resources/big_icons/36/35111.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group2"
                inline
                label="Orange"
                value={starterFruit}
                onChange={() =>
                  setStarterFruit(
                    "https://www.models-resource.com/resources/big_icons/36/35113.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group2"
                inline
                label="Peach"
                value={starterFruit}
                onChange={() =>
                  setStarterFruit(
                    "https://www.models-resource.com/resources/big_icons/36/35114.png"
                  )
                }
              />
              <Form.Check
                type="radio"
                name="group2"
                inline
                label="Pear"
                value={starterFruit}
                onChange={() =>
                  setStarterFruit(
                    "https://www.models-resource.com/resources/big_icons/36/35112.png"
                  )
                }
              />
            </Form.Check>
          </Form.Group>

          <Form.Group>
            <Form.Label>Background color</Form.Label>
            <Form.Control
              value={backgroundColor}
              onChange={(event) => setBackgroundColor(event.target.value)}
              type="color"
            />
            <Form.Label>Text color</Form.Label>
            <Form.Control
              value={textColor}
              onChange={(event) => setTextColor(event.target.value)}
              type="color"
            />
          </Form.Group>

          <Form.Group className="mt-3 mb-2">
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#009a7e", fontFamily: "FinkHeavy" }}
              onClick={submitForm}
            >
              Save changes
            </Button>
          </Form.Group>
        </Field>
      </Form>
    </Container>
  );
};

export { EditIslandForm };
