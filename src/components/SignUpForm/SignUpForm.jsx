import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as authService from "../../services/authService";

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
      const user = await authService.signup(formData); // TODO build signin service function

      await props.setUser(user);
      navigate("/home");
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
        <Button
          variant="primary"
          type="submit"
          className="mt-3 d-flex align-middle"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
