import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Container>
      <Navbar>
        <Container fluid>
          <Navbar.Brand>Kanban board - Organization & Efficiency</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
