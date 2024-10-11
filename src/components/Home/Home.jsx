import { useState, useEffect } from "react";
import * as productService from "../../services/productService";
import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";

import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";

const Home = (props) => {
  const user = props.user._id || props.user.user;
  const [cart, setCart] = useState([]);
  const { userId, category } = useParams();

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
  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     let user = await authService.getUser();

  //     try {
  //       const cartData = await cartService.loadCart(user._id._id);

  //       setCart(cartData);
  //     } catch (error) {
  //       console.log({ error: error.message });
  //     }
  //   };

  //   fetchCartItems();
  // }, []);

  const refreshCart = async () => {
    let user = await authService.getUser();

    try {
      const cartData = await cartService.loadCart(user._id._id);

      setCart(cartData);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

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
                setCart={setCart}
                cart={cart}
                refreshCart={refreshCart}
              />
            </Col>
          ) : null
        )}
      </Row>
    </>
  );
};
export default Home;
