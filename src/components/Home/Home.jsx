import { useState, useEffect } from "react";
import * as productService from "../../services/productService";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const Home = (props) => {
  const user = props.user._id || props.user.user;
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await productService.loadProducts();
        setStore(productData);
      } catch (error) {
        console.error({ error: error.message });
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
            className="mb-4 d-flex"
          >
            <Card
              key={product._id}
              style={{ width: "20rem" }}
              className="m-auto"
            >
              <CardImg
                variant="top"
                src={`${product.image}`}
                alt={product.alt}
                className="d-flex m-auto mt-2"
                style={{ width: "15rem", height: "10rem" }}
              />
              <CardBody>
                <CardTitle>
                  {product.name}
                  <br />${product.price}
                </CardTitle>
                <CardText>{product.description}</CardText>
                <Button className="align-bottom">Add To Cart</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
