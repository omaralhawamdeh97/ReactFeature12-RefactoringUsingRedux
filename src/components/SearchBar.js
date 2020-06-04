import React from "react";

// Styling
import { Search } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <Search
      placeholder="Search for a cookie name"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
