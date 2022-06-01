import React from "react";
import { CDBSidebarMenuItem } from "cdbreact";

const Searchbar = () => {
  return (
    <div>
      <CDBSidebarMenuItem icon="search">
        <input placeholder="enter villager name" />
      </CDBSidebarMenuItem>
    </div>
  );
};

export { Searchbar };
