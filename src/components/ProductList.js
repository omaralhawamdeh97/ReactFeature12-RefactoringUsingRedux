// Styling
import { ListWrapper, ThemeButton } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductList = ({ deleteProduct }) => {
  const products = useSelector((state) => state.products);

  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      <ListWrapper>
        <Link to="/products/NewProduct">
          <ThemeButton>Add a cookie!</ThemeButton>{" "}
        </Link>
      </ListWrapper>
    </div>
  );
};

export default ProductList;
