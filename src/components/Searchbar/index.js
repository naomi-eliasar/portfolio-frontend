import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter villager name"
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export { Searchbar };

////Sidebar searchbar
// import { CDBSidebarMenuItem } from "cdbreact";

// const Searchbar = () => {
//   return (
//     <CDBSidebarMenuItem icon="search">
//       <input placeholder="enter villager name" type="text" />
//     </CDBSidebarMenuItem>
//   );
// };
