import React from "react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Styling
import { ListWrapper } from "../styles";

const CookieList = props => {
  const cookieList = props.cookies.map(cookie => (
    <CookieItem
      cookie={cookie}
      key={cookie.id}
      deleteCookie={props.deleteCookie}
      selectCookie={props.selectCookie}
    />
  ));

  return (
    <div>
      <SearchBar searchCookies={props.searchCookies} />
      <ListWrapper>{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
