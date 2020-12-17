import React from "react";
import { useDispatch } from "react-redux";

// Redux Actions
import { deleteCookie } from "../../store/actions";

// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId }) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteCookie(cookieId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
