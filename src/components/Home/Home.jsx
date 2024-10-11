import { useState, useEffect } from "react";
import * as productService from "../../services/productService";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import * as authService from "../../services/authService";
import * as cartService from "../../services/cartService";

const Home = (props) => {
  const user = props.user._id || props.user.user;

  const { userId, category } = useParams();
  console.log(category);
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await productService.loadProducts();
        setStore(productData);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchProducts();
  }, []);
  console.log(store.allProducts);

  return (
    <>
      <h1 className="m-2 ">Welcome {user.name}</h1>
      <Row>
        {store.allProducts?.map((product) =>
          product.category === category || !category ? (
            <Col
              key={product._id}
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className="m-auto"
            >
              <ProductCard
                product={product}
                setProduct={props.setProduct}
                userId={userId}
                setCart={props.setCart}
                cart={props.cart}
              />
            </Col>
          ) : null
        )}
      </Row>
    </>
  );
};
export default Home;
