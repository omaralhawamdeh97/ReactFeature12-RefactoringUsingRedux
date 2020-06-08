import React, { useState } from "react";

// Components
import CookieItem from "./CookieItem";
import CookieModal from "./modals/CookieModal";
import SearchBar from "./SearchBar";

// Styling
import { BsPlusCircle } from "react-icons/bs";
import { ListWrapper } from "../styles";

const CookieList = ({ cookies, createCookie, deleteCookie }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const cookieList = cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => (
      <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
      <BsPlusCircle
        className="float-right"
        size="2em"
        onClick={() => setIsOpen(true)}
      />
      <CookieModal
        isOpen={isOpen}
        closeModal={closeModal}
        createCookie={createCookie}
      />
    </div>
  );
};

export default CookieList;
