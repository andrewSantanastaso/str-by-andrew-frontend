import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as productService from "../../services/productService";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";

const ProductEdit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(productId);
        const productData = await productService.showProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchProduct();
  }, [productId]);

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     price: null,
  //   });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productService.editProduct(productId, product);
    } catch (err) {
      console.error({ error: err.message });
    }
  };
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form className="w-50 m-auto mt-3" onSubmit={handleSubmit}>
        <h1 className="text-center">Edit Product</h1>
        <Form.Group>
          <Form.Group>
            <Form.Label>Add A Product Name</Form.Label>
            <Form.Control
              type="text"
              required
              id="name"
              name="name"
              onChange={handleChange}
              placeholder={product.name}
              value={product.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Add A Product Price</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                type="number"
                required
                id="price"
                name="price"
                aria-label="Amount"
                onChange={handleChange}
                placeholder={product.price}
                value={product.price}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Add A Product Description</Form.Label>
            <Form.Control
              type="textarea"
              required
              id="description"
              name="description"
              onChange={handleChange}
              value={product.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select a Product Category</Form.Label>
            <Form.Select
              type="select"
              required
              id="category"
              name="category"
              value={product.category}
            >
              <option>Categories...</option>
              <option value="shirts">Shirts</option>
              <option value="pants">Pants</option>
              <option value="shoes">Shoes</option>
              <option value="jackets">Jackets</option>
              <option value="accessories">Accessories</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Add Product Stock</Form.Label>
            <InputGroup>
              <FormControl
                type="number"
                required
                id="stock"
                name="stock"
                aria-label="Stock"
                onChange={handleChange}
                value={product.stock}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Add A Link to Product Image</Form.Label>
            <Form.Control
              type="url"
              required
              id="image"
              name="image"
              onChange={handleChange}
              value={product.image}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Add Product Image Alternate Text</Form.Label>
            <Form.Control
              type="text"
              required="true"
              id="alt"
              name="alt"
              onChange={handleChange}
              value={product.alt}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="mt-5">
              Add Product to Store
            </Button>
          </Form.Group>
        </Form.Group>
      </Form>
    </>
  );
};

export default ProductEdit;
