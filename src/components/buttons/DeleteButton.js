import React from "react";

// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId, deleteCookie }) => {
  return (
    <DeleteButtonStyled onClick={() => deleteCookie(cookieId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
