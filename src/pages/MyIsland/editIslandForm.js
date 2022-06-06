import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Field } from "../../components";
import { selectIsland } from "../../store/island/selector";
import { updateMyIsland } from "../../store/island/thunk";
import { fetchIsland } from "../../store/island/thunk";
import { useParams } from "react-router-dom";

const EditIslandForm = ({ handleClose }) => {
  const dispatch = useDispatch();
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
  console.log("island id", islandDetails.id);

  const routeParams = useParams();

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
            <Form.Label>Starter Flower</Form.Label>
            <Form.Select
              value={starterFlower}
              onChange={(event) => setStarterFlower(event.target.value)}
            >
              <option>Cosmos</option>
              <option>Hyacinths</option>
              <option>Lillies</option>
              <option>Mums</option>
              <option>Pansies</option>
              <option>Roses</option>
              <option>Tulips</option>
              <option>Windflowers</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Starter Fruit</Form.Label>
            <Form.Select
              value={starterFruit}
              onChange={(event) => setStarterFruit(event.target.value)}
            >
              <option>Apple</option>
              <option>Cherry</option>
              <option>Orange</option>
              <option>Peach</option>
              <option>Pear</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Background color</Form.Label>
            <Form.Control
              value={backgroundColor}
              onChange={(event) => setBackgroundColor(event.target.value)}
              type="color"
            />
          </Form.Group>
          <Form.Group>
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
