import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import * as productService from "../../services/productService";
import { useNavigate } from "react-router-dom";

const NewProductForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: null,
    description: "",
    category: "",
    stock: null,
    image: "",
    alt: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productService.addProduct(formData);
      alert(`Added ${formData.name} to store succesfully`);
      navigate("/admin");
    } catch (err) {
      console.error({ error: err.message });
    }
  };
  return (
    <>
      <Form className="w-50 m-auto mt-3" onSubmit={handleSubmit}>
        <h1 className="text-center">New Product Form</h1>
        <Form.Group>
          <Form.Group>
            <Form.Label>Add A Product Name</Form.Label>
            <Form.Control
              type="text"
              required="true"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Add A Product Price</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                type="number"
                required="true"
                id="price"
                name="price"
                aria-label="Amount"
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Add A Product Description</Form.Label>
            <Form.Control
              type="textarea"
              required="true"
              id="description"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select a Product Category</Form.Label>
            <Form.Select
              type="select"
              required="true"
              id="category"
              name="category"
              onChange={handleChange}
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
                required="true"
                id="stock"
                name="stock"
                aria-label="Stock"
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Add A Link to Product Image</Form.Label>
            <Form.Control
              type="url"
              required="true"
              id="image"
              name="image"
              onChange={handleChange}
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
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="mt-5" onClick={() => resizeTo()}>
              Add Product to Store
            </Button>
          </Form.Group>
        </Form.Group>
      </Form>
    </>
  );
};

export default NewProductForm;
