import React from "react";
import { CDBSidebarMenuItem } from "cdbreact";

const FilterMenu = (props) => {
  return (
    <div className="filterBox">
      <CDBSidebarMenuItem icon={props.icon}>
        <select>
          <option>{props.options}</option>
        </select>
      </CDBSidebarMenuItem>
    </div>
  );
};

export { FilterMenu };
