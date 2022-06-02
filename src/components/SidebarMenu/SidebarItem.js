import React from "react";
import { NavLink } from "react-router-dom";
import { CDBSidebarMenuItem } from "cdbreact";

export default function SidebarItem(props) {
  return (
    <NavLink
      as={NavLink}
      to={props.path}
      activeclassname="activeClicked"
      className="navlink"
      style={{ fontSize: "16px" }}
    >
      <CDBSidebarMenuItem icon={props.icon}>
        {props.linkText}
      </CDBSidebarMenuItem>
    </NavLink>
  );
}
