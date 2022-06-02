import React from "react";
import { FaSearch } from "react-icons/fa";
// import { CDBSidebarMenuItem } from "cdbreact";

// const Searchbar = () => {
//   return (
//     <CDBSidebarMenuItem icon="search">
//       <input placeholder="enter villager name" type="text" />
//     </CDBSidebarMenuItem>
//   );
// };

const Searchbar = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter villager name"
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </div>
  );
};

export { Searchbar };
