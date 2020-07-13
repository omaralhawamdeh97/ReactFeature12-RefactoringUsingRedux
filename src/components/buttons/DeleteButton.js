import React from "react";

// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId, deleteCookie }) => {
  const handleDelete = (event) => deleteCookie(cookieId);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
