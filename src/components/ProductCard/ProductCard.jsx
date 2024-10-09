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
import * as productService from "../../services/productService";
import { useNavigate, Link, useBlocker } from "react-router-dom";
import { useState } from "react";

const ProductCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card
      key={props.product._id}
      className="m-auto d-flex"
      id={props.product._id}
    >
      <Link to={`/products/${props.product._id}`}>
        <CardImg
          variant="top"
          src={`${props.product.image}`}
          alt={props.product.alt}
          className="d-flex m-auto mt-2"
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
          console.log("button");
        }}
      >
        Add To Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
