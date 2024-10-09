import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as productService from "../../services/productService";
import { useParams } from "react-router-dom";

const ProductShow = (props) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
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

  return (
    <>
      <h1>{product.name}</h1>
    </>
  );
};

export default ProductShow;
