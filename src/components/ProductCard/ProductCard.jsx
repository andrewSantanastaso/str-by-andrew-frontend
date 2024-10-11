import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Button,
  Badge,
} from "react-bootstrap";
import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  let user = authService.getUser();
  let outOfStock = false;
  const handleAddToCart = async (item) => {
    let user = authService.getUser();

    const product = await cartService.addToCart(user._id._id, item._id);

    props.setCart([...props.cart.products, product]);

    props.refreshCart();
  };
  if (props.product.stock <= 5) {
    outOfStock === true;
  }
  return (
    <Container className="d-flex m-auto p-2">
      <Card
        key={props.product._id}
        className="m-auto d-flex justify-content-center"
        id={props.product._id}
        style={{ width: "25rem", height: "25rem" }}
      >
        <Link to={`/products/${user._id._id}}/${props.product._id}`}>
          <CardImg
            variant="top"
            src={`${props.product.image}`}
            alt={props.product.alt}
            className="d-flex m-auto mt-1 p-1"
            style={{ width: "15rem", height: "15rem" }}
          />
          <CardBody>
            <CardTitle>
              {props.product.name}
              <br />${props.product.price}
            </CardTitle>
            <CardText>
              {props.product.description}
              {props.product.stock <= 5 ? (
                <Badge className="bg-warning text-dark d-inline position-absolute end-0 m-1">
                  Low Stock!
                </Badge>
              ) : null}
              {props.product.stock <= 0 ? (
                <Badge className="bg-danger text-white d-inline position-absolute end-0 m-1">
                  Out of Stock
                </Badge>
              ) : null}
            </CardText>
          </CardBody>
        </Link>
        <Button
          className="align-bottom"
          onClick={(e) => {
            e.stopPropagation();

            handleAddToCart(props.product);
          }}
          id={props.product._id}
        >
          Add To Cart
        </Button>
      </Card>
    </Container>
  );
};

export default ProductCard;
