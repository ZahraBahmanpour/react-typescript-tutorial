import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          className="rounded-circle position-relative"
          variant="outline-primary"
        >
          <FaShoppingCart />
          <Badge className="rounded-circle bg-danger position-absolute">
            3
          </Badge>
        </Button>
      </Container>
    </NavbarBs>
  );
}
