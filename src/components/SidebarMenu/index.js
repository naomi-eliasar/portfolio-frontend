import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import "./styles.css";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { FilterMenu, Searchbar } from "..";

const SidebarMenu = () => {
  const token = useSelector(selectToken);
  const showMyIslandSidebar = token ? (
    <div>
      <SidebarItem path="/editisland" linkText="Edit island" icon="edit" />
      <SidebarItem path="/dreamies" linkText="Dreamies" icon="heart" />
      <SidebarItem path="/residents" linkText="Residents" icon="house-user" />
      <SidebarItem path="/addisland" linkText="Add Island" icon="plus" />
      <SidebarItem path="/island2" linkText="Island 2" icon="home" />
    </div>
  ) : null;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
      }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#08ccad"
        className="sidebar"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit", fontSize: "18px" }}
          >
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* <Searchbar /> */}
            {/* <CDBSidebarMenuItem> */}
            {/* <input placeholder="enter villager name" /> */}
            {/* <p>Text</p> */}
            {/* </CDBSidebarMenuItem> */}
            {/* <FilterMenu icon="filter" option1="Frog" option2="Koala" /> */}
            {/* <FilterMenu icon="filter" option1="Normal" option2="Peppy" /> */}
            {showMyIslandSidebar}
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
