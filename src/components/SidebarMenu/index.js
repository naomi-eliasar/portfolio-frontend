import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./styles.css";

const SidebarMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#08ccad">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/editisland"
              activeClassName="activeClicked"
              className="navlink"
            >
              <CDBSidebarMenuItem icon="edit">Edit island</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/dreamies"
              activeClassName="activeClicked"
              className="navlink"
            >
              <CDBSidebarMenuItem icon="heart">Dreamies</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/residents"
              activeClassName="activeClicked"
              className="navlink"
            >
              <CDBSidebarMenuItem icon="house-user">
                Residents
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/addisland"
              activeClassName="activeClicked"
              className="navlink"
            >
              <CDBSidebarMenuItem icon="plus">Add Island</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/island2"
              activeClassName="activeClicked"
              className="navlink"
            >
              <CDBSidebarMenuItem icon="home">Island 2</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export { SidebarMenu };
