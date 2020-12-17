import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";

// Styling
import { DetailWrapper } from "../styles";

const CookieDetail = () => {
  const { cookieSlug } = useParams();
  const cookie = useSelector((state) =>
    state.cookies.find((cookie) => cookie.slug === cookieSlug)
  );

  if (!cookie) return <Redirect to="/cookies" />;

  return (
    <DetailWrapper>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} />
    </DetailWrapper>
  );
};

export default CookieDetail;
