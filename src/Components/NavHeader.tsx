import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Logo } from "./Icons/Logo";
import { Cesta } from "./Icons/Cesta";
import { User } from "./Icons/User";

export function NavHeader() {
  return (
    <div className="border border-verde">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/index">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/produtos">
                <p className="font-ubuntu text-laranja text-2xl hover:text-laranjaDark mr-9">
                  produtos
                </p>
              </Nav.Link>
              <Nav.Link href="/contato">
                <p className="font-ubuntu text-laranja text-2xl hover:text-laranjaDark">
                  contato
                </p>
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/cestinha">
                <Cesta />
              </Nav.Link>
              <Nav.Link href="/cestinha">
                <User />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
