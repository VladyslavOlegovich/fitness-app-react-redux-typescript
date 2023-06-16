import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            className={window.location.pathname === "/" ? "active" : ""}
          >
            Мій профіль
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/journal"
            active={window.location.pathname === "/journal"}
          >
            Журнал тренувань
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/plans"
            active={window.location.pathname === "/plans"}
          >
            Плани тренувань
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/nutrition"
            active={window.location.pathname === "/nutrition"}
          >
            Харчування
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/progress"
            active={window.location.pathname === "/progress"}
          >
            Прогрес
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MainMenu;
