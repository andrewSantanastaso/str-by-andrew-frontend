import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import {
  Form,
  Card,
  Button,
  FormLabel,
  FormControl,
  Container,
} from "react-bootstrap";

const SignInForm = (props) => {
  const navigate = useNavigate(); // added this for navigation purposes

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const redirectCurrentuser = async () => {
    {
      const currentUser = await authService.getUser();

      if (!currentUser) {
        alert("Username or password incorrect");
        redirect("/sign-in");
        throw new Error();
      }
      if (currentUser._id.isAdmin === true) {
        navigate("/admin");
      } else {
        console.log(currentUser);
        navigate(`/home/${currentUser._id._id}`);
      }
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);

      props.setUser(user);
      console.log(user);
      redirectCurrentuser();
    } catch (err) {
      console.error({ error: err.message });
    }
  };

  return (
    <main>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center align-self-center border border-danger vh-100"
        style={{ height: "1000px" }}
      >
        <Card
          style={{ width: "30rem" }}
          className="d-flex p-1 border border-5 border-primary "
        >
          <h1 className="text-center">Log In</h1>
          <Form onSubmit={handleSubmit}>
            <div>
              <FormLabel htmlFor="email">Username:</FormLabel>
              <FormControl
                type="text"
                autoComplete="off"
                id="username"
                value={formData.username}
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <FormControl
                type="password"
                autoComplete="off"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Container className="d-flex justify-content-evenly">
                <Button type="submit">Log In</Button>
                <Link to="/">
                  <Button variant="danger">Cancel</Button>
                </Link>
              </Container>
            </div>
          </Form>
        </Card>
      </Container>
    </main>
  );
};
export default SignInForm;
