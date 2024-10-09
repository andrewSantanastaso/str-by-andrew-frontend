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
import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";
import { useNavigate, Link, useBlocker } from "react-router-dom";
import { useState } from "react";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const handleAddToCart = async (event) => {
    let user = authService.getUser();
    console.log(user);
    const product = await cartService.addToCart(
      user._id._id,
      event.currentTarget.id
    );
    props.setCart = product;
  };

  return (
    <Card
      key={props.product._id}
      className="m-auto d-flex"
      id={props.product._id}
    >
      <Link to={`/products/:userId/${props.product._id}`}>
        <CardImg
          variant="top"
          src={`${props.product.image}`}
          alt={props.product.alt}
          className="d-flex m-auto mt-1 p-1"
          style={{ width: "15rem", height: "10rem" }}
        />
        <CardBody>
          <CardTitle>
            {props.product.name}
            <br />${props.product.price}
          </CardTitle>
          <CardText>{props.product.description}</CardText>
        </CardBody>
      </Link>
      <Button
        className="align-bottom"
        onClick={(e) => {
          e.stopPropagation();
          console.log(e.currentTarget);
          handleAddToCart(e);
        }}
        id={props.product._id}
      >
        Add To Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
