import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardTitle,
  Container,
  CardText,
  Badge,
} from "react-bootstrap";
import * as productService from "../../services/productService";
import * as authService from "../../services/authService";
import * as cartService from "../../services/cartService";
import { Link } from "react-router-dom";

const ProductShow = (props) => {
  const { productId, userId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  let user = authService.getUser();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let user = authService.getUser;
        const productData = await productService.showProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchProduct();
  }, [productId]);
  const handleAddToCart = async (event) => {
    let user = authService.getUser();
    console.log(user);
    const product = await cartService.addToCart(
      user._id._id,
      event.currentTarget.id
    );
    props.setCart([...props.cart, product]);
    await cartService.loadCart(user._id._id);
  };
  console.log(product);
  return (
    <>
      <Container className="d-flex m-auto p-2 justify-content-center">
        <Card>
          <CardImg
            src={product.image}
            variant="center"
            style={{ width: "50rem", height: "50rem" }}
          />

          {user._id.isAdmin ? (
            <Link to={`/products/edit/${product._id}`}>
              <p>Edit</p>
            </Link>
          ) : null}
          <CardBody className="d-flex-column align-items-center">
            <CardTitle>{product.name}</CardTitle>
            <CardSubtitle>${product.price}</CardSubtitle>

            <CardText>{product.description}</CardText>
            {product.stock <= 5 ? (
              <Badge className="bg-warning text-dark  m-auto ">
                Low Stock!
              </Badge>
            ) : null}

            <CardFooter className="d-flex justify-content-evenly">
              <Button style={{ width: "20rem" }}>Add To Cart</Button>
              <Link to={`/home/${user._id._id}`}>
                <Button variant="danger" style={{ width: "20rem" }}>
                  Cancel
                </Button>
              </Link>
            </CardFooter>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ProductShow;
