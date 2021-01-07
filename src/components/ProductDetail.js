import { Link, Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = ({ products, deleteProduct }) => {
  const { productSlug } = useParams();
  const product = products.find((product) => product.slug === productSlug);

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <Link to="/products">Back to Products</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
    </DetailWrapper>
  );
};

export default ProductDetail;
