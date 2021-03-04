import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src="/images/fashe_logo.svg" alt="Fashe logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/login">
                <Nav.Link><i className="fas fa-user" aria-label="Sign in icon"></i> Sign in</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
              <Nav.Link><i className="fas fa-shopping-bag" aria-label="Cart icon"></i> Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;