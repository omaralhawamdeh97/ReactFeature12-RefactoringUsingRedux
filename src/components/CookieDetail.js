import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delete from "./buttons/Delete";

// Styling
import { DetailWrapper } from "../styles";

const CookieDetail = ({ cookies, deleteCookie }) => {
  const { cookieId } = useParams();
  const cookie = cookies.find((cookie) => cookie.id === +cookieId);
  return (
    <DetailWrapper>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price} KD</p>
      <Delete cookieId={cookie.id} deleteCookie={deleteCookie} />
    </DetailWrapper>
  );
};

export default CookieDetail;
