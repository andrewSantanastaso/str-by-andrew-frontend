import { useState, useEffect } from "react";
import * as productService from "../../services/productService";

const Home = (props) => {
  const user = props.user._id || props.user.user;
  const [products, setProducts] = useState([]);
  console.log(user);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await productService.loadProducts();
        setProducts(productData);
      } catch (error) {
        console.error({ error: error.message });
      }
    };
    fetchProducts();
  }, []);
  const productsArray = products.products;
  return (
    <>
      <h1>Welcome {user.name} </h1>
      <ul>
        {productsArray.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
