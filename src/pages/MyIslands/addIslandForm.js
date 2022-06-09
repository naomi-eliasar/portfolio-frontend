import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Field } from "../../components";
import { addUserIsland } from "../../store/user/actions";
import { fetchUserIslands } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

const AddIslandForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [starterFruit, setStarterFruit] = useState("");
  const [starterFlower, setStarterFlower] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    const newIsland = {
      name,
      description,
      starterFruit,
      starterFlower,
      backgroundColor,
      textColor,
    };

    console.log("new island info", newIsland);

    dispatch(addUserIsland(newIsland));

    dispatch(handleClose);
    dispatch(fetchUserIslands(user.id));
    setName("");
    setDescription("");
    setStarterFruit("");
    setStarterFlower("");
    setBackgroundColor("");
    setTextColor("");
  };

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Field>
          <h1>Add a new island</h1>
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
              Save island
            </Button>
          </Form.Group>
        </Field>
      </Form>
    </Container>
  );
};

export { AddIslandForm };
