import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  Container,
} from "react-bootstrap";

const Landing = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center align-self-center border border-danger vh-100"
      style={{ height: "1000px" }}
    >
      <Card
        style={{ width: "30rem" }}
        className="d-flex align-items-center border border-5 border-secondary"
      >
        <CardBody className="">
          <CardTitle>Welcome to STR by Andrew</CardTitle>

          <Container className="d-flex justify-content-center">
            <CardLink href="/sign-in">Sign In</CardLink>

            <CardLink href="/sign-up">Sign Up</CardLink>
          </Container>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Landing;
