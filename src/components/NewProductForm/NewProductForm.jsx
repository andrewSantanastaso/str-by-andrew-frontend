import { Container, Form } from "react-bootstrap";

const NewProductForm = () => {
  return (
    <>
      <Form className="w-50 m-auto mt-3">
        <h1 className="text-center">New Product Form</h1>

        <Form.Group controlId="formFile">
          <Form.Label>Add A Product Image</Form.Label>
          <Form.Control type="file" required="true" id="image" name="image" />
        </Form.Group>
      </Form>
    </>
  );
};

export default NewProductForm;
