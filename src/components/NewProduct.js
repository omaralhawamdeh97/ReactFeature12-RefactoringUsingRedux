import { useState } from "react";
import { createProduct, updateProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { MainDiv, InputBar } from "../styles";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const NewProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);

  const foundProduct = products.find((prod) => prod.slug === productSlug);

  const [product, setProduct] = useState(
    foundProduct ?? { name: "", price: "", image: "", descreption: "" }
  );

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundProduct) dispatch(updateProduct(product));
    else dispatch(createProduct(product));
    history.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <MainDiv>
        <label>
          name:
          <InputBar
            value={product.name}
            placeholder="enter Cookie name "
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          price:
          <InputBar
            value={product.price}
            placeholder="enter Cookie price "
            type="number"
            name="price"
            onChange={handleChange}
          />
        </label>
        <label>
          image:
          <InputBar
            value={product.image}
            placeholder="enter Cookie image link "
            type="text"
            name="image"
            onChange={handleChange}
          />
        </label>
        <label>
          description:
          <InputBar
            value={product.description}
            placeholder="enter Cookie description "
            type="text"
            name="description"
            onChange={handleChange}
          />
        </label>
        <button type="submit">{foundProduct ? "Modify" : "Create"}</button>
      </MainDiv>
    </form>
  );
};
export default NewProduct;
