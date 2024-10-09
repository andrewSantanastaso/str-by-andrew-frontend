import { useState, useEffect } from "react";
import * as productService from "../../services/productService";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const user = props.user._id || props.user.user;
  const [store, setStore] = useState([]);
  const navigate = useNavigate();
  const handleProductClick = async (event) => {
    console.log(event.target.id);
    const product = await productService.showProduct(event.target.id);

    props.setProduct(product);
    navigate("/products");
  };

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

  return (
    <>
      <h1 className="ml-2 ">Welcome {user.name} </h1>
      <Row>
        {store.allProducts?.map((product) => (
          <Col
            key={product._id}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="mb-4 d-flex "
          >
            <ProductCard
              product={product}
              setProduct={props.setProduct}
              // handleProductClick={handleProductClick}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
