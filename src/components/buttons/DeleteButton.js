import React from "react";
import { useHistory } from "react-router-dom";

// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId, deleteCookie }) => {
  const history = useHistory();

  const handleDelete = (event) => {
    event.preventDefault();
    deleteCookie(cookieId);
    history.push("/cookies");
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
