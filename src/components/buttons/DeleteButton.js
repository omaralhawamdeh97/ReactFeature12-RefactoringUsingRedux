// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ deleteProduct, productId }) => {
  return (
    <DeleteButtonStyled onClick={() => deleteProduct(productId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
