import React from "react";

// Styling
import { DeleteButton } from "../../styles";

const Delete = ({ cookieId, deleteCookie }) => {
  return (
    <DeleteButton onClick={(event) => deleteCookie(event, cookieId)}>
      Delete
    </DeleteButton>
  );
};

export default Delete;
