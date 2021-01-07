// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ productId, deleteProduct }) => {
  return (
    <DeleteButtonStyled onClick={() => deleteProduct(productId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
