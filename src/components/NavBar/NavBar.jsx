import { NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartIcon from "../CartIcon/CartIcon";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavHead = (props) => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");

  const handleCategoryClick = (event) => {
    setCategory(event.target.id);
  };

  const redirectHome = async () => {
    {
      setCategory("");
      navigate(`/home`);
    }
  };

  return (
    <Navbar expand="md" className="bg-body-secondary">
      <Container fluid>
        <Navbar.Brand>STR by Andrew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={redirectHome}>Home</Nav.Link>

            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item
                href={`/home/${category}`}
                id="shirts"
                onClick={handleCategoryClick}
                category={category}
              >
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`/home/${category}`}
                id="pants"
                onClick={handleCategoryClick}
                category={category}
              >
                Pants
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`/home/${category}`}
                id="shoes"
                onClick={handleCategoryClick}
                category={category}
              >
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`/home/${category}`}
                id="jackets"
                onClick={handleCategoryClick}
                category={category}
              >
                Jackets
              </NavDropdown.Item>{" "}
              <NavDropdown.Item
                href={`/home/${category}`}
                id="accessories"
                onClick={handleCategoryClick}
                category={category}
              >
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavItem>
                  <Link to="" onClick={props.handleSignout}>
                    Sign Out
                  </Link>
                </NavItem>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartIcon cart={props.cart} setCart={props.setCart} />
      </Container>
    </Navbar>
  );
};

export default NavHead;
