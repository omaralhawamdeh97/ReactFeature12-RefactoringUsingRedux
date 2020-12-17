import React, { useState } from "react";
import { useSelector } from "react-redux";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Styling
import { ListWrapper } from "../styles";

const CookieList = () => {
  const cookies = useSelector((state) => state.cookies);

  const [query, setQuery] = useState("");

  const cookieList = cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
