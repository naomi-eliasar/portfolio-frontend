import { CDBSidebarMenuItem } from "cdbreact";

const Searchbar = () => {
  return (
    <div>
      <CDBSidebarMenuItem icon="search">
        <input onChange={null} placeholder="enter villager name" />
      </CDBSidebarMenuItem>
    </div>
  );
};

export { Searchbar };
