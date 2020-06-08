import React from "react";

// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId, deleteCookie }) => {
  return (
    <DeleteButtonStyled onClick={(event) => deleteCookie(event, cookieId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
