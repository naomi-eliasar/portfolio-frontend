import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import Button from "@mui/material/Button";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem", color: "white" }}>
        {user?.email}
      </Nav.Item>
      <Button
        onClick={() => dispatch(logOut())}
        variant="contained"
        style={{ backgroundColor: "#009a7e" }}
      >
        Logout
      </Button>
    </>
  );
}
