import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./styles.css";

const Navigation = () => {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const showMyIsland = token ? (
    <NavbarItem path="/myisland" linkText="My Island" />
  ) : null;

  return (
    <Navbar expand="lg" sticky="top" variant="dark" className="navbar-custom">
      <Navbar.Brand as={NavLink} to="/">
        <h2>Portfolio project</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/villagers" linkText="Villagers" />
          {showMyIsland}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { Navigation };
