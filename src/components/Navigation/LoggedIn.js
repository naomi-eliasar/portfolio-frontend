import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/user/slice";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import Button from "@mui/material/Button";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem", color: "white" }}>
        {user?.name}
      </Nav.Item>
      <Button
        onClick={() => dispatch(logOut()) && navigate("/")}
        variant="contained"
        style={{ backgroundColor: "#009a7e" }}
      >
        Logout
      </Button>
    </>
  );
}
