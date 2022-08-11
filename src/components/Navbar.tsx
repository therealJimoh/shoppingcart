import { Navbar as NavCon, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cart from "../assets/cart.svg";

export const Navbar = () => {
  return (
    <NavCon sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <img src={cart} alt="a shopping cart icon" />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              positon: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(40%, -20%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavCon>
  );
};
