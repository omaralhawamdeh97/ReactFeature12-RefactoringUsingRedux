// Styling
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ productId }) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteProduct(productId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
