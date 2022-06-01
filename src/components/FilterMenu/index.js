import { CDBSidebarMenuItem } from "cdbreact";

const FilterMenu = (props) => {
  return (
    <div className="filterBox">
      <CDBSidebarMenuItem icon={props.icon}>
        <select>
          <option>{props.option1}</option>
          <option>{props.option2}</option>
        </select>
      </CDBSidebarMenuItem>
    </div>
  );
};

export { FilterMenu };
