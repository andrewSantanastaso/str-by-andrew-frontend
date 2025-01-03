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
import { Link, useNavigate } from "react-router-dom";

const ProductShow = (props) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  let user = authService.getUser();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await productService.showProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchProduct();
  }, [productId]);
  const handleAddToCart = async () => {
    let user = authService.getUser();
    if (!user) {
      navigate("/");
      return;
    }
    const product = await cartService.addToCart(user._id, productId);
    props.setCart([...props.cart, product]);
    await cartService.loadCart(user._id);
  };

  return (
    <>
      <Container className="d-flex m-auto p-2 justify-content-center">
        <Card>
          <CardImg
            src={product.image}
            variant="center"
            style={{ width: "50rem", height: "50rem" }}
          />

          {user?.isAdmin ? (
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
              <Button style={{ width: "20rem" }} onClick={handleAddToCart}>
                Add To Cart
              </Button>
              <Link to={`/home`}>
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
