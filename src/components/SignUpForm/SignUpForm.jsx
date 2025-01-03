import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as authService from "../../services/authService";
import { Link } from "react-router-dom";

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user = await authService.signup(formData);
      props.setUser(user);
      console.log(user);
      navigate(`/home`);
    } catch (err) {
      console.error({ error: err.message });
    }
  };
  return (
    <>
      <Form className="w-25 m-auto mt-3" onSubmit={handleSubmit}>
        <h1 className="text-center">Create An Account!</h1>
        <Form.Group>
          <Form.Label htmlFor="name">Enter Your First Name:</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="border border-secondary"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="username">Create a Username:</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="border border-secondary"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Enter Your Email Address:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="border border-secondary"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            aria-describedby="passwordHelpBlock"
            onChange={handleChange}
            value={formData.password}
            className="border border-secondary"
          />
        </Form.Group>
        <Container className="d-flex justify-content-evenly m-auto p-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/">
            <Button variant="danger">Cancel</Button>
          </Link>
        </Container>
      </Form>
    </>
  );
};

export default SignUpForm;
