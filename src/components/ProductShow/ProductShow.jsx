import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Card, CardImg } from "react-bootstrap";
import * as productService from "../../services/productService";
import * as authService from "../../services/authService";
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
  console.log(product);
  return (
    <>
      <Card>
        <CardImg src={product.image} variant="center" />
        <h1 className="m-auto">{product.name}</h1>
        {user._id.isAdmin ? (
          <Link to={`/products/edit/${product._id}`}>
            <p>Admin</p>
          </Link>
        ) : null}
      </Card>
    </>
  );
};

export default ProductShow;
