import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export default function Navbar() {
  const { totalCartQuantity } = useShoppingCartContext();
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
          {totalCartQuantity > 0 && (
            <Badge className="rounded-circle bg-danger position-absolute">
              {totalCartQuantity}
            </Badge>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
}
