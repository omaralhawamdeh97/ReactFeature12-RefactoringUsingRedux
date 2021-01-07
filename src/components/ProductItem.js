// Components
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
// Styling
import { ProductWrapper } from "../styles";

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
    </ProductWrapper>
  );
};

export default ProductItem;
