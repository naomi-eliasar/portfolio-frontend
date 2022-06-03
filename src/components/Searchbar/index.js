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
