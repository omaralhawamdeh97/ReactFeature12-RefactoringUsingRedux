import React from "react";
import { Link } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";

// Styling
import { CookieWrapper } from "../styles";

const CookieItem = ({ cookie, deleteCookie }) => {
  return (
    <CookieWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/cookies/${cookie.id}`}>
        <img alt={cookie.name} src={cookie.image} />
        <p className="cookie-name">{cookie.name}</p>
        <p className="cookie-price">{cookie.price} KD</p>
        <DeleteButton cookieId={cookie.id} deleteCookie={deleteCookie} />
      </Link>
    </CookieWrapper>
  );
};

export default CookieItem;
