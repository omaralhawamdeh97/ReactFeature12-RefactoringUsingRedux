import React, { useState } from "react";

// Components
import AddButton from "./buttons/AddButton";
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Styling
import { ListWrapper } from "../styles";

const CookieList = ({ cookies, createCookie, deleteCookie }) => {
  const [query, setQuery] = useState("");

  const cookieList = cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => (
      <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
      <AddButton createCookie={createCookie} />
    </div>
  );
};

export default CookieList;
